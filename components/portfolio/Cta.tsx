import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/shared/Button";
import { ContactForm } from "@/components/shared/ContactForm";
import { cta } from "@/lib/content/portfolio";

export function Cta() {
  const linkedIn = cta.actions.find((a) => a.href.includes("linkedin"));

  return (
    <section id="contact" className="py-32 pb-36">
      <RevealOnScroll className="mx-auto max-w-container px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow mb-5">{cta.eyebrow}</p>
          <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.4vw,3rem)]">{cta.heading}</h2>
          <p className="mt-5 text-ink-muted">{cta.body}</p>
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <ContactForm
            messageLabel="What's on your mind?"
            messagePlaceholder="A role, a project, or just to talk..."
            subject="New message from your portfolio site"
          />
          {linkedIn && (
            <div className="mt-6 text-center">
              <Button href={linkedIn.href} variant={linkedIn.variant}>
                {linkedIn.label}
              </Button>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
}
