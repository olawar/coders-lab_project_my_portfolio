
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

    function experienceSlider(){
        var images = $("li.experience-items");
        var visibleImage = 0;

        images.eq(visibleImage).show();

        $(".arrow-right").click(function(){
            images.eq(visibleImage).hide();
            visibleImage++;
            if(visibleImage >= images.length){
                visibleImage=0;
            }
            images.eq(visibleImage).show(200);
        });

        $(".arrow-left").click(function(){
            images.eq(visibleImage).hide();
            visibleImage--;
            if(visibleImage < 0){
                visibleImage=images.length-1;
            }
            images.eq(visibleImage).show(200);
        });
    }

    return{
        stickyMenu:stickyMenu,
        experienceSlider:experienceSlider
    }
};




$(function(){

    var app = new Application();
    app.stickyMenu();
    app.experienceSlider();


});