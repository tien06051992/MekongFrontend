var a = $('#qty').val();

$(document).ready(function() {
	b = parseInt(a);
    $("#add").click(function() {
        b = b + 1;
        $('#qty').val(b);
    });
    $("#subtract").click(function() {
        if (b > 1) {
        	b = b - 1;
            $('#qty').val(b);
        };

    });
});
var c = $('#qty1').val();
$(document).ready(function() {
	d = parseInt(c);
    $("#add1").click(function() {
    	d = d + 1;
        $('#qty1').val(d);
    });
    $("#subtract1").click(function() {
        if (d > 0) {
        	d = d - 1;
            $('#qty1').val(d);
        };

    });
});
$(document).ready(function() {
$('#slide1').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: [
            "<i class='fa fa-angle-left left-arrow' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right right-arrow' aria-hidden='true'></i>"
        ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});
$(document).ready(function() {
$('#slide2').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: [
            "<i class='fa fa-angle-left left-arrow' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right right-arrow' aria-hidden='true'></i>"
        ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});