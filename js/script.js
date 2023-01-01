let closer = document.querySelector("#closer");

let navbar = document.querySelector(".navbar");

closer.addEventListener("click", () => {
  closer.style.display = "none";
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
});
document.querySelector("#menu-btn").addEventListener("click", () => {
  closer.style.display = "block";
  navbar.classList.toggle("active");
});

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").addEventListener("click", () => {
  closer.style.display = "block";
  shoppingCart.classList.toggle("active");
});
let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").addEventListener("click", () => {
  closer.style.display = "block";
  loginForm.classList.toggle("active");
});
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
});
window.onscroll = () => {
  searchForm.classList.remove("active");
};

//Slider

let slides = document.querySelectorAll(".home .slides-container .slide");
let nextBtn = document.querySelector("#slide-next");
let prevBtn = document.querySelector("#slide-prev");

let index = 0;

nextBtn.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
});
prevBtn.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
});
