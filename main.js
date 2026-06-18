/* =============================================
   CHICOS TBILISI — script.js
============================================= */

/* --- Nav scroll shadow --- */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = "0 2px 24px rgba(0,0,0,0.07)";
  } else {
    nav.style.boxShadow = "none";
  }
});

/* --- Active nav link on scroll --- */
const sections = document.querySelectorAll("section[id], div[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((s) => observer.observe(s));

/* --- Reservation button ripple --- */
const resBtn = document.querySelector(".res-resos-btn");
if (resBtn) {
  resBtn.addEventListener("mouseenter", () => {
    resBtn.querySelector(".res-resos-arrow").style.transform =
      "translateX(4px)";
  });
  resBtn.addEventListener("mouseleave", () => {
    resBtn.querySelector(".res-resos-arrow").style.transform = "";
  });
}

/* --- Fade-in on scroll --- */
const fadeEls = document.querySelectorAll(
  ".menu-card, .info-item, .gallery-item, .hero-badge",
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

fadeEls.forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  fadeObserver.observe(el);
});
