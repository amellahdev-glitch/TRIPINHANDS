const menuToggleBtn = document.getElementById("menuToggleBtn");
const tabletToggleBtn = document.getElementById("tabletToggleBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const mobileNavMenu = document.getElementById("mobileNavMenu");

function openMenu() {
  mobileNavMenu.classList.add("active");
  document.body.style.overflow = "hidden"; // Lock background scrolling
}

function closeMenu() {
  mobileNavMenu.classList.remove("active");
  document.body.style.overflow = ""; // Restore background scrolling
}

// Attach listeners
menuToggleBtn.addEventListener("click", openMenu);
tabletToggleBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

// Close menu cleanly if user presses Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileNavMenu.classList.contains("active")) {
    closeMenu();
  }
});

/* ================================ */

/* GROUP Section */

/* ================================ */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".experience-card");

  // 1. Intersection Observer to slide-up elements dynamically as user scrolls down
  const observerOptions = {
    root: null,
    threshold: 0.12, // Activates when 12% of the card bounds cross into viewport
    rootMargin: "0px 0px -40px 0px",
  };

  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Kill execution tracking once animated
      }
    });
  }, observerOptions);

  cards.forEach((card) => cardObserver.observe(card));

  // 2. Add sub-element hover click triggers to simulate premium programmatic components
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Prevent dead click logic if custom links are wired up in production later
      if (card.getAttribute("href") === "#") {
        e.preventDefault();
        console.log(`Navigating to package system details.`);
      }
    });
  });
});

/* ================================ */

/* EXPERIENCE Section */

/* ================================ */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".experience-card");

  const observerOptions = {
    root: null,
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px",
  };

  const gridObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => gridObserver.observe(card));
});

/* ================================ */

/* Mark Section */

/* ================================ */


