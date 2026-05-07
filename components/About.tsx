import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 lg:px-12 bg-teal-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-sans font-semibold text-teal-200 mb-16"
            style={{ fontSize: "48px" }}
          >
            About
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Photo placeholder */}
          <ScrollReveal>
            <div className="aspect-[4/5] bg-teal-700 relative overflow-hidden">
              <div className="absolute inset-0 flex items-end p-6">
                <span className="font-sans text-xs text-teal-200">
                  Photo coming soon
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-8 pt-2">
              <h2 className="font-sans font-bold text-white text-[28px] lg:text-[48px]" style={{ lineHeight: 1.1 }}>
                Bridget Shepherd
              </h2>

              <div className="space-y-5 font-serif text-base text-teal-100 leading-relaxed">
                <p>
                  I came to UX through architecture—a discipline obsessed with how structure shapes experience. That way of thinking stuck.
                </p>
                <p>
                  Today, I design enterprise products at DIRECTV used by millions of customers, from acquisition flows to complex checkout systems. My work sits at both ends of the spectrum: defining the systems teams rely on and diving deep into the details that make an experience actually work.
                </p>
                <p>
                  I'm especially drawn to messy, complex problems—where the path isn't obvious and the structure doesn't exist yet. That's where my background in architecture shows up most: making sense of ambiguity, aligning constraints, and building something coherent out of it.
                </p>
                <p>
                  I also think a lot about how AI is changing our field. Not as a shortcut, but as a tool to think faster, explore more directions, and push ideas further than we could before.
                </p>
                <p>
                  At the core, I care about building products that are clear, useful, and grounded in real user needs—not just what looks good on a screen.
                </p>
              </div>

              <div className="border-t border-teal-700 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "Background", value: "Architecture → UX" },
                    { label: "Currently", value: "DIRECTV, Senior IC" },
                    { label: "Specialty", value: "Research + Systems" },
                    { label: "Status", value: "Open to opportunities" },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="font-sans text-[16px] text-teal-400 block mb-1">
                        {item.label}
                      </span>
                      <span className="font-serif text-sm text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold text-[18px] inline-flex items-center justify-center bg-teal-500 text-white px-7 py-3 rounded-[32px] hover:bg-teal-700 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  className="font-sans font-semibold text-[18px] inline-flex items-center justify-center border border-teal-500 text-teal-200 px-7 py-3 rounded-[32px] hover:bg-teal-500 hover:text-white transition-colors duration-200"
                >
                  Download Résumé
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
