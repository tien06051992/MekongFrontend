console.log($('#main-content').height());
console.log($('#main-right-bar').height());
console.log($('#ctn-content').width());

    var z = $('#ctn-content').width();
    var x = $('#main-content').height();
    var y = $('#main-right-bar').height();

$(document).ready(function() {

var m = $(window).resize();
if(m = true){
    if (z > 910) {
        if (x < y) {
            $('#main-content').height($('#main-right-bar').height());
        } else {
            $('#main-right-bar').height($('#main-content').height());
        };

    };
};
});


var a = $('#content-species').height();
var b = $('#species-right-bar').height();
if (a < b) {
    $('#content-species').height($('#species-right-bar').height());
} else {
    $('#species-right-bar').height($('#content-species').height());
}
$(document).ready(function() {
    $('#se1').change(function() {
        $("#se2").prop('disabled', false);
    });
    $('#se2').change(function() {
        $("#se3").prop('disabled', false);
    });
    $('#se3').change(function() {
        $("#se4").prop('disabled', false);
    });
});
