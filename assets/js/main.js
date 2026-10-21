// Shubham Consultancy — shared site behaviour

// ---- Business details: edit these in one place ----
const SITE = {
  whatsapp: "+91 9998369070", // country code + number (spaces/+ are fine)
  email: "info@shubhamconsultancy.com",
};

(function () {
  const root = document.documentElement;

  // ---- Theme toggle (saved preference, else system setting) ----
  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // ---- Mobile menu ----
  const menuBtn = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ---- Header shadow on scroll ----
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // ---- WhatsApp / email links ----
  const waNumber = SITE.whatsapp.replace(/\D/g, "");
  const waUrl = (text) => `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waUrl(a.dataset.wa || "Hi Shubham Consultancy, I'd like to know more about your services.");
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-email]").forEach((a) => {
    a.href = `mailto:${SITE.email}`;
    if (!a.textContent.trim()) a.textContent = SITE.email;
  });


  // ---- Footer year ----
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
