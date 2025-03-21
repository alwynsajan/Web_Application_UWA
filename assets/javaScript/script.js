window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) { 
        navbar.classList.add("nav-scrolled"); // Add class when scrolled
    } else {
        navbar.classList.remove("nav-scrolled"); // Remove class when at top
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger_menu");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
  });

  // Close menu when a nav link is clicked (for better UX)
  navLinks.forEach(link => {
      link.addEventListener("click", () => {
          if (window.innerWidth <= 1180) {
              nav.classList.remove("active");
          }
      });
  });

  // Function to close the menu if screen size increases
  function handleResize() {
      if (window.innerWidth > 1180) {
          nav.classList.remove("active");
      }
  }

  window.addEventListener("resize", handleResize);
});


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("nav a");

  // Show the header on page load
  header.style.opacity = "1";
  header.style.transform = "translateY(0)";
  header.style.transition = "opacity 0.6s ease-in-out, transform 0.6s ease-in-out";

  // Function to highlight nav item based on scroll position
  function highlightNavItem() {
      let scrollPosition = window.scrollY;
      
      navLinks.forEach(link => {
          let section = document.querySelector(link.getAttribute("href"));
          if (section) {
              let sectionTop = section.offsetTop - 80; // Offset for fixed navbar
              let sectionHeight = section.offsetHeight;

              if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                  navLinks.forEach(nav => nav.classList.remove("selected"));
                  link.classList.add("selected");
              }
          }
      });
  }

  // Run function on scroll
  window.addEventListener("scroll", highlightNavItem);
  
  // Initially highlight the correct nav item on load
  highlightNavItem();
});

  
  