const burger = document.querySelector(".burger__body")
const nav  = document.querySelector(".header__container")
burger.addEventListener("click", function() {
  nav.classList.toggle("nav__active");
  burger.classList.toggle('burger__active')
});

