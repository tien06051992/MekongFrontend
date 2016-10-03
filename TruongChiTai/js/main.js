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

    $('.owl-carousel.biruang-product-img-slider').owlCarousel({
        loop: false,
        items: 3,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-angle-left biruang-circle-right biruang-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right biruang-circle-left biruang-angle-right' aria-hidden='true'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    var maxHeight = -1;

    $('.biruang-popular-product .item').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('.biruang-popular-product .item').each(function() {
        $(this).height(maxHeight);
    });
});
