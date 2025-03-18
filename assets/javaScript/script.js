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


function setActiveLink(event) {
    // Remove 'selected' class from all links
    const links = document.querySelectorAll('nav .btn');
    links.forEach(link => link.classList.remove('selected'));
  
    // Add 'selected' class to the clicked link
    event.target.classList.add('selected');
  }
  
  // Ensure "Home" is selected by default when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('nav .btn'); // "Home" link is the first one
    homeLink.classList.add('selected');
  });
  
  // Attach event listeners to each link
  document.querySelectorAll('nav .btn').forEach(link => {
    link.addEventListener('click', setActiveLink);
  });
  
  