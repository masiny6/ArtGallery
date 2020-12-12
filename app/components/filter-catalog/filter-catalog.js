var $range = $("#range-price-js");
var $inputFrom = $("#conclusion-min-js");
var $inputTo = $("#conclusion-max-js");
var instance;
var min = 0;
var max = 1000000;
var from = 0;
var to = 0;

$("#range-price-js").ionRangeSlider({
    type: "double",
    grid: false,
    min: min,
    max: max,
    from: 200000,
    to: 800000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

});

$inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);
});

$("#range-size-js").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 230,
    to: 740,
    step: 250
});
var instanceSize = $("#range-size-js").data("ionRangeSlider");
// var attr = $("#range-size-js").attr("data-size-1");
// console.log(attr);
// // $(".irs-grid-text").each(function (index, element) {

// //     // $(element).text();
// // });
$(".js-grid-text-0").text("S");
$(".js-grid-text-1").text("M");
$(".js-grid-text-2").text("L");
$(".js-grid-text-3").text("XL");
$(".js-grid-text-4").text("XXL");

$('.author-list-js').select2({
    minimumResultsForSearch: Infinity,
    multiple: true,
    dropdownPosition: 'below'
});
$('.author-list-js').on('change', function () {
    var values = $(this).val();
    var $options = $(this).closest('.tab-author-inner').find('.js-autocomplete-options');
    $options.html('');
    for (var i = 0; i < values.length; i++) {
        $options.append('<div class="autocomplete__item js-autocomplete-item">' + values[i] + '</div>');
    }
});
// $(".select2-results__options--nested .select2-results__option").on("click", function() {
//     console.log("dffd");
//     $(".select2-results__options--nested .select2-results__option").each(function (index, element) {
//         if ($(element).attr("aria-selected") == "true") {
//             $(element).toggleClass("js-hidden-select");
//         }
//     });
// });
$(document).on('click', '.js-autocomplete-item', function () {
    console.log("124");
    var $select = $(this).closest('.tab-author-inner').find('.author-list-js');
    var text = $(this).text();
    var currentValues = $select.val();

    var values = currentValues.filter(function (item) {
        return item !== text;
    });

    $select.val(values).trigger('change');
});

$(".roll-up").on("click", function () {
    $(".tab-inner").each(function (index, element) {
        if ($(element).hasClass("js-tab-inner-active")) {
            $(element).removeClass("js-tab-inner-active");
            $(element).addClass("js-tab-inner-disabled");
        }
    });
    $(".filter-tabs__elem").toggleClass("filter-tabs-js");
    $(".roll-up").toggleClass("roll-up-js");
    $(".show-pictures-mobile").toggleClass("js-show-pictures-mobile");
    if ($(this).hasClass("roll-up-js")) {
        $(".roll-up").text("Развернуть фильтр");
    } else {
        $(".roll-up").text("Свернуть фильтр");
        $(".tab-inner:eq(0)").addClass("js-tab-inner-active");
        $(".filter-tabs__elem").removeClass("js-filter-tabs");
        $(".filter-tabs__elem:eq(0)").addClass("js-filter-tabs");
    }
});

$(".tab-inner-elem").on("click", function () {
    if ($(this).prop("checked")) {
        $(".tab-inner-text").on("click", function () {
            $(this).toggleClass("js-tab-inner-text");
        });
    }
    if (!$(this).prop("checked")) {
        $(".tab-inner-text").on("click", function () {
            $(this).toggleClass("js-tab-inner-text");
        });
    }
});
$(".tab-inner-text").each(function (index, element) {
    $(element).attr("for", index);
});
$(".tab-inner-elem").each(function (index, element) {
    $(element).attr("id", index);
});
// Кнопка сбросить фильтр
$(".js-button-reset__inner").on("click", function () {
    $(".tab-inner-text").removeClass("js-tab-inner-text");
    instance.update({
        from: 200000,
        to: 800000
    });
    instanceSize.update({
        from: 230,
        to: 740,
    });
    $(".js-grid-text-0").text("S");
    $(".js-grid-text-1").text("M");
    $(".js-grid-text-2").text("L");
    $(".js-grid-text-3").text("XL");
    $(".js-grid-text-4").text("XXL");

    setTimeout(function () {
        $inputFrom.val("200000");
        $inputTo.val("800000");
    }, 1);

});

$(".filter-tabs__elem").on("click", function () {
    var dataTabs = $(this).attr("data-tabs");
    $(".tab-inner").addClass("js-tab-inner-disabled");
    $(".tab-inner").removeClass("js-tab-inner-active");
    $(".filter-tabs__elem").removeClass("js-filter-tabs")
    $(this).addClass("js-filter-tabs");
    $(".filter-tabs__elem").removeClass("js-filter-tabs-border") //
    var asd = $(this);
    if ($(window).width() <= "768") {
        $(".filter-tabs__elem").removeClass("js-filter-tabs");
        $(this).toggleClass("js-filter-tabs-border");
    }

    $(".tab-inner").each(function (index, element) {
        var dataInner = $(element).attr("data-inner");
        if (dataTabs == dataInner) {
            $(element).removeClass("js-tab-inner-disabled");
            $(element).addClass("js-tab-inner-active");
            if ($(window).width() <= "768") {
                $(element).addClass("js-tab-inner-border");
            }
        }
    });
});
if ($(window).width() <= "768") {
    $(".filter-tabs__elem").removeClass("js-filter-tabs")
    $(".tab-inner").addClass("js-tab-inner-border");
}
$(".filter-mobile").on("click", function () {
    $(".form-filter").toggleClass("js-form-filter");
    $(".tab-arrow").toggleClass("js-tab-arrow");
});
