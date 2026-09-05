/**
 * Mobile Navigation, Scroll Progress Bar & Network Listener
 */
function initializeNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  // Scroll Listener for Navbar shadow
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Highlight Current Active Page Link in Navbar & Drawer
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-links a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath && (linkPath.toLowerCase() === currentPath.toLowerCase() || (currentPath.toLowerCase() === 'index.html' && linkPath.toLowerCase() === 'index.html'))) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
});

window.initializeNavigation = initializeNavigation;