export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  company: string;
  tags: string[];
  description: string;
  status: "published" | "coming-soon";
  year: string;
  role: string;
  coverImage?: string;
  coverImageFit?: "cover" | "contain";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "myfree-directv",
    number: "01",
    title: "MyFree DIRECTV",
    company: "DIRECTV",
    tags: ["User Research", "UX Strategy", "Interaction Design"],
    description:
      "Redesigning the free tier acquisition experience to reduce friction, drive activation, and convert passive viewers into engaged subscribers.",
    status: "published",
    year: "2024",
    role: "Senior UX Designer",
    coverImage: "/myfree-5.png",
    coverImageFit: "contain",
  },
  {
    slug: "directv-checkout",
    number: "02",
    title: "DIRECTV Checkout",
    company: "DIRECTV",
    tags: ["Research", "Design Systems", "E-Commerce"],
    description:
      "Streamlining a complex enterprise checkout flow serving millions of subscribers — balancing business constraints with a seamless user experience.",
    status: "published",
    year: "2023",
    role: "Senior UX Designer",
    coverImage: "/checkout-4.png",
    coverImageFit: "contain",
  },
  {
    slug: "american-cancer-society",
    number: "03",
    title: "American Cancer Society",
    company: "American Cancer Society",
    tags: ["Research", "Information Architecture", "Design Systems"],
    description:
      "A research-led redesign of a patient-facing digital experience — prioritizing clarity, trust, and accessibility for vulnerable users.",
    status: "coming-soon",
    year: "2025",
    role: "UX Designer",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
