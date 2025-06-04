// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Theme toggle
const themeToggle = document.querySelector(".theme-toggle");
const html = document.documentElement;
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      // Close mobile menu if open
      navLinks.classList.remove("active");
    }
  });
});

// Add scroll event listener for header shadow
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = "0 2px 10px var(--shadow-color)";
  } else {
    header.style.boxShadow = "none";
  }
});
