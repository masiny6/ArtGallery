$(".js-popup-recovery .js-popup-general-close").on("click", function() {
    $(".js-popup-recovery").toggleClass("js-popup-close-general");
    $(".main").toggleClass("js-scroll-hidden");
    setTimeout(function () {
    
        document.querySelector(".js-popup-recovery .input-email").value = "";
    }, 200);
    
        $(".js-popup-recovery .label-email").css("color", "black");
    
        $(".js-popup-recovery .input-email").removeClass("error");
        $(".js-popup-recovery label").remove();
});
$(".js-popup-recovery .js-forgotten-password__button").on("click", function() {
    $(".js-popup-recovery").toggleClass("js-popup-close-general");
    //
    setTimeout(function () {
        $(".js-popup-authorization").toggleClass("js-popup-close-general");
    }, 1);
        setTimeout(function () {
    
            document.querySelector(".js-popup-recovery .input-email").value = "";
            }, 200);
            
                $(".js-popup-recovery .label-email").css("color", "black");
            
                $(".js-popup-recovery .input-email").removeClass("error");
                $(".js-popup-recovery label").remove();
    
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

    $('.js-form-recovery').validate({
        submitHandler: function (form) {
            // Отправка формы при успешной валидации
            $(form).trigger('formSubmit');
            $(".js-popup-recovery").toggleClass("js-popup-close-general");
            $(".js-popup-success").toggleClass("js-popup-close-general");
        },
        errorPlacement: function (error, element) {
            element.parent().append(error);
            if ($(".popup-recovery .input-email").hasClass("error")) {
                $(".popup-recovery .label-email").css("color", "red");
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
$(".popup-recovery .input-email").on("input", function () {
    setTimeout(function () {
        if ($(".popup-recovery .input-email").val().length >= 0) {
            if ($(".popup-recovery .input-email").hasClass("error")) {
                $(".popup-recovery .label-email").css("color", "red");
            } 
            if ($(".popup-recovery .input-email").hasClass("valid")) {
                $(".popup-recovery .label-email").css("color", "black");
            }
        }
    }, 200);
})

$(document).on("click", function (e){ // событие клика по странице
    if (!$(".personal-account__name").is(e.target) && // если клик сделан не по элементу
        $(".js-popup-recovery").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            if (!$(".js-popup-recovery").hasClass("js-popup-close-general")) {
                $(".main").toggleClass("js-scroll-hidden");
            }
            $(".js-popup-recovery").addClass("js-popup-close-general");
    }
});