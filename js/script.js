const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  menuLink = document.querySelectorAll(".menu__link"),
  menuOverlay = document.querySelector(".menu__overlay"),
  menuSwipe = document.querySelector("html");

//Меню открытие
hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
//Меню закрытие
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});
//Перебор меню, закрытие по клику на ссылку
menuLink.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
//Закрытие меню по клику на overlay на разрешении выше 1024
if (window.matchMedia("(min-width: 1024px)").matches) {
  document.addEventListener("click", function (event) {
    if (menuOverlay.contains(event.target)) menu.classList.remove("active");
  });
}
//-------------------------------------------

// menu.addEventListener("touchmove", () => {
//   menu.classList.remove("active");
// });

// menuSwipeSection.forEach((item) => {
//   item.addEventListener("touchmove", () => {
//     menu.classList.add("active");
//   });
// });
//----------------------------------------------
//Закрытие меню по свайпу вправо
const hammertimeRight = new Hammer(menu);
hammertimeRight.on("swiperight", function (e) {
  menu.classList.remove("active");
});
//Открывание меню по свайпу влево
const hammertimeLeft = new Hammer(menuSwipe);
hammertimeLeft.on("swipeleft", function (e) {
  menu.classList.add("active");
});
//Добавление полос заполнения в %
const counters = document.querySelectorAll(".skills__range-counter"),
  lines = document.querySelectorAll(".skills__range-band span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

$(".contacts form").validate({
  rules: {
    checkbox: {
      required: true,
    },
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: "Пожалуйста, назовите свое имя",
      minlength: jQuery.validator.format("Пожалуйста, не менее {0} символов!"),
    },
    email: {
      required: "Пожалуйста введите вашу почту",
      email: "Почта должна быть вида name@domain.ru",
    },
    checkbox: {
      required: "Нужно принять политику безопасности",
    },
  },
});

//Закрывание модального окна
$(".modal__close").on("click", function () {
  $(".modal__overlay, .modal").fadeOut("slow");
});

//Отправка на почту
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
    $(".modal__overlay, .modal").fadeIn("slow");
    $("form").trigger("reset");
  });
  return false;
});
