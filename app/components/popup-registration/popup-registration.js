$(".popup-registration .social-network__elem").on("click", function () {
    $(".popup-registration .social-network__link").click();
});

$(".js-popup-registration .js-popup-general-close").on("click", function () {
    $(".js-popup-registration").toggleClass("js-popup-close-general");
    $(".main").toggleClass("js-scroll-hidden");
    //Очистка при закрытие попапа регистрации
    setTimeout(function () {
    
    document.querySelector(".js-popup-registration .input-email").value = "";
    document.querySelector(".js-popup-registration .input-password").value = "";
    document.querySelector(".js-popup-registration .input-family").value = "";
    document.querySelector(".js-popup-registration .input-name").value = "";
    document.querySelector(".js-popup-registration .input-agreement").value = "";
}, 200);

    $(".js-popup-registration .label-password").css("color", "black");
    $(".js-popup-registration .label-email").css("color", "black");
    $(".js-popup-registration .label-family").css("color", "black");
    $(".js-popup-registration .label-name").css("color", "black");
    $(".js-popup-registration .label-agreement").css("color", "black");

    $(".js-popup-registration .input-email").removeClass("error");
    $(".js-popup-registration .input-password").removeClass("error");
    $(".js-popup-registration .input-family").removeClass("error");
    $(".js-popup-registration .input-name").removeClass("error");
    $(".js-popup-registration .user-agreement__input").removeClass("error");
    $(".js-popup-registration label").remove();
});
$(".js-popup-registration .js-no-account__registr").on("click", function () {
    $(".js-popup-registration").toggleClass("js-popup-close-general");
    //
    setTimeout(function () {
        $(".js-popup-authorization").toggleClass("js-popup-close-general");
    }, 1);
        //Очистка при открытии попапа авторизации
        setTimeout(function () {
    
            document.querySelector(".js-popup-registration .input-email").value = "";
            document.querySelector(".js-popup-registration .input-password").value = "";
            document.querySelector(".js-popup-registration .input-family").value = "";
            document.querySelector(".js-popup-registration .input-name").value = "";
            document.querySelector(".js-popup-registration .input-agreement").value = "";
        }, 200);
        
            $(".js-popup-registration .label-password").css("color", "black");
            $(".js-popup-registration .label-email").css("color", "black");
            $(".js-popup-registration .label-family").css("color", "black");
            $(".js-popup-registration .label-name").css("color", "black");
            $(".js-popup-registration .label-agreement").css("color", "black");
        
            $(".js-popup-registration .input-email").removeClass("error");
            $(".js-popup-registration .input-password").removeClass("error");
            $(".js-popup-registration .input-family").removeClass("error");
            $(".js-popup-registration .input-name").removeClass("error");
            $(".js-popup-registration .user-agreement__input").removeClass("error");
            $(".js-popup-registration label").remove();

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

    $('.js-form-registration').validate({
        submitHandler: function (form) {
            // Отправка формы при успешной валидации
            $(form).trigger('formSubmit');
        },
        errorPlacement: function (error, element) {
            element.parent().append(error);
            if ($(".js-popup-registration .input-name").hasClass("error")) {
                $(".js-popup-registration .label-name").css("color", "red");
            }
            if ($(".js-popup-registration .input-family").hasClass("error")) {
                $(".js-popup-registration .label-family").css("color", "red");
            }
            if ($(".js-popup-registration .input-email").hasClass("error")) {
                $(".js-popup-registration .label-email").css("color", "red");
            }
            if ($(".js-popup-registration .input-password").hasClass("error")) {
                $(".js-popup-registration .label-password").css("color", "red");
            }
            if ($(".js-popup-registration .input-agreement").hasClass("error")) {
                $(".js-popup-registration .label-agreement").css("color", "red");
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

$(".js-popup-registration .input-name").on("input", function () {
    setTimeout(function () {
        if ($(".js-popup-registration .input-name").val().length >= 0) {
            if ($(".js-popup-registration .input-name").hasClass("error")) {
                $(".js-popup-registration .label-name").css("color", "red");
            }
            if ($(".js-popup-registration .input-name").hasClass("valid")) {
                $(".js-popup-registration .label-name").css("color", "black");
            }
        }
    }, 200);
})
$(".js-popup-registration .input-family").on("input", function () {
    setTimeout(function () {
        if ($(".js-popup-registration .input-family").val().length >= 0) {
            //
            if ($(".js-popup-registration .input-family").hasClass("error")) {
                $(".js-popup-registration .label-family").css("color", "red");
            }
            if ($(".js-popup-registration .input-family").hasClass("valid")) {
                $(".js-popup-registration .label-family").css("color", "black");
            }
            //
        }
    }, 200);
})
$(".js-popup-registration .input-email").on("input", function () {
    setTimeout(function () {
        if ($(".js-popup-registration .input-email").val().length >= 0) {
            if ($(".js-popup-registration .input-email").hasClass("error")) {
                $(".js-popup-registration .label-email").css("color", "red");
            }
            if ($(".js-popup-registration .input-email").hasClass("valid")) {
                $(".js-popup-registration .label-email").css("color", "black");
            }
        }
    }, 200);
})
$(".js-popup-registration .input-password").on("input", function () {
    setTimeout(function () {
        if ($(".js-popup-registration .input-password").val().length >= 0) {
            if ($(".js-popup-registration .input-password").hasClass("error")) {
                $(".js-popup-registration .label-password").css("color", "red");
            }
            if ($(".js-popup-registration .input-password").hasClass("valid")) {
                $(".js-popup-registration .label-password").css("color", "black");
            }
        }
    }, 200);
})
$(".js-popup-registration .input-agreement").on("input", function () {
    setTimeout(function () {
        if ($(".js-popup-registration .input-agreement").val().length >= 0) {
            if ($(".js-popup-registration .input-agreement").hasClass("error")) {
                $(".js-popup-registration .label-agreement").css("color", "red");
            }
            if ($(".js-popup-registration .input-agreement").hasClass("valid")) {
                $(".js-popup-registration .label-agreement").css("color", "black");
            }
        }
    }, 200);
})

$(document).on("click", function (e){ // событие клика по странице
    if (!$(".personal-account__name").is(e.target) && // если клик сделан не по элементу
        $(".js-popup-registration").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            if (!$(".js-popup-registration").hasClass("js-popup-close-general")) {
                $(".main").toggleClass("js-scroll-hidden");
            }
            $(".js-popup-registration").addClass("js-popup-close-general");
    }
});