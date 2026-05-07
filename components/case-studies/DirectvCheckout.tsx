import Link from "next/link";

const stats = [
  { value: "+12%", label: "Checkout Completion", sub: "increase after redesign" },
  { value: "−4%", label: "Support Calls", sub: "reduction post-launch" },
  { value: "+25%", label: "Accessibility", sub: "WCAG improvement" },
];

const problems = [
  {
    title: "Too Much at Once",
    body: "People were asked to process and decide on too many things in a single view.",
  },
  {
    title: "Unclear Pricing",
    body: "Costs weren't always easy to parse, especially with add-ons.",
  },
  {
    title: "Leaning on Support",
    body: "When in doubt, users left the flow to ask someone else — or abandoned it completely.",
  },
  {
    title: "Accessibility Gaps",
    body: "Some users were blocked entirely, not just slowed down.",
  },
];

const insights = [
  {
    number: "01",
    title: "Uncertainty Stops Momentum",
    body: "If something feels unclear, people don't guess — they pause.",
  },
  {
    number: "02",
    title: "More Choice ≠ Better Experience",
    body: "Too many options slowed people down instead of helping them.",
  },
  {
    number: "03",
    title: "Accessibility Isn't an Edge Case",
    body: "It directly affects whether people can complete checkout at all.",
  },
  {
    number: "04",
    title: "Clarity Creates Flow",
    body: "When steps and pricing made sense, people moved without friction.",
  },
];

const process = [
  {
    number: "01",
    title: "Find the Friction",
    body: "Used analytics and interviews to pinpoint where users dropped off or hesitated.",
  },
  {
    number: "02",
    title: "Strip Things Back",
    body: "Reduced what users saw at each step and made the structure do more of the work.",
  },
  {
    number: "03",
    title: "Validate Decisions",
    body: "Tested the flow, adjusted, and tested again.",
  },
];

const solutions = [
  {
    title: "A Guided, Step-by-Step Flow",
    body: "Instead of presenting everything at once, the flow now moves with the user.",
    decisions: [
      "One decision at a time",
      "Clear progress so there's no guessing what's next",
    ],
  },
  {
    title: "Pricing That Holds Up at a Glance",
    body: "Users can understand costs without digging.",
    decisions: [
      "Clear breakdowns",
      "Consistent structure across plans and add-ons",
    ],
  },
  {
    title: "Accessibility That Actually Works",
    body: "Not just compliant, but usable.",
    decisions: [
      "Stronger contrast, clearer labels, better navigation",
      "Patterns that work across different users and contexts",
    ],
  },
];

const learnings = [
  {
    title: "Confusion Causes Drop-Off",
    body: "People don't push through confusion — they opt out and lose trust.",
  },
  {
    title: "UX Reduces Real Cost",
    body: "Good UX reduces real operational cost — like support call volume.",
  },
  {
    title: "Accessibility Raises the Baseline",
    body: "Accessibility improvements raise the experience for everyone, not just some.",
  },
];

export default function DirectvCheckout() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="text-white px-5 lg:px-16 pt-20 lg:pt-32 pb-20 bg-teal-900">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#work"
            className="font-sans font-medium text-[14px] text-white hover:text-teal-300 transition-colors inline-block mb-4 lg:mb-12"
          >
            ← Back to work
          </Link>

          <span className="font-sans font-medium text-[18px] text-teal-400 block mb-4">
            02 — DIRECTV
          </span>

          <h1 className="font-sans font-bold text-white leading-tight mb-6 text-[2rem] lg:text-[clamp(2.5rem,5vw,4rem)]">
            DIRECTV Checkout
          </h1>

          <p className="font-sans font-semibold text-teal-300 mb-4" style={{ fontSize: "20px" }}>
            Lead UX Designer · Sales Lead
          </p>

          <p className="font-serif text-teal-100 leading-relaxed max-w-2xl" style={{ fontSize: "18px" }}>
            A simpler checkout that helped more people go home with DIRECTV — and stopped them from needing to call for help.
          </p>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section>
        <div className="max-w-5xl mx-auto px-5 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-teal-100">
            {stats.map((s) => (
              <div key={s.label} className="py-8 lg:py-12 lg:px-6 lg:first:pl-0 lg:last:pr-0 text-center border-b border-teal-100 last:border-b-0 lg:border-b-0">
                <p className="font-sans font-bold text-teal-700 leading-none mb-2" style={{ fontSize: "56px" }}>
                  {s.value}
                </p>
                <p className="font-sans font-semibold text-teal-900 text-base mb-1">{s.label}</p>
                <p className="font-sans font-medium text-[18px] text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXT ──────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-sans font-medium text-[18px] text-teal-500 block mb-6">Context</span>
            <p className="font-serif text-base text-teal-900 leading-relaxed">
              The checkout worked — but it made potential customers work harder than they should have to.
              Users were pausing, second-guessing, and calling support just to get through something that
              should've been straightforward. I redesigned the flow to remove that friction and make the
              experience feel obvious.
            </p>
          </div>

          <div>
            <span className="font-sans font-medium text-[18px] text-teal-500 block mb-6">What I Did</span>
            <ul className="space-y-3 mb-10">
              {[
                "Led the redesign end-to-end",
                "Turned messy inputs — research, analytics, constraints — into clear decisions",
                "Designed wireframes through to high-fidelity flows",
                "Tested the experience using Baymard guidelines",
                "Kept product, research, and engineering aligned along the way",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-baseline">
                  <span className="text-teal-500 flex-shrink-0">•</span>
                  <span className="font-serif text-base text-teal-900 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Team</span>
            <ul className="space-y-2">
              {[
                "Research ran interviews — I joined and probed where needed",
                "Product sets direction and constraints",
                "Engineering brought the experience to life",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-baseline">
                  <span className="text-teal-500 flex-shrink-0">•</span>
                  <span className="font-serif text-base text-muted leading-relaxed">{item}</span>
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
            This was about removing hesitation. Checkout isn't where users want to think — it's where
            they want to feel confident enough to move forward.
          </p>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Problem</span>
          <h2 className="font-sans font-bold text-teal-900 mb-16 max-w-xl text-[24px] lg:text-[36px]">
            Nothing was outright broken — but small points of friction stacked up fast.
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
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Research & What We Learned</span>
          <h2 className="font-sans font-bold text-teal-900 mb-4 text-[24px] lg:text-[36px]">
            A few things became clear pretty quickly.
          </h2>
          <p className="font-serif text-base text-muted leading-relaxed max-w-2xl mb-16">
            I sat in on interviews, asked follow-up questions, and paired that with analytics from before
            and after the redesign. I also pressure-tested the experience using Baymard standards,
            including a full website audit.
          </p>

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
          <h2 className="font-sans font-bold text-teal-900 mb-16 text-[24px] lg:text-[36px]">
            Find friction, remove it, repeat.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.number} className="border-t-2 border-teal-700 pt-6">
                <span className="font-sans font-medium text-[16px] text-teal-500 block mb-3">{step.number}</span>
                <h3 className="font-sans font-bold text-teal-900 text-xl mb-3">{step.title}</h3>
                <p className="font-serif text-base text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16 bg-teal-50">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Solution</span>
          <h2 className="font-sans font-bold text-teal-900 mb-4 text-[24px] lg:text-[36px]">
            The final experience doesn't try to do more — it just gets out of the way.
          </h2>
          <p className="font-serif text-base text-muted leading-relaxed max-w-2xl mb-16">
            The approach was simple: reduce what users see at each step and let the structure do the work.
          </p>

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
                  <ul className="space-y-3 mt-2 lg:mt-9">
                    {sol.decisions.map((d) => (
                      <li key={d} className="flex gap-3 items-baseline">
                        <span className="text-teal-500 flex-shrink-0">•</span>
                        <span className="font-serif text-base text-teal-900 leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ───────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16 bg-teal-900">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-400 block mb-16">Impact</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-sans font-bold text-white leading-none mb-3" style={{ fontSize: "72px" }}>
                  {s.value}
                </p>
                <p className="font-sans font-semibold text-teal-300 text-lg mb-1">{s.label}</p>
                <p className="font-sans font-medium text-[18px] text-teal-400">{s.sub}</p>
              </div>
            ))}
            <div className="sm:col-span-3 border-t border-teal-700 pt-8 mt-4">
              <p className="font-serif text-teal-200 text-base leading-relaxed">
                Noticeably more positive feedback in research sessions post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFLECTION ───────────────────────────────── */}
      <section className="py-20 px-5 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans font-medium text-[18px] text-teal-500 block mb-4">Reflection</span>
          <h2 className="font-sans font-bold text-teal-900 mb-6 text-[24px] lg:text-[36px]">
            This project reinforced simplicity: when people hesitate, something's unclear.
          </h2>
          <p className="font-serif text-base text-muted leading-relaxed max-w-2xl mb-16">
            Fixing that doesn't require adding more — it usually means removing, organizing, and being
            intentional.
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

          <div className="border-t border-teal-100 pt-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center">
            <Link
              href="/work/myfree-directv"
              className="font-sans font-medium text-[18px] text-teal-700 hover:text-teal-500 transition-colors"
            >
              ← MyFree DIRECTV
            </Link>
            <Link
              href="/#work"
              className="font-sans font-semibold text-[18px] inline-flex items-center justify-center bg-teal-700 text-white px-7 py-3 rounded-[32px] hover:bg-teal-900 transition-colors"
            >
              Back to all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
