window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__mini"),
    menuList = document.querySelectorAll(".header__mini-list"),
    hamburger = document.querySelector(".header__hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__hamburger-active");
    menu.classList.toggle("header__mini-active");
  });

  menuList.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("header__hamburger-active");
      menu.classList.toggle("header__mini-active");
    });
  });
});

const header = document.querySelector(".header__popup");

window.onscroll = function showPopup() {
  if (window.pageYOffset > 600) {
    header.style.transform = "translateY(70px)";
  } else {
    header.style.transform = "translateY(-70px)";
  }
};
