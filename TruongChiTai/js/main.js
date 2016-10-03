$(document).ready(function() {
    $('.owl-carousel.biruang-popular-product').owlCarousel({
        loop: false,
        items: 4,
        margin: 30,
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-angle-left biruang-circle-right biruang-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right biruang-circle-left biruang-angle-right' aria-hidden='true'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    $('.biruang-slider-item img').on('click', function() {
        var src = $(this).attr('src');
        $(this).parent().parent().siblings(".biruang-product-main-img").children().children().attr('src', src);
        $(this).parent().parent().siblings(".biruang-product-main-img").children().attr('href', src);
        $('.biruang-slider-item').css('border-bottom', 'none');
        $(this).parent().css('border-bottom', '3px solid #636363');
    });

    var maxHeight = -1;

    $('.biruang-popular-product .item').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('.biruang-popular-product .item').each(function() {
        $(this).height(maxHeight);
    });


    $(".biruang-zoom i").on("click", function() {
        $(this).parent().siblings(".biruang-product-main-img").children().trigger("click");
    });
    
    /* This is basic - uses default settings */

    $("a#single_image").fancybox();


});
