window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) { 
        navbar.classList.add("nav-scrolled"); // Add class when scrolled
    } else {
        navbar.classList.remove("nav-scrolled"); // Remove class when at top
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const navLinks = document.querySelectorAll("nav a");
//   const sections = document.querySelectorAll("section");

//   // Set "Profile" as selected by default
//   navLinks[0].classList.add("selected");

//   // Add click event to set the active link
//   navLinks.forEach(link => {
//       link.addEventListener("click", (event) => {
//           navLinks.forEach(l => l.classList.remove("selected"));
//           event.target.classList.add("selected");
//       });
//   });

//   // Function to update nav selection on scroll
//   function updateActiveSection() {
//       let scrollPosition = window.scrollY + 100; // Offset for better section detection

//       sections.forEach((section) => {
//           const sectionTop = section.offsetTop;
//           const sectionHeight = section.offsetHeight;
//           const sectionId = section.getAttribute("id");

//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//               navLinks.forEach(link => link.classList.remove("selected"));
//               document.querySelector(`nav a[href="#${sectionId}"]`).classList.add("selected");
//           }
//       });
//   }

//   // Listen for scroll events
//   window.addEventListener("scroll", updateActiveSection);
// });

  
  