$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=100)
        {
            $('.navbar').css('background-color','white');
            $('#navmenu li a').css("color", "black");
            $('.navbar-brand').css("color","black");
            
        }
        else
        {
            $('.navbar').css('background-color','rgba(0,0,0,0.1)');
            $('#navmenu li a').css("color", "white");
            $('.navbar-brand').css("color","white");

        }
    });

    $('#carousel').carousel({
        interval: 2000,
    });

    $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 
});