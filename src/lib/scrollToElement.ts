export const smoothScrollToElement = (element: HTMLElement | null, offset = 96) => {
  if (!element) return;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};