/*jshint esversion: 6 */

// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 1200,
//     adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

// const slider = tns({
//   container: ".carousel__inner-2",
//   items: 1,
//   slideBy: "page",
//   autoplay: false,
//   controls: false,
//   nav: false,
//   speed: 1200,
// });

// document.querySelector(".prev").addEventListener("click", function () {
//   slider.goTo("prev");
// });
// document.querySelector(".next").addEventListener("click", function () {
//   slider.goTo("next");
// });

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // items: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },

      575: {
        items: 1,
        nav: true,
        dots: false,
      },
      768: {
        items: 1,
        nav: true,
        dots: false,
      },
      992: {
        items: 1,
        nav: true,
        dots: false,
      },
      1400: {
        items: 1,
        nav: true,
        dots: false,
      },
    },
    loop: true,
    autoWidth: true,
    smartSpeed: 1200,
    // dots: false,
    // nav: true,
    navText: [
      '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
      '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    ],
  });
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab-active)",
    function () {
      $(this)
        .addClass("catalog__tab-active")
        .siblings()
        .removeClass("catalog__tab-active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content-active")
        .eq($(this).index())
        .addClass("catalog__content-active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content-active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list-active");
      });
    });
  }
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  //modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
  });

  // $(".button-mini").on("click", function () {
  //   $(".overlay, #order").fadeIn("slow");
  // });
  $(".button-mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text(
        $(".catalog-item__subtittle").eq(i).text()
      );
      $(".overlay, #order").fadeIn("slow");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите не менее {0} символов!"),
        },
        phone: "Пожалуйста, введите свой номер телефона ",
        email: {
          required: "Пожалуйста, назовите свою почту",
          email: "Неправильно введен адрес почты",
        },
      },
    });
  }
  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  $("input[name=phone]").mask("+7(999) 999-99-99");

  // $("form").submit(function (e) {
  //   e.preventDefault();

  //   if (!$(this).valid()) {
  //     return;
  //   }
  //   $.ajax({
  //     type: "POST",
  //     url: "../mailer/smart.php",
  //     data: $(this).serialize(),
  //   }).done(function () {
  //     $(this).find("input").val("");
  //     $("#consultation, #order").fadeOut();
  //     $(".overlay, #thanks").fadeIn("slow");
  //     $("form").trigger("reset");
  //   });
  //   return false;
  // });
  $("form").submit(function (e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").fadeIn("slow");

      $("form").trigger("reset");
    });
    return false;
  });
  // Smooth scrool and pageup

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href='#up']").click(function () {
    // Make sure this.hash has a value before overriding default behavior
    // if (this.hash !== "") {
    // Prevent default anchor click behavior
    // event.preventDefault();

    // Store hash
    const _href = $(this).attr("href");

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px",
    });
    return false;

    // function () {
    // Add hash (#) to URL when done scrolling (default click behavior)
    //   window.location.hash = hash;
    // }
    // } // End if
  });
  new WOW().init();
});
