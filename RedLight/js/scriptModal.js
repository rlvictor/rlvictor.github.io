$(document).ready(function () {
  $("[data-modal=feedback]").on("click", function () {
    $(".overlay, .modal").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal, .feed-form").fadeOut("slow");
    setTimeout(() => window.location.reload(), 1000);
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
        textarea: "required",
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
        textarea: {
          required: "Напишите пожелание или свой вопрос",
        },
      },
    });
  }
  validateForms(".feed-form");

  // Отправка на почту
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
      $(".modal, .feed-form").fadeOut("slow");
      $(".modal__feed").fadeIn("slow");
      $("form").trigger("reset");
    });
    return false;
  });
});
