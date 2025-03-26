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


  
  document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.2 });

    skillItems.forEach((item) => {
      observer.observe(item);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelectorAll(".navButton");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideLeftToRight");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.2 });

    navButton.forEach((item) => {
      observer.observe(item);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".projects");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.2 });

    projects.forEach((item) => {
      observer.observe(item);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const experience = document.querySelectorAll(".experience");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideLeftToRight");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.2 });

    experience.forEach((item) => {
      observer.observe(item);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const experience = document.querySelectorAll(".certificateItem");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideLeftToRight");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.2 });

    experience.forEach((item) => {
      observer.observe(item);
    });
  });



document.getElementById("nextButton").addEventListener("click", function() {
  // Start the sliding animation (move to the left)
  document.getElementById("projectWrapper").style.transform = "translateX(-100%)";

  setTimeout(function() {
    // Hide the first set of projects and show the second set after the transition
    document.getElementById("projectSet1").style.display = "none";
    document.getElementById("projectSet2").style.display = "block";

    // Reset position to the start after the sliding animation
    document.getElementById("projectWrapper").style.transition = "none"; // Disable transition for reset
    document.getElementById("projectWrapper").style.transform = "translateX(0)"; // Reset position

    setTimeout(function() {
      // Re-enable transition after resetting position
      document.getElementById("projectWrapper").style.transition = "transform 0.9s ease"; // Re-enable transition
    }, 50); // Small delay to allow the reset to take effect

    // Hide the nextButton and show the prevButton
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("prevButton").style.display = "inline-block";
  }, 500); // The timeout duration matches the transition time
});

document.getElementById("prevButton").addEventListener("click", function() {
  // Start the sliding animation (move to the right)
  document.getElementById("projectWrapper").style.transform = "translateX(100%)";

  setTimeout(function() {
    // Hide the second set of projects and show the first set after the transition
    document.getElementById("projectSet2").style.display = "none";
    document.getElementById("projectSet1").style.display = "block";

    // Reset position to the start after the sliding animation
    document.getElementById("projectWrapper").style.transition = "none"; // Disable transition for reset
    document.getElementById("projectWrapper").style.transform = "translateX(0)"; // Reset position

    setTimeout(function() {
      // Re-enable transition after resetting position
      document.getElementById("projectWrapper").style.transition = "transform 0.9s ease"; // Re-enable transition
    }, 50); // Small delay to allow the reset to take effect

    // Hide the prevButton and show the nextButton
    document.getElementById("prevButton").style.display = "none";
    document.getElementById("nextButton").style.display = "inline-block";
  }, 500); // The timeout duration matches the transition time
});

$(document).ready(function () {
  let count = 0;
  let target = 9.02; // Change this to your desired final value
  let speed = 25; // Lower is faster

  function updateCounter() {
      let interval = setInterval(function () {
          if (count < target) {
              count++;
              $("#counter").text(count);
          } else {
              clearInterval(interval);
          }
      }, speed);
  }

  updateCounter();
});


  
  