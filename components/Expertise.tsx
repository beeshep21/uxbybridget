import ScrollReveal from "./ScrollReveal";

const areas = [
  {
    number: "01",
    title: "Design Systems",
    description:
      "I build the foundations that allow design to scale. From token architecture to component documentation, I create systems that reduce ambiguity and increase velocity across teams.",
    skills: ["Token Architecture", "Component Libraries", "Documentation", "Governance"],
  },
  {
    number: "02",
    title: "User Research",
    description:
      "Mixed-methods research that reveals what users actually need — not what they say they want.",
    skills: ["Usability Testing", "Journey Mapping", "Stakeholder Interviews", "Synthesis"],
  },
  {
    number: "03",
    title: "AI-Augmented Design",
    description:
      "I integrate AI into the design process — from rapid prototyping to generative research synthesis — without losing the human judgment that makes great design possible.",
    skills: ["Prompt Design", "AI Prototyping", "Automated Synthesis", "Ethical AI UX"],
  },
];

export default function Expertise() {
  return (
    <section className="py-24 px-8 lg:px-12 bg-teal-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-sans font-medium text-[16px] text-teal-500 block mb-16">
            Expertise
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {areas.map((area, i) => (
            <ScrollReveal key={area.number} delay={i * 120}>
              <div className="py-10 border-t border-teal-200">
                <span className="font-sans text-[16px] text-teal-500 block mb-2">
                  {area.number}
                </span>
                <h3 className="font-sans font-bold text-teal-900 text-2xl mb-4">
                  {area.title}
                </h3>
                <p className="font-serif text-base text-muted leading-relaxed mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-xs text-teal-700 bg-teal-100 px-3 py-1 rounded-[32px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
