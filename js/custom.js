$(document).ready(function(){
    $('nav ul li a').css('color','white');           
    $('.navbar-brand').css('color','white'); 
    $('nav').css('background','black');
    $(window).scroll(function(){
        if($(window).scrollTop()>10)
        {
            $('nav').addClass('black'); 
            $('nav').css('background','black');
            
        }
        else
        {
            $('nav').removeClass('black');
            $('nav').css('background','black');
           
        }
    });

    $('#carousel').carousel({
        interval: 2000,
    });

    $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 
});