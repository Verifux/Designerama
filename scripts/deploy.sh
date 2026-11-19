#!/usr/bin/env bash
# Deploy the Designerama static export to xneelo web hosting over SSH (port 2222).
# Default is a dry run. Pass --go to upload for real.
# Needs .deploy.env (git-ignored) with XNEELO_USER, and a key at ~/.ssh/xneelo_designerama.
set -euo pipefail

cd "$(dirname "$0")/.."

[ -f .deploy.env ] && . ./.deploy.env
: "${XNEELO_USER:?Set XNEELO_USER in .deploy.env (the main FTP user from the xneelo panel)}"
XNEELO_HOST="${XNEELO_HOST:-www66.jnb2.host-h.net}"
XNEELO_PORT="${XNEELO_PORT:-2222}"
XNEELO_KEY="${XNEELO_KEY:-$HOME/.ssh/xneelo_designerama}"
REMOTE_DIR="${XNEELO_REMOTE_DIR:-public_html}"

GO=0
[ "${1:-}" = "--go" ] && GO=1

echo "==> Building static export"
STATIC_EXPORT=true npm run export >/dev/null

[ -f out/index.html ] || { echo "out/index.html missing, build failed"; exit 1; }
grep -rl "IBM_Plex_Mono\|font-mono" out/_next/static/css 2>/dev/null && { echo "mono font reference found in build, aborting"; exit 1; } || true

SSH_CMD="ssh -p $XNEELO_PORT -i $XNEELO_KEY -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"

# --delete clears stale hashed chunks. Server-only paths that are not part of out/
# are protected: .htaccess, cgi-bin, .well-known, and visual/ (the legacy site
# linked from the portfolio page, includes the resume PDF).
RSYNC_ARGS=(-rltvz --delete
  --exclude '.htaccess' --exclude 'cgi-bin/' --exclude '.well-known/' --exclude 'visual/'
  -e "$SSH_CMD")

if [ "$GO" -eq 0 ]; then
  echo "==> DRY RUN (nothing uploaded). Re-run with --go to deploy."
  rsync -n "${RSYNC_ARGS[@]}" out/ "$XNEELO_USER@$XNEELO_HOST:$REMOTE_DIR/" | tail -40
  exit 0
fi

echo "==> Uploading to $XNEELO_HOST:$REMOTE_DIR"
rsync "${RSYNC_ARGS[@]}" out/ "$XNEELO_USER@$XNEELO_HOST:$REMOTE_DIR/" | tail -15

echo "==> Verifying live site"
sleep 3
HTML=$(curl -s "https://designerama.co.za/?v=$(date +%s)")
CSS=$(echo "$HTML" | grep -o '/_next/static/css/[^"]*\.css' | sort -u | while read -r f; do curl -s "https://designerama.co.za$f"; done)
echo "$CSS" | grep -q "Hanken_Grotesk" && echo "Hanken Grotesk in live CSS: OK" || echo "Hanken Grotesk NOT found in live CSS"
echo "$CSS" | grep -qE "IBM_Plex_Mono|Plex Mono" && echo "WARNING: IBM Plex Mono still live" || echo "No IBM Plex Mono: OK"
