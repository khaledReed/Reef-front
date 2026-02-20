document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileNav();
  initFaqAccordion();
  initProjectTabs();
});

/* ── Navbar scroll effect ──────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const check = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", check, { passive: true });
  check();
}

/* ── Mobile navigation ─────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById("mobile-toggle");
  const nav = document.getElementById("mobile-nav");
  const close = document.getElementById("mobile-close");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => nav.classList.add("open"));

  if (close) {
    close.addEventListener("click", () => nav.classList.remove("open"));
  }

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

/* ── FAQ accordion ─────────────────────────────────────── */
function initFaqAccordion() {
  document.querySelectorAll(".faq-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ── Project tabs (desktop + mobile) ───────────────────── */
function initProjectTabs() {
  const allTabs = document.querySelectorAll(".project-tab, .project-tab-mobile");
  const panels = document.querySelectorAll(".project-panel");
  if (!allTabs.length) return;

  allTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.project;

      allTabs.forEach((t) => {
        t.classList.remove("active");
        if (t.classList.contains("project-tab-mobile")) {
          t.classList.remove("text-white/90", "border-white/20");
          t.classList.add("text-white/50", "border-white/10");
        }
      });

      tab.classList.add("active");
      if (tab.classList.contains("project-tab-mobile")) {
        tab.classList.remove("text-white/50", "border-white/10");
        tab.classList.add("text-white/90", "border-white/20");
      }

      panels.forEach((p) => {
        if (p.dataset.project === target) {
          p.classList.remove("hidden");
          p.classList.add("flex");
        } else {
          p.classList.remove("flex");
          p.classList.add("hidden");
        }
      });
    });
  });
}
