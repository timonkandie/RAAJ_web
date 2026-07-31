function initializeNavigation(){

    // Navigation code goes here
  const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const closeMenu = document.querySelector(".close-menu");

  menuToggle.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

  closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});

  window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

}