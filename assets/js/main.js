(function () {
  "use strict";

  function renderIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  /* Menu mobile */
  function initNavBurger() {
    const burger = document.getElementById("navBurger");
    const links = document.getElementById("navLinks");
    if (!burger || !links) return;
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* Navigation active au scroll */
  function initActiveNav() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
    if (!sections.length || !navLinks.length) return;
    const byId = {};
    navLinks.forEach((a) => (byId[a.getAttribute("href").slice(1)] = a));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.style.color = "");
            link.style.color = "var(--gold-light)";
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* Révélation au scroll */
  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("reveal-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t, i) => {
      t.style.transitionDelay = (i % 4) * 0.06 + "s";
      observer.observe(t);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavBurger();
    initActiveNav();
    initScrollReveal();
    renderIcons();
  });
})();
