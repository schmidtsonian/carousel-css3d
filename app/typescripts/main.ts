/// <reference path="../definitions/jquery/jquery.d.ts" />


//TODO: REFACTOR!!!!!!!!
$(document).ready( function() {
    
    $('#js-bt__left').on('click', function() {

        if($('#js-slider').hasClass('is-left') || $('#js-slider').hasClass('is-right')){

            $('#js-slider')
                .removeClass("is-right")
                .removeClass("is-left");
        } else {

            $('#js-slider').addClass("is-left");
        }
    });
    $('#js-bt__right').on('click', function() {

        if($('#js-slider').hasClass('is-left') || $('#js-slider').hasClass('is-right')){

            $('#js-slider')
                .removeClass("is-right")
                .removeClass("is-left");
        } else {

            $('#js-slider').addClass("is-right");
        }
    });
} );