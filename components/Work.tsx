import Link from "next/link";
import { caseStudies } from "@/lib/work";
import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";

export default function Work() {
  return (
    <section id="work" className="py-12 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 lg:px-12">
        <ScrollReveal>
          <h2
            className="font-sans font-semibold text-teal-500 text-center mb-10 lg:mb-20 text-[28px] lg:text-[48px]"
          >
            My work
          </h2>
        </ScrollReveal>
      </div>

      {/* Mobile: horizontal snap scroll — Desktop: vertical stack */}
      <div
        className="flex overflow-x-auto gap-3 px-5 pb-6 lg:flex-col lg:overflow-visible lg:gap-0 lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" } as never}
      >
        {caseStudies.map((cs, i) => (
          <div
            key={cs.slug}
            className="flex-shrink-0 w-[85vw] lg:w-full"
            style={{ scrollSnapAlign: "start" }}
          >
            <ScrollReveal delay={i * 100}>
              {cs.status === "published" ? (
                <Link href={`/work/${cs.slug}`} className="group block">
                  <WorkCard cs={cs} index={i} />
                </Link>
              ) : (
                <div className="opacity-40 cursor-default">
                  <WorkCard cs={cs} index={i} comingSoon />
                </div>
              )}
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}

const cardBgs = ["bg-teal-50", "bg-teal-100", "bg-teal-50"];

function WorkCard({
  cs,
  index,
  comingSoon,
}: {
  cs: (typeof caseStudies)[number];
  index: number;
  comingSoon?: boolean;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`flex flex-col lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""} lg:min-h-[480px]`}
    >
      {/* Parallax image — full width mobile, 50% desktop */}
      <ParallaxImage
        bgClassName={cardBgs[index]}
        minHeight={cs.coverImageFit === "contain" ? "320px" : "200px"}
        src={cs.coverImage}
        alt={cs.title}
        objectFit={cs.coverImageFit ?? "cover"}
      />

      {/* Content */}
      <div className="lg:w-1/2 flex flex-col justify-center px-5 lg:px-16 py-8 lg:py-14 bg-white">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-sans text-[16px] text-teal-500">{cs.number}</span>
          <span className="font-sans text-[16px] text-muted">{cs.company}</span>
          {comingSoon && (
            <span className="font-sans text-[16px] border border-muted text-muted px-3 py-1 rounded-[32px]">
              Coming Soon
            </span>
          )}
        </div>

        <h3
          className="font-sans font-bold text-teal-900 leading-tight mb-4 group-hover:text-teal-700 transition-colors duration-300 text-[22px] lg:text-[36px]"
        >
          {cs.title}
        </h3>

        <p className="font-serif text-base text-muted leading-relaxed mb-6">
          {cs.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[16px] text-teal-700 bg-teal-50 px-3 py-1.5 rounded-[32px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {!comingSoon && (
          <span className="font-sans font-semibold text-[18px] inline-flex items-center justify-center self-start bg-teal-700 text-white px-7 py-3 rounded-[32px] group-hover:bg-teal-900 transition-colors duration-200">
            Let&apos;s dive in
          </span>
        )}
      </div>
    </article>
  );
}
