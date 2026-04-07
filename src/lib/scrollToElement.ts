export const smoothScrollToElement = (element: HTMLElement | null, extraOffset = 20) => {
  if (!element) return;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const header = document.querySelector("header");
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
  const offset = Math.max(96, Math.ceil(headerHeight) + extraOffset);

  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};