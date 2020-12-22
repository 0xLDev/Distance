const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");
const button = document.querySelector(".page-button-text");

menuBtn.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

button.addEventListener("click", (e) => {
  button.classList.toggle("active");
});
