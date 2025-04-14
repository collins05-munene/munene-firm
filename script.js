document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-icon");
    const navLinks = document.querySelector("nav ul");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    } else {
      console.error("Could not find .hamburger-icon or nav ul elements.");
    }
  });
  