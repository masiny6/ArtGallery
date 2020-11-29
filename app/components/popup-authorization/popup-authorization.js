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
    $(".main").toggleClass("js-scroll-hidden");
        //Очистка при открытие попапа регистрации
        document.querySelector(".popup-authorization .input-email").value = "";
        document.querySelector(".popup-authorization .input-password").value = "";
        $(".popup-authorization .label-password").css("color", "black");
        $(".popup-authorization .label-email").css("color", "black");
        $(".popup-authorization .input-email").removeClass("error");
        $(".popup-authorization .input-password").removeClass("error");
        $(".popup-authorization label").remove();
});
$(".js-popup-authorization .js-no-account__registr").on("click", function() {
    $(".js-popup-authorization").toggleClass("js-popup-close-general");
    //
    setTimeout(function () {
        $(".js-popup-registration").toggleClass("js-popup-close-general");
    }, 1);
    
//Очистка при открытие попапа регистрации
        document.querySelector(".popup-authorization .input-email").value = "";
        document.querySelector(".popup-authorization .input-password").value = "";
        $(".popup-authorization .label-password").css("color", "black");
        $(".popup-authorization .label-email").css("color", "black");
        $(".popup-authorization .input-email").removeClass("error");
        $(".popup-authorization .input-password").removeClass("error");
        $(".popup-authorization label").remove();

});
$(".js-popup-authorization .js-forgotten-password__button").on("click", function() {
    $(".js-popup-authorization").toggleClass("js-popup-close-general");

    //
    setTimeout(function () {
        $(".js-popup-recovery").toggleClass("js-popup-close-general");
    }, 1);
    
    //Очистка при открытие попапа регистрации
    document.querySelector(".popup-authorization .input-email").value = "";
    document.querySelector(".popup-authorization .input-password").value = "";
    $(".popup-authorization .label-password").css("color", "black");
    $(".popup-authorization .label-email").css("color", "black");
    $(".popup-authorization .input-email").removeClass("error");
    $(".popup-authorization .input-password").removeClass("error");
    $(".popup-authorization label").remove();
    
    
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
            if ($(".popup-authorization .input-email").hasClass("error")) {
                $(".popup-authorization .label-email").css("color", "red");
            }
            if ($(".popup-authorization .input-password").hasClass("error")) {
                $(".popup-authorization .label-password").css("color", "red");
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
$(".popup-authorization .input-email").on("input", function () {
    setTimeout(function () {
        if ($(".popup-authorization .input-email").val().length >= 0) {
            if ($(".popup-authorization .input-email").hasClass("error")) {
                $(".popup-authorization .label-email").css("color", "red");
            } 
            if ($(".popup-authorization .input-email").hasClass("valid")) {
                $(".popup-authorization .label-email").css("color", "black");
            }
        }
    }, 200);
})
$(".popup-authorization .input-password").on("input", function () {
    setTimeout(function () {
        if ($(".popup-authorization .input-password").val().length >= 0) {
            if ($(".popup-authorization .input-password").hasClass("error")) {
                $(".popup-authorization .label-password").css("color", "red");
            } 
            if ($(".popup-authorization .input-password").hasClass("valid")) {
                $(".popup-authorization .label-password").css("color", "black");
            }
        }
    }, 200);
})


$(document).on("click", function (e){ // событие клика по странице
    // if (!$(".personal-account__name").is(e.target) && // если клик сделан не по элементу
    //     $(".js-popup-authorization").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
    //         if (!$(".js-popup-authorization").hasClass("js-popup-close-general")) {
    //             $(".main").toggleClass("js-scroll-hidden");
    //         }
    //         $(".js-popup-authorization").addClass("js-popup-close-general");
    // }
    if (!$(".personal-account__photo").is(e.target) && // если клик сделан не по элементу
        $(".js-popup-authorization").has(e.target).length === 0 && !$(".personal-account__photo-white").is(e.target)) { // если клик сделан не по вложенным элементам
            if (!$(".js-popup-authorization").hasClass("js-popup-close-general")) {
                $(".main").toggleClass("js-scroll-hidden");
            }
            $(".js-popup-authorization").addClass("js-popup-close-general");
    }
});