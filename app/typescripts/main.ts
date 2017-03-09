/// <reference path="../definitions/jquery/jquery.d.ts" />

$(document).ready( function() {
    
    $('#js-bt__left').on('click', function() {

        if($('#js-slider').hasClass('left') || $('#js-slider').hasClass('right')){

            $('#js-slider')
                .removeClass("right")
                .removeClass("left");
        } else {

            $('#js-slider').addClass("left");
        }
    });
    $('#js-bt__right').on('click', function() {

        if($('#js-slider').hasClass('left') || $('#js-slider').hasClass('right')){

            $('#js-slider')
                .removeClass("right")
                .removeClass("left");
        } else {

            $('#js-slider').addClass("right");
        }
    });
} );