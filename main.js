const menu = document.querySelector(".menu");
const nav_ul = document.querySelector(".nav__ul");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  close.style.display = "block";
  menu.style.display = "none";
  nav_ul.classList.add("active");
});
close.addEventListener("click", () => {
  close.style.display = "none";
  menu.style.display = "block";
  nav_ul.classList.remove("active");
});
