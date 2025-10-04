// Animasi saat scroll
document.addEventListener("DOMContentLoaded", function () {
  // Animasi elemen saat scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInOnScroll = function () {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  };

  // Panggil sekali saat halaman dimuat
  fadeInOnScroll();

  // Tambahkan event listener untuk scroll
  window.addEventListener("scroll", fadeInOnScroll);

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Tutup semua item FAQ
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Buka/tutup item yang diklik
      item.classList.toggle("active");
    });
  });

  // Mobile Menu Toggle
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Tutup mobile menu saat klik link
  const navAnchors = document.querySelectorAll(".nav-links a");
  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Header shadow saat scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  // Tutup mobile menu saat resize window
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
    }
  });
});
