// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for all internal nav links with submenus
  const navLinks = document.querySelectorAll('nav ul > li > a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Toggle submenu on click for mobile or accessibility
  const menuItems = document.querySelectorAll("nav ul > li");

  menuItems.forEach(item => {
    const submenu = item.querySelector("ul");
    const anchor = item.querySelector("a");

    if (submenu) {
      // Prevent default on parent link if submenu exists and toggle submenu
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        // Toggle visibility
        const isVisible = submenu.style.display === "block";
        // Hide all other submenus
        document.querySelectorAll("nav ul ul").forEach(ul => {
          ul.style.display = "none";
        });
        // Toggle current submenu
        submenu.style.display = isVisible ? "none" : "block";
      });
    }
  });

  // Close submenu when clicking outside
  document.addEventListener("click", (e) => {
    const nav = document.querySelector("nav");
    if (!nav.contains(e.target)) {
      document.querySelectorAll("nav ul ul").forEach(ul => {
        ul.style.display = "none";
      });
    }
  });

  // Button handlers
  const downloadBtn = document.querySelector(".buttons button:nth-child(1)");
  const contactBtn = document.querySelector(".buttons button:nth-child(2)");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      // Replace with actual CV download link if you have one
      alert("Download CV feature coming soon!");
      // Or trigger a download
      // window.location.href = 'path-to-cv.pdf';
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      // Scroll to contact section smoothly
      const contactSection = document.querySelector(".contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
