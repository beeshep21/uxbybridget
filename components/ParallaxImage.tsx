"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxImage({
  bgClassName,
  minHeight,
  src,
  alt,
  objectFit = "cover",
}: {
  bgClassName: string;
  minHeight?: string;
  src?: string;
  alt?: string;
  objectFit?: "cover" | "contain";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const offset = (progress - 0.5) * 80;
      inner.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full lg:w-1/2 relative overflow-hidden"
      style={{ minHeight: minHeight ?? "300px" }}
    >
      <div
        ref={innerRef}
        className={`absolute ${(!src || objectFit === "contain") ? bgClassName : ""} flex items-center justify-center`}
        style={{ inset: src && objectFit === "cover" ? "-16px" : src ? "0px" : "-50px", willChange: "transform" }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            style={{ objectFit, objectPosition: "center" }}
            sizes="(max-width: 1024px) 85vw, 50vw"
            priority={false}
          />
        ) : (
          <span className="font-sans text-xs text-teal-500">Add cover image</span>
        )}
      </div>
    </div>
  );
}
