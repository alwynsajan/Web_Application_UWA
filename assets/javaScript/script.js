window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) { 
        navbar.classList.add("nav-scrolled"); // Add class when scrolled
    } else {
        navbar.classList.remove("nav-scrolled"); // Remove class when at top
    }
});

function toggleNav() {
    const nav = document.getElementById('navID');
    nav.classList.toggle('active'); /* Toggle the 'active' class to show or hide the nav */
  }