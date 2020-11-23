$(".popup-authorization .social-network__elem").on("click", function() {
$(".popup-authorization .social-network__link").click();
});


function replacement() {
    if ($(".js-forgotten-password__text").text() != "Зарегистрироваться") {
        if ($(window).width() <= "767") {
            $(".js-forgotten-password__text").text("Зарегистрироваться");
            $(".js-popup-authorization .forgotten-password__button").on("click", function() {
                $(".js-popup-authorization").toggleClass("js-popup-close-general");
                //
                $(".js-popup-registration").toggleClass("js-popup-close-general");
            });
            
        }
    }
    if ($(".js-forgotten-password__text").text() != "Забыли пароль?") {
        if ($(window).width() >= "768") {
            $(".js-forgotten-password__text").text("Забыли пароль?");
            
        }
    }
}
replacement();
$(window).resize(function() {
    replacement();
});

if ($(window).width() <= "767") {
    $(".js-popup-authorization .forgotten-password__text").on("click", function() {
        $(".js-popup-authorization").toggleClass("js-popup-close-general");
        //
        $(".js-popup-registration").toggleClass("js-popup-close-general");
    });
}

$(".js-popup-authorization .js-popup-general-close").on("click", function() {
    $(".js-popup-authorization").toggleClass("js-popup-close-general");
});
$(".js-popup-authorization .js-no-account__registr").on("click", function() {
    $(".js-popup-authorization").toggleClass("js-popup-close-general");
    //
    $(".js-popup-registration").toggleClass("js-popup-close-general");
    
    
});
$(".js-popup-authorization .js-forgotten-password__button").on("click", function() {
    $(".js-popup-authorization").toggleClass("js-popup-close-general");
    //
    $(".js-popup-recovery").toggleClass("js-popup-close-general");
});

$(document).ready(function () {
    //Валидация формы
    $.extend($.validator.messages, {
        required: "Заполните это поле.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Введите правильный e-mail",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        extension: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
        minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
        rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
        range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
        max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
        min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
    });

    // $.validator.addMethod('js-input-tel', function(value, element) {
    //     return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
    // }, 'Введите корректный номер');

    $('.js-form-authorization').validate({
        submitHandler: function (form) {
            // Отправка формы при успешной валидации
            $(form).trigger('formSubmit');
        },
        errorPlacement: function (error, element) {
            element.parent().append(error);
            if ($(".input-email").hasClass("error")) {
                $(".label-email").css("color", "red");
            }
            if ($(".input-password").hasClass("error")) {
                $(".label-password").css("color", "red");
            }

        }

    });

    // $('.js-form-login').validate({
    //     submitHandler: function(form) {
    //         // Отправка формы при успешной валидации
    //         $(form).trigger('formSubmit');
    //     },
    //     errorPlacement: function(error, element) {
    //         element.parent().append(error);
    //     }
    // });

    // $('.js-input-tel').inputmask('+7 (999) 999-99-99');
});
$(".input-email").on("input", function () {
    setTimeout(function () {
        if ($(".input-email").val().length >= 0) {
            if ($(".input-email").hasClass("error")) {
                $(".label-email").css("color", "red");
            } 
            if ($(".input-email").hasClass("valid")) {
                $(".label-email").css("color", "black");
            }
        }
    }, 200);
})
$(".input-password").on("input", function () {
    setTimeout(function () {
        if ($(".input-password").val().length >= 0) {
            if ($(".input-password").hasClass("error")) {
                $(".label-password").css("color", "red");
            } 
            if ($(".input-password").hasClass("valid")) {
                $(".label-password").css("color", "black");
            }
        }
    }, 200);
})