// Event listener for scroll to change navbar style based on scroll position
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  
  // Add class when scrolled more than 50px
  if (window.scrollY > 50) { 
      navbar.classList.add("nav-scrolled"); 
  } else {
      navbar.classList.remove("nav-scrolled"); // Remove class when at top
  }
});

// Event listener to handle navigation menu behavior on page load
document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.querySelector(".hamburger_menu");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

// Toggle menu visibility when hamburger is clicked
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when a nav link is clicked for better UX
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 1180) {
            nav.classList.remove("active");
        }
    });
});

// Function to close menu if screen size increases
function handleResize() {
    if (window.innerWidth > 1180) {
        nav.classList.remove("active");
    }
}

// Event listener to handle screen resizing
window.addEventListener("resize", handleResize);
});

// Event listener to animate the header on page load
document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");

// Show the header with animation
header.style.opacity = "1";
header.style.transform = "translateY(0)";
header.style.transition = "opacity 0.6s ease-in-out, transform 0.6s ease-in-out";

// Function to highlight the correct nav item based on scroll position
function highlightNavItem() {
    let scrollPosition = window.scrollY;
    
    navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (section) {
            let sectionTop = section.offsetTop - 80; // Offset for fixed navbar
            let sectionHeight = section.offsetHeight;

            // Highlight the nav item based on scroll position
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

// Intersection Observer for animating skill items when they come into view
document.addEventListener("DOMContentLoaded", function () {
const skillItems = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn"); // Add fadeIn class
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, { threshold: 0.2 });

skillItems.forEach((item) => {
  observer.observe(item);
});
});

// Intersection Observer for animating nav buttons when they come into view
document.addEventListener("DOMContentLoaded", function () {
const navButton = document.querySelectorAll(".navButton");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideLeftToRight"); // Add sliding animation
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, { threshold: 0.2 });

navButton.forEach((item) => {
  observer.observe(item);
});
});

// Intersection Observer for animating project items when they come into view
document.addEventListener("DOMContentLoaded", function () {
const projects = document.querySelectorAll(".projects");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn"); // Add fadeIn class
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, { threshold: 0.2 });

projects.forEach((item) => {
  observer.observe(item);
});
});

// Intersection Observer for animating experience items when they come into view
document.addEventListener("DOMContentLoaded", function () {
const experience = document.querySelectorAll(".experience");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideLeftToRight"); // Add sliding animation
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, { threshold: 0.2 });

experience.forEach((item) => {
  observer.observe(item);
});
});

// Intersection Observer for animating certificate items when they come into view
document.addEventListener("DOMContentLoaded", function () {
const experience = document.querySelectorAll(".certificateItem");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideLeftToRight"); // Add sliding animation
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, { threshold: 0.2 });

experience.forEach((item) => {
  observer.observe(item);
});
});

// Event listener for the next button to animate project slide to the left
document.getElementById("nextButton").addEventListener("click", function() {
// Start sliding animation (move to the left)
document.getElementById("projectWrapper").style.transform = "translateX(-100%)";

setTimeout(function() {
  // Hide first set and show second set after transition
  document.getElementById("projectSet1").style.display = "none";
  document.getElementById("projectSet2").style.display = "block";

  // Reset position after sliding
  document.getElementById("projectWrapper").style.transition = "none"; // Disable transition for reset
  document.getElementById("projectWrapper").style.transform = "translateX(0)"; // Reset position

  setTimeout(function() {
    // Re-enable transition after reset
    document.getElementById("projectWrapper").style.transition = "transform 0.9s ease"; // Re-enable transition
  }, 50); // Small delay to allow reset to take effect

  // Hide nextButton and show prevButton
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("prevButton").style.display = "inline-block";
}, 500); // Timeout duration matches transition time
});

// Event listener for the prev button to animate project slide to the right
document.getElementById("prevButton").addEventListener("click", function() {
// Start sliding animation (move to the right)
document.getElementById("projectWrapper").style.transform = "translateX(100%)";

setTimeout(function() {
  // Hide second set and show first set after transition
  document.getElementById("projectSet2").style.display = "none";
  document.getElementById("projectSet1").style.display = "block";

  // Reset position after sliding
  document.getElementById("projectWrapper").style.transition = "none"; // Disable transition for reset
  document.getElementById("projectWrapper").style.transform = "translateX(0)"; // Reset position

  setTimeout(function() {
    // Re-enable transition after reset
    document.getElementById("projectWrapper").style.transition = "transform 0.9s ease"; // Re-enable transition
  }, 50); // Small delay to allow reset to take effect

  // Hide prevButton and show nextButton
  document.getElementById("prevButton").style.display = "none";
  document.getElementById("nextButton").style.display = "inline-block";
}, 500); // Timeout duration matches transition time
});

// jQuery to animate counter incrementing to a target value
$(document).ready(function () {
let count = 0;
let target = 9.02; // Target final value
let speed = 25; // Speed of increment

function updateCounter() {
    let interval = setInterval(function () {
        if (count < target) {
            count++; // Increment the counter
            $("#counter").text(count); // Update the counter text
        } else {
            clearInterval(interval); // Stop interval once target is reached
        }
    }, speed);
}

updateCounter();
});
