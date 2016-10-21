$(document).ready(function() {
    var a = $('.freezepanel').offset().top;
    $('.freezepanel').parent().height(parseInt($('.freezepanel').height()) + parseInt($('.freezepanel').css('margin-bottom')));
    $(window).scroll(function() {
        //console.log($(window).scrollTop()); 

        //console.log($('.freezepanel').offset().top);

        var b = $(window).scrollTop();
        if (b >= a) {
            $('.freezepanel').addClass('freezing');
        } else {
            $('.freezepanel').removeClass('freezing');
        };
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 500) {
            $('.back-top').css('visibility', 'visible');
        } else {
            $('.back-top').css('visibility', 'hidden');
        }
    })
    
});
