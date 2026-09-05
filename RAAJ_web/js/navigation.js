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

  // Create Scroll Progress Bar if missing
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
  }

  // Scroll Listener for Navbar shadow & Scroll progress
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Update scroll progress width percentage
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
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

// Network Offline / Online Listener
window.addEventListener('offline', () => {
  if (window.Toast) {
    Toast.show('Network disconnected. You are viewing cached offline content.', 'warning', 5000);
  }
});

window.addEventListener('online', () => {
  if (window.Toast) {
    Toast.show('Network reconnected! Content updated.', 'success', 4000);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
});

window.initializeNavigation = initializeNavigation;