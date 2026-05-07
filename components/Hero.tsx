"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-start lg:items-center px-5 lg:px-12"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="text-left lg:text-center max-w-4xl w-full">
        <h2 className="font-sans font-semibold text-black mb-0" style={{ fontSize: "16px" }}>
          Hi, I&apos;m Bridget Shepherd.
        </h2>
        <h1 className="font-sans font-bold leading-tight text-[24px] lg:text-[48px]">
          <span className="block text-teal-700">Trained in architecture.</span>
          <span className="block text-black">Rooted in research.</span>
          <span className="block text-teal-700">Building systems that scale.</span>
        </h1>
      </div>

      {/* Scroll arrow */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        style={{ animation: "bounce-slow 2s ease-in-out infinite" }}
        onClick={() =>
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="font-sans text-xs text-muted group-hover:text-teal-700 transition-colors">
          scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-black group-hover:text-teal-700 transition-colors"
        >
          <path
            d="M10 3v14M3 11l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
