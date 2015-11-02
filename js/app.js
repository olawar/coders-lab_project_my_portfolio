
var Application = function(){

    function stickyMenu(){

        //sticky menu function

        var menu = $("nav.sticky-nav");
        var lastPositionTop = 0;


        $(window).on("scroll", function(){
            if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
                lastPositionTop = menu.offset().top;
                menu.addClass("sticky");
            }
            if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
                menu.removeClass("sticky");
            }

        });
    }

    return{
        stickyMenu:stickyMenu
    }
};




$(function(){

    var app = new Application();
    app.stickyMenu();


});