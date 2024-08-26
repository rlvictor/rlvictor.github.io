window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuList = document.querySelectorAll(".menu"),
    hamburger = document.querySelector(".menu__hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("menu__hamburger-active");
    menu.classList.toggle("menu-active");
  });

  menuList.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("menu__hamburger-active");
      menu.classList.toggle("menu-active");
    });
  });
});
