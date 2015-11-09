
var Application = function(){

    function mobileMenu(){

        //navigation for mobile devices - hamburger menu


        var mobileMenuLinks = $("a.menu-links");

        if(window.matchMedia("(max-width: 800px)").matches){
            $(".desktop-button").addClass("smartphone-button").removeClass("desktop-button");
            $("nav").removeClass("desktop-view").addClass("smartphone-view").addClass("click-class");
            $("button").on("click", function(){
                $("nav").toggleClass("click-class");
            });

            mobileMenuLinks.on("click", function (){
                $("nav").toggleClass("click-class");
            });

        }
    }

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


    function stickyMobileMenu(){

        //sticky menu function for mobile devices

        var menu = $(".menu-button");
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

        //slider function for 'experience' section

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
        mobileMenu:mobileMenu,
        stickyMenu:stickyMenu,
        stickyMobileMenu:stickyMobileMenu,
        experienceSlider:experienceSlider
    }
};




$(function(){


    var app = new Application();
    app.mobileMenu();
    app.stickyMenu();
    app.stickyMobileMenu();
    app.experienceSlider();


});