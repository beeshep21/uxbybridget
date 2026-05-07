import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "20%", label: "Conversion Rate", sub: "within first month" },
  { value: "250+", label: "Upsells", sub: "generated at launch" },
  { value: "70%", label: "New Customers", sub: "new to DIRECTV ecosystem" },
];

const problems = [
  {
    title: "Zero Starting Point",
    body: "No existing experience, flows, or validated concept to build from.",
  },
  {
    title: "No Executive Buy-In",
    body: "The concept had not been effectively sold to leadership, putting the project at risk.",
  },
  {
    title: "Unclear Value Proposition",
    body: "Users would not immediately understand what was free vs. paid without strong framing.",
  },
  {
    title: "Missing Growth Path",
    body: "No defined journey from free user to paid subscriber.",
  },
];

const insights = [
  {
    number: "01",
    title: "Users Need Immediate Clarity",
    body: "Users must instantly understand what they get for free and why it matters.",
  },
  {
    number: "02",
    title: "Free is a Hook, Not the End State",
    body: "The experience needed to guide users toward deeper engagement and upsells.",
  },
  {
    number: "03",
    title: "Trust Drives Adoption",
    body: "Users needed reassurance that the offering was legitimate and valuable.",
  },
  {
    number: "04",
    title: "Stakeholders Needed a Story",
    body: "Leadership required a clear narrative showing how this product would drive growth.",
  },
];

const process = [
  {
    phase: "Phase 01",
    title: "Reframing the Product",
    items: [
      {
        title: "Selling the Vision Internally",
        body: "Recognized the concept lacked buy-in and created a stronger narrative to communicate its value.",
      },
      {
        title: "About Page Strategy",
        body: "Introduced an \u201cAbout\u201d experience to clearly explain the product and its benefits to both users and stakeholders.",
      },
      {
        title: "Ecosystem Thinking",
        body: "Designed a clear path showing how users could build on their DIRECTV experience over time.",
      },
    ],
  },
  {
    phase: "Phase 02",
    title: "Experience Design",
    items: [
      {
        title: "Onboarding & Signup Flow",
        body: "Designed a streamlined, low-friction signup experience for mobile and desktop that emphasizes free value and removes commitment anxiety.",
      },
      {
        title: "Landing Page Optimization",
        body: "Created a high-converting landing experience with strong content previews and a clear email capture entry point.",
      },
      {
        title: "Content Discovery",
        body: "Structured browsing to feel familiar and intuitive, mirroring best-in-class streaming patterns.",
      },
    ],
  },
  {
    phase: "Phase 03",
    title: "Iteration & Delivery",
    items: [
      {
        title: "End-to-End Ownership",
        body: "Delivered final designs and worked through launch and post-launch updates as the sole designer on the project.",
      },
    ],
  },
];

const solutions = [
  {
    title: "Clear Value Introduction",
    body: "Created an experience that immediately communicates what users get and why it matters.",
    decisions: [
      "Dedicated About Layer — Helped both users and stakeholders understand the product value",
      "Upfront Clarity — Reduced confusion around free vs. paid content",
    ],
  },
  {
    title: "Guided Ecosystem Growth",
    body: "Designed pathways that encouraged users to expand their experience.",
    decisions: [
      "Progressive Upsell Moments — Introduced upgrade opportunities after users experienced value",
      "Experience Framing — Positioned free content as an entry into a larger ecosystem",
    ],
  },
  {
    title: "Simplified Access & Navigation",
    body: "Reduced friction and aligned with familiar streaming patterns.",
    decisions: [
      "Reduced Cognitive Load — Streamlined decision-making for users",
      "Familiar UI Patterns — Leveraged known streaming behaviors",
    ],
  },
];

const learnings = [
  {
    title: "UX Can Drive Strategy",
    body: "Design is a tool for influencing business decisions, not just executing them.",
  },
  {
    title: "Clarity Drives Conversion",
    body: "Users act when value is immediately understood. Ambiguity kills momentum.",
  },
  {
    title: "Narrative Matters Internally",
    body: "Strong storytelling is critical for stakeholder alignment — especially for net-new products.",
  },
];

