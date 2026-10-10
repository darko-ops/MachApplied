"use client";

import { useEffect } from "react";

/**
 * Fades sections in as they scroll into view. Content renders visible on the
 * server; only elements still below the fold at mount are hidden, so there is
 * no flash and nothing is lost without JavaScript or with reduced motion.
 */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-pending");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of els) {
      el.classList.add("is-pending");
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return null;
}
