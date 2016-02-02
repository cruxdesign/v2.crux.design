var crux = crux || {};
crux.workFunction = function() {
    crux.projectSlider();
};

crux.projectSlider = function(){
    $("#project-slider").owlCarousel({
        navigation : false,
        lazyLoad : true,
        slideSpeed: 4000,
        autoPlay: true,
        stopOnHover : true,
        items : 7,
        itemsDesktop : [1440,5],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,3],
        itemsMobile : [479,2]
    });
}


$(function(){
    crux.workFunction();
});
