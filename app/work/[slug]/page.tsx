import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/lib/work";
import Nav from "@/components/Nav";
import MyFreeDirectv from "@/components/case-studies/MyFreeDirectv";
import DirectvCheckout from "@/components/case-studies/DirectvCheckout";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return caseStudies
    .filter((cs) => cs.status === "published")
    .map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Bridget Shepherd`,
    description: cs.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs || cs.status !== "published") notFound();

  return (
    <>
      <Nav theme="dark" />
      {slug === "myfree-directv" ? (
        <MyFreeDirectv />
      ) : slug === "directv-checkout" ? (
        <DirectvCheckout />
      ) : (
        <PlaceholderCaseStudy title={cs.title} />
      )}
    </>
  );
}

function PlaceholderCaseStudy({ title }: { title: string }) {
  return (
    <main className="pt-32 pb-24 px-8 lg:px-16 max-w-5xl mx-auto">
      <div className="bg-teal-50 border border-teal-100 p-16 flex flex-col items-center justify-center text-center min-h-[400px]">
        <span className="font-sans text-sm text-teal-500 block mb-4">{title}</span>
        <p className="font-sans font-bold text-teal-900 text-2xl mb-4">Case study coming soon.</p>
        <p className="font-serif text-base text-muted max-w-sm">
          Feel free to reach out to discuss this project in detail.
        </p>
        <a
          href="/#contact"
          className="font-sans font-semibold text-sm inline-flex items-center justify-center bg-teal-700 text-white px-7 py-3 rounded-[32px] hover:bg-teal-900 transition-colors mt-8"
        >
          Get in touch
        </a>
      </div>
    </main>
  );
}
