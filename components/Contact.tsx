import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-sans text-[18px] text-teal-500 block mb-12">
            Contact
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <ScrollReveal delay={100}>
            <h2
              className="font-sans font-bold text-teal-900 leading-tight text-[32px] lg:text-[64px]"
              style={{ lineHeight: 1.05 }}
            >
              Let's build<br />
              something<br />
              <span className="text-teal-500">worth using.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-6">
              <p className="font-serif text-base text-muted leading-relaxed">
                I'm currently exploring senior IC opportunities at enterprise
                product companies. If you're looking for a designer who brings
                research depth, systems thinking, and architectural clarity —
                let's talk.
              </p>

              <a
                href="mailto:hello@uxbybridget.com"
                className="font-sans font-semibold text-base text-teal-700 hover:text-teal-500 transition-colors duration-200 underline underline-offset-4"
              >
                hello@uxbybridget.com
              </a>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold text-[18px] inline-flex items-center justify-center bg-teal-700 text-white px-7 py-3 rounded-[32px] hover:bg-teal-900 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  className="font-sans font-semibold text-[18px] inline-flex items-center justify-center border border-teal-700 text-teal-700 px-7 py-3 rounded-[32px] hover:bg-teal-700 hover:text-white transition-colors duration-200"
                >
                  Résumé
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div className="border-t border-teal-100 mt-24 pt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:items-center">
          <span className="font-sans font-bold text-[18px] text-teal-700">
            UXbyBridget
          </span>
          <span className="font-serif text-sm text-muted">
            © 2025 Bridget Shepherd
          </span>
        </div>
      </div>
    </section>
  );
}