export default function MyFreeDirectv() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="text-white px-5 lg:px-16 pt-20 lg:pt-32 pb-20" style={{ background: "#203152" }}>
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#work"
            className="font-sans font-medium text-[14px] text-white hover:text-teal-300 transition-colors inline-block mb-4 lg:mb-12"
          >
            ← Back to work
          </Link>

          <span className="font-sans font-medium text-[18px] text-teal-400 block mb-4">
            01 — DIRECTV
          </span>

          <h1
            className="font-sans font-bold text-white leading-tight mb-6 text-[2rem] lg:text-[clamp(2.5rem,5vw,4rem)]"
          >
            MyFree DIRECTV
          </h1>

          <p className="font-sans font-semibold text-teal-300 mb-4" style={{ fontSize: "20px" }}>
            Lead UX Designer · Sole Designer
          </p>

          <p className="font-serif text-teal-100 leading-relaxed max-w-2xl" style={{ fontSize: "18px" }}>
            From zero concept to launch — turning a free streaming idea into a measurable growth engine.
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────── */}
      <div
        className="w-full flex items-center justify-center"
        style={{ background: "#1B3251" }}
      >
        <Image
          src="/myfree-2.png"
          alt="MyFree DIRECTV — product screens"
          width={1440}
          height={900}
          priority
          style={{ width: "100%", height: "auto", display: "block" }}
          sizes="100vw"
        />
      </div>

      {/* ── STATS ────────────────────────────────────── */}
      <section>
        <div className="max-w-5xl mx-auto px-5 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-teal-100">
            {stats.map((s) => (
              <div key={s.label} className="py-8 lg:py-12 lg:px-6 lg:first:pl-0 lg:last:pr-0 text-center border-b border-teal-100 last:border-b-0 lg:border-b-0">
                <p
                  className="font-sans font-bold text-teal-700 leading-none mb-2"
                  style={{ fontSize: "56px" }}
                >
                  {s.value}
                </p>
                <p className="font-sans font-semibold text-teal-900 text-base mb-1">{s.label}</p>
                <p className="font-sans font-medium text-[18px] text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXT + CONTRIBUTIONS ──────────────────── */}
      <section className="py-20 px-5 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans font-medium text-[18px] text-teal-500 block mb-6">Context</span>
            <p className="font-serif text-base text-teal-900 leading-relaxed">
              Launched a free streaming experience that drove a 20% conversion rate in the first month,
              generated 250+ upsells, and attracted 70% entirely new customers to the DIRECTV ecosystem.
            </p>
          </div>

          <div>
            <span className="font-sans font-medium text-[18px] text-teal-500 block mb-6">My Contributions</span>
            <ul className="space-y-3">
              {[
                "Sole UX designer owning the project end-to-end from concept through launch",
                "Identified and reframed the product opportunity when the initial concept lacked stakeholder buy-in",
                "Led stakeholder alignment through strategic design narratives to secure executive approval",
                "Designed onboarding, browsing, and upsell flows",
                "Defined the end-to-end user experience and product direction",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-baseline">
                  <span className="text-teal-500 flex-shrink-0">•</span>
                  <span className="font-serif text-base text-teal-900 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16 bg-teal-50">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-8">Overview</span>
          <p className="font-serif leading-relaxed text-teal-900 max-w-3xl text-base lg:text-[20px]">
            MyFree DIRECTV is a free streaming product designed to introduce new users to the DIRECTV
            ecosystem while creating a pathway to paid upgrades. This project began from scratch —
            without existing experience, flows, or a validated concept — and required defining both the
            product and its value from the ground up.
          </p>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Problem</span>
          <h2 className="font-sans font-bold text-teal-900 mb-16 max-w-xl text-[24px] lg:text-[36px]">
            This wasn&apos;t a typical redesign — there was no existing product to redesign.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {problems.map((p, i) => (
              <div key={p.title} className="border-t-2 border-teal-700 pt-6">
                <span className="font-sans font-medium text-[16px] text-teal-500 block mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-sans font-bold text-teal-900 text-xl mb-3">{p.title}</h3>
                <p className="font-serif text-base text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH ─────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16 bg-teal-50">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Research & Insights</span>
          <h2 className="font-sans font-bold text-teal-900 mb-16 text-[24px] lg:text-[36px]">
            Aligning user value with business goals
          </h2>

          <div className="space-y-0">
            {insights.map((ins) => (
              <div key={ins.number} className="py-8 border-t border-teal-200">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-sans font-medium text-[16px] text-teal-500 flex-shrink-0">{ins.number}</span>
                  <h3 className="font-sans font-bold text-teal-900 text-lg">{ins.title}</h3>
                </div>
                <p className="font-serif text-base text-muted leading-relaxed">{ins.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Process</span>
          <h2 className="font-sans font-bold text-teal-900 mb-8 lg:mb-10 text-[24px] lg:text-[36px]">
            From concept risk to product launch
          </h2>

          <div className="relative w-full mb-8 lg:mb-16 h-[220px] lg:h-[500px]">
            <Image
              src="/myfree-3.png"
              alt="MyFree DIRECTV — process screens"
              fill
              style={{ objectFit: "contain", objectPosition: "left" }}
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <div className="space-y-16">
            {process.map((phase) => (
              <div key={phase.phase}>
                <div className="flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-4 mb-8 border-b border-teal-100 pb-4">
                  <span className="font-sans font-medium text-[16px] text-teal-500">{phase.phase}</span>
                  <h3 className="font-sans font-bold text-teal-900 text-2xl">{phase.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {phase.items.map((item) => (
                    <div key={item.title}>
                      <h4 className="font-sans font-semibold text-teal-900 text-base mb-2">
                        {item.title}
                      </h4>
                      <p className="font-serif text-sm text-muted leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16 bg-teal-50">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Solution</span>
          <h2 className="font-sans font-bold text-teal-900 mb-16 text-[24px] lg:text-[36px]">
            Designing for conversion and expansion
          </h2>

          <div className="space-y-12">
            {solutions.map((sol, i) => (
              <div
                key={sol.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 border-b border-teal-200 last:border-0"
              >
                <div>
                  <span className="font-sans font-medium text-[16px] text-teal-500 block mb-3">0{i + 1}</span>
                  <h3 className="font-sans font-bold text-teal-900 text-2xl mb-3">{sol.title}</h3>
                  <p className="font-serif text-base text-muted leading-relaxed">{sol.body}</p>
                </div>
                <div>
                  <span className="font-sans font-medium text-[16px] text-teal-500 block mb-4">Key decisions</span>
                  <ul className="space-y-3">
                    {sol.decisions.map((d) => (
                      <li key={d} className="flex gap-3 items-baseline">
                        <span className="text-teal-500 flex-shrink-0">•</span>
                        <span className="font-serif text-sm text-teal-900 leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE COMPILATION ────────────────────────── */}
      <section className="flex flex-col">
        <div className="w-full flex items-center justify-center py-16 px-5 lg:px-8 bg-white">
          <Image
            src="/myfree-6.png"
            alt="MyFree DIRECTV — screens"
            width={900}
            height={600}
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <div className="w-full flex items-center justify-center py-16 px-5 lg:px-8 bg-teal-50">
          <Image
            src="/myfree-4.png"
            alt="MyFree DIRECTV — upsell moments"
            width={1200}
            height={800}
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
            sizes="100vw"
          />
        </div>
      </section>

      {/* ── IMPACT ───────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16 bg-teal-900">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-400 block mb-16">Impact</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p
                  className="font-sans font-bold text-white leading-none mb-3"
                  style={{ fontSize: "72px" }}
                >
                  {s.value}
                </p>
                <p className="font-sans font-semibold text-teal-300 text-lg mb-1">{s.label}</p>
                <p className="font-sans font-medium text-[18px] text-teal-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ───────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Reflection</span>
          <h2 className="font-sans font-bold text-teal-900 mb-6 text-[24px] lg:text-[36px]">
            This project highlighted the importance of strategic design beyond execution.
          </h2>
          <p className="font-serif text-base text-muted leading-relaxed max-w-2xl mb-16">
            Strong UX thinking can shape product direction and influence business outcomes — not just
            polish the surface of a decision already made.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {learnings.map((l, i) => (
              <div key={l.title} className="border-t-2 border-teal-700 pt-6">
                <span className="font-sans font-medium text-[16px] text-teal-500 block mb-3">0{i + 1}</span>
                <h3 className="font-sans font-bold text-teal-900 text-lg mb-3">{l.title}</h3>
                <p className="font-serif text-sm text-muted leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>

          {/* Next project CTA */}
          <div className="border-t border-teal-100 pt-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center">
            <Link
              href="/#work"
              className="font-sans font-medium text-[18px] text-teal-700 hover:text-teal-500 transition-colors"
            >
              ← Back to work
            </Link>
            <Link
              href="/work/directv-checkout"
              className="font-sans font-semibold text-[18px] inline-flex items-center justify-center bg-teal-700 text-white px-7 py-3 rounded-[32px] hover:bg-teal-900 transition-colors"
            >
              Next: Checkout Redesign
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
