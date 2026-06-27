/**
 * MOI Summer AI Training — site interactions
 * Mobile nav toggle, week dropdowns, and scroll animations.
 */
(function () {
  "use strict";

  // Init scroll animations
  if (window.AOS) {
    AOS.init({ once: true, duration: 700, easing: "ease-out" });
  }

  const navbar = document.querySelector("#navbar");
  const toggle = document.querySelector(".mobile-nav-toggle");

  // Mobile menu open/close
  if (toggle && navbar) {
    toggle.addEventListener("click", function () {
      navbar.classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  }

  // Dropdown handling: hover on desktop (CSS), tap to expand on mobile (JS)
  document.querySelectorAll(".navbar .dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (navbar && navbar.classList.contains("navbar-mobile")) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu) submenu.classList.toggle("dropdown-active");
      }
    });
  });

  // Close mobile menu when a real navigation link is tapped (skip dropdown parents)
  document.querySelectorAll("#navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (link.parentElement.classList.contains("dropdown")) return;
      if (navbar && navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        if (toggle) {
          toggle.classList.add("bi-list");
          toggle.classList.remove("bi-x");
        }
      }
    });
  });
})();
