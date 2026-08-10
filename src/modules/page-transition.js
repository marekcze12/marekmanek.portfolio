const EXIT_DURATION = 420;
const ENTRY_DURATION = 520;
const STORAGE_KEY = "page-transition-direction";

const transitionClasses = [
  "is-page-leaving-forward",
  "is-page-leaving-back",
  "is-page-entering-forward",
  "is-page-entering-back",
];

export function initPageTransition() {
  const root = document.documentElement;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function clearTransitionClasses() {
    root.classList.remove(...transitionClasses);
  }

  function playEntryAnimation() {
    const direction =
      sessionStorage.getItem(STORAGE_KEY);

    sessionStorage.removeItem(STORAGE_KEY);

    if (
      reducedMotion ||
      (direction !== "forward" && direction !== "back")
    ) {
      return;
    }

    root.classList.remove(
      "is-page-entering-forward",
      "is-page-entering-back"
    );

    root.classList.add(
      `is-page-entering-${direction}`
    );

    window.setTimeout(() => {
      root.classList.remove(
        `is-page-entering-${direction}`
      );
    }, ENTRY_DURATION);
  }

  playEntryAnimation();

  window.addEventListener("pageshow", () => {
    root.classList.remove(
      "is-page-leaving-forward",
      "is-page-leaving-back"
    );

    playEntryAnimation();
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest(
      "a[data-page-transition]"
    );

    if (!link || reducedMotion) return;

    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (
      link.target === "_blank" ||
      link.hasAttribute("download")
    ) {
      return;
    }

    const destination = new URL(
      link.href,
      window.location.href
    );

    if (destination.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();

    const direction =
      link.dataset.pageTransition === "back"
        ? "back"
        : "forward";

    clearTransitionClasses();

    root.classList.add(
      `is-page-leaving-${direction}`
    );

    sessionStorage.setItem(
      STORAGE_KEY,
      direction
    );

    window.setTimeout(() => {
      window.location.assign(destination.href);
    }, EXIT_DURATION);
  });
}