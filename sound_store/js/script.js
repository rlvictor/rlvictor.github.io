/*jshint esversion: 6 */

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu__item"),
    hamburger = document.querySelector(".header__menu");

  // Меню
  $(".carousel__item").on("click", function () {
    $(this)
      .addClass("carousel__item-active")
      .addClass("slick-slide-active")
      .siblings()
      .removeClass("carousel__item-active")
      .removeClass("slick-slide-active");
  });

  // Colors jbl

  const colors = document.querySelectorAll(".products__colors-items");
  // console.log(colors);
  const jbl = document.querySelectorAll(".jbl__img");
  // console.log(jbl);

  img = document.getElementsByClassName("products__img");

  colors.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < 5; i++) {
        jbl[i].classList.remove("jbl__img-active");
      }

      if (item == colors[0]) {
        jbl[0].classList.add("jbl__img-active");
      } else if (item == colors[1]) {
        jbl[1].classList.add("jbl__img-active");
      } else if (item == colors[2]) {
        jbl[2].classList.add("jbl__img-active");
      } else if (item == colors[3]) {
        jbl[3].classList.add("jbl__img-active");
      } else if (item == colors[4]) {
        jbl[4].classList.add("jbl__img-active");
      }
    });
  });

  // Берет Item  из карусели по индексу
  const carouselItem_1 = document.querySelectorAll("[data-slick-index='0']"),
    carouselItem_2 = document.querySelectorAll("[data-slick-index='1']"),
    carouselItem_3 = document.querySelectorAll("[data-slick-index='2']"),
    carouselItem_4 = document.querySelectorAll("[data-slick-index='3']"),
    carouselItem_5 = document.querySelectorAll("[data-slick-index='4']"),
    carouselItem_6 = document.querySelectorAll("[data-slick-index='5']"),
    carouselItem_7 = document.querySelectorAll("[data-slick-index='6']"),
    carouselItem_8 = document.querySelectorAll("[data-slick-index='7']");

  // console.log(img);
  // console.log(carouselItem_1);

  const cloned1 = document.querySelectorAll("[data-slick-index='8']"),
    cloned2 = document.querySelectorAll("[data-slick-index='9']"),
    cloned3 = document.querySelectorAll("[data-slick-index='10']"),
    cloned4 = document.querySelectorAll("[data-slick-index='11']"),
    cloned5 = document.querySelectorAll("[data-slick-index='12']"),
    cloned6 = document.querySelectorAll("[data-slick-index='13']"),
    cloned7 = document.querySelectorAll("[data-slick-index='14']"),
    cloned8 = document.querySelectorAll("[data-slick-index='15']");

  // Загружает картинку по клику
  const imgLoader = document.querySelectorAll(".carousel__item");
  imgLoader.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 5; j++) {
          jbl[j].classList.remove("jbl__img-active");
          jbl[j].classList.add("jbl__img-invisible");
        }
        img[i].classList.remove("products__img-active");
        switch (item) {
          case carouselItem_1[0]:
            img[2].classList.add("products__img-active");
            break;
          case carouselItem_1[1]:
            img[10].classList.add("products__img-active");

            break;
          case carouselItem_1[2]:
            img[18].classList.add("products__img-active");
            break;
          case carouselItem_1[3]:
            img[26].classList.add("products__img-active");
            break;

          case cloned1[0]:
            img[2].classList.add("products__img-active");
            break;
          case cloned1[1]:
            img[10].classList.add("products__img-active");

            break;
          case cloned1[2]:
            img[18].classList.add("products__img-active");
            break;
          case cloned1[3]:
            img[26].classList.add("products__img-active");
            break;

          case carouselItem_2[0]:
            img[1].classList.add("products__img-active");
            break;
          case carouselItem_2[1]:
            img[9].classList.add("products__img-active");
            break;
          case carouselItem_2[2]:
            img[17].classList.add("products__img-active");
            break;
          case carouselItem_2[3]:
            img[25].classList.add("products__img-active");
            break;

          case cloned2[0]:
            img[1].classList.add("products__img-active");
            break;
          case cloned2[1]:
            img[9].classList.add("products__img-active");
            break;
          case cloned2[2]:
            img[17].classList.add("products__img-active");
            break;
          case cloned2[3]:
            img[25].classList.add("products__img-active");
            break;

          case carouselItem_3[0]:
            img[0].classList.add("products__img-active");
            break;
          case carouselItem_3[1]:
            img[8].classList.add("products__img-active");
            jbl[0].classList.remove("jbl__img-invisible");
            jbl[1].classList.remove("jbl__img-invisible");
            jbl[2].classList.remove("jbl__img-invisible");
            jbl[3].classList.remove("jbl__img-invisible");
            jbl[4].classList.remove("jbl__img-invisible");
            jbl[0].classList.add("jbl__img-active");

            break;
          case carouselItem_3[2]:
            img[16].classList.add("products__img-active");
            break;
          case carouselItem_3[3]:
            img[24].classList.add("products__img-active");
            break;

          case cloned3[0]:
            img[0].classList.add("products__img-active");
            break;
          case cloned3[1]:
            img[8].classList.add("products__img-active");
            jbl[0].classList.add("jbl__img-active");
            break;
          case cloned3[2]:
            img[16].classList.add("products__img-active");
            break;
          case cloned3[3]:
            img[24].classList.add("products__img-active");
            break;

          case carouselItem_4[0]:
            img[3].classList.add("products__img-active");
            break;
          case carouselItem_4[1]:
            img[11].classList.add("products__img-active");
            break;
          case carouselItem_4[2]:
            img[19].classList.add("products__img-active");
            break;
          case carouselItem_4[3]:
            img[27].classList.add("products__img-active");
            break;

          case cloned4[0]:
            img[3].classList.add("products__img-active");
            break;
          case cloned4[1]:
            img[11].classList.add("products__img-active");
            break;
          case cloned4[2]:
            img[19].classList.add("products__img-active");
            break;
          case cloned4[3]:
            img[27].classList.add("products__img-active");
            break;

          case carouselItem_5[0]:
            img[4].classList.add("products__img-active");
            break;
          case carouselItem_5[1]:
            img[12].classList.add("products__img-active");
            break;
          case carouselItem_5[2]:
            img[20].classList.add("products__img-active");
            break;
          case carouselItem_5[3]:
            img[28].classList.add("products__img-active");
            break;

          case cloned5[0]:
            img[4].classList.add("products__img-active");
            break;
          case cloned5[1]:
            img[12].classList.add("products__img-active");
            break;
          case cloned5[2]:
            img[20].classList.add("products__img-active");
            break;
          case cloned5[3]:
            img[28].classList.add("products__img-active");
            break;

          case carouselItem_6[0]:
            img[5].classList.add("products__img-active");
            break;
          case carouselItem_6[1]:
            img[13].classList.add("products__img-active");
            break;
          case carouselItem_6[2]:
            img[21].classList.add("products__img-active");
            break;
          case carouselItem_6[3]:
            img[29].classList.add("products__img-active");
            break;

          case cloned6[0]:
            img[5].classList.add("products__img-active");
            break;
          case cloned6[1]:
            img[13].classList.add("products__img-active");
            break;
          case cloned6[2]:
            img[21].classList.add("products__img-active");
            break;
          case cloned6[3]:
            img[29].classList.add("products__img-active");
            break;

          case carouselItem_7[0]:
            img[6].classList.add("products__img-active");
            break;
          case carouselItem_7[1]:
            img[14].classList.add("products__img-active");
            break;
          case carouselItem_7[2]:
            img[22].classList.add("products__img-active");
            break;
          case carouselItem_7[3]:
            img[30].classList.add("products__img-active");
            break;

          case cloned7[0]:
            img[6].classList.add("products__img-active");
            break;
          case cloned7[1]:
            img[14].classList.add("products__img-active");
            break;
          case cloned7[2]:
            img[22].classList.add("products__img-active");
            break;
          case cloned7[3]:
            img[30].classList.add("products__img-active");
            break;

          case carouselItem_8[0]:
            img[7].classList.add("products__img-active");
            break;
          case carouselItem_8[1]:
            img[15].classList.add("products__img-active");
            break;
          case carouselItem_8[2]:
            img[23].classList.add("products__img-active");
            break;
          case carouselItem_8[3]:
            img[31].classList.add("products__img-active");
            break;

          case cloned8[0]:
            img[7].classList.add("products__img-active");
            break;
          case cloned8[1]:
            img[15].classList.add("products__img-active");
            break;
          case cloned8[2]:
            img[23].classList.add("products__img-active");
            break;
          case cloned8[3]:
            img[31].classList.add("products__img-active");
            break;
        }
      }
    });
  });

  // Выбирает какой блок карусели
  const imgProducts = document.querySelectorAll(".img-products"),
    navProducts = document.querySelectorAll(".nav-products"),
    carouselProducts = document.querySelectorAll(".carousel__block");
  // console.log(imgLoader);

  navProducts.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < 4; i++) {
        imgProducts[i].classList.remove("img-products-active");
        carouselProducts[i].classList.remove("carousel__block-active");
        carouselProducts[i].classList.remove("carousel__speakers-active");
        carouselProducts[i].classList.remove("carousel__microphones-active");
        carouselProducts[i].classList.remove("carousel__cables-active");
        for (let j = 0; j < 32; j++) {
          img[j].classList.remove("products__img-active");
        }

        if (item == navProducts[0]) {
          imgProducts[0].classList.add("img-products-active");
          carouselProducts[0].classList.add("carousel__block-active");
          img[0].classList.add("products__img-active");
          for (let i = 0; i < 84; i++) {
            imgLoader[i].classList.remove("carousel__item-active");
            imgLoader[i].classList.remove("slick-slide-active");
            imgLoader[8].classList.add("carousel__item-active");
            imgLoader[8].classList.add("slick-slide-active");
          }
        } else if (item == navProducts[1]) {
          for (let i = 0; i < 5; i++) {
            // jbl[i].classList.add("jbl__img-invisible");
            jbl[i].classList.remove("jbl__img-active");
          }
          imgProducts[1].classList.add("img-products-active");
          carouselProducts[1].classList.add("carousel__speakers-active");

          img[8].classList.add("products__img-active");
          jbl[0].classList.add("jbl__img-active");

          jbl[0].classList.remove("jbl__img-invisible");
          jbl[1].classList.remove("jbl__img-invisible");
          jbl[2].classList.remove("jbl__img-invisible");
          jbl[3].classList.remove("jbl__img-invisible");
          jbl[4].classList.remove("jbl__img-invisible");

          for (let i = 0; i < 84; i++) {
            imgLoader[i].classList.remove("carousel__item-active");
            imgLoader[i].classList.remove("slick-slide-active");
            imgLoader[30].classList.add("carousel__item-active");
            imgLoader[30].classList.add("slick-slide-active");
          }
        } else if (item == navProducts[2]) {
          imgProducts[2].classList.add("img-products-active");
          carouselProducts[2].classList.add("carousel__microphones-active");
          img[16].classList.add("products__img-active");
          for (let i = 0; i < 84; i++) {
            imgLoader[i].classList.remove("carousel__item-active");
            imgLoader[i].classList.remove("slick-slide-active");
            imgLoader[52].classList.add("carousel__item-active");
            imgLoader[52].classList.add("slick-slide-active");
          }
        } else if (item == navProducts[3]) {
          imgProducts[3].classList.add("img-products-active");
          carouselProducts[3].classList.add("carousel__cables-active");
          img[24].classList.add("products__img-active");
          for (let i = 0; i < 84; i++) {
            imgLoader[i].classList.remove("carousel__item-active");
            imgLoader[i].classList.remove("slick-slide-active");
            imgLoader[74].classList.add("carousel__item-active");
            imgLoader[74].classList.add("slick-slide-active");
          }
        }
      }
    });
  });

  // Hamburger
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__menu-active");
    menu.classList.toggle("menu-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("header__menu-active");
      menu.classList.toggle("menu-active");
    });
  });
});

// Slick slider
$(document).ready(function () {
  $(
    ".carousel__block, .carousel__speakers, .carousel__microphones, .carousel__cables"
  ).slick({
    // centerMode: true,
    centerPadding: "0px",
    slidesToShow: 6,
    vertical: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/UpArrow.png">',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/DownArrow.png">',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          vertical: false,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          vertical: false,
          centerPadding: "0px",
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          vertical: false,
          centerPadding: "0px",
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: true,
          vertical: false,
          centerPadding: "0px",
          slidesToShow: 5,
        },
      },
    ],
  });
});
