var crux = crux || {};

crux.init = function(){
    crux.workGrid();
    crux.workHover();
    crux.shrinkNavbarMenu();
};

crux.shrinkNavbarMenu = function(){
    var brand = $('.navbar-brand');
    var logo = brand.find('.nav-logo');
    $(window).scroll(function() {
        if(window.innerWidth >= 992) {
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('navbar-shrink');
                logo.attr('src', 'https://res.cloudinary.com/design-studio/image/upload/assets/logo/crux-brand-inverse.png');
            } else {
                $('nav').removeClass('navbar-shrink');
                logo.attr('src', 'https://res.cloudinary.com/design-studio/image/upload/assets/logo/crux-brand-inverse.png');
            }
        }
    });
    if (window.innerWidth <= 991) {
        $('nav').addClass('navbar-shrink');
        logo.attr('src', 'https://res.cloudinary.com/design-studio/image/upload/assets/logo/crux-logo-inverse.png');
    }
};


crux.workGrid = function() {
    $("#grid").mason({
        itemSelector: '.block',
        columns: [
            [0, 768, 1],
            [991, 1280, 5]
        ],
        ratio: 1,
        promoted: [
            ['p1', 2, 1],
            ['p2', 3, 1],
            ['p3', 3, 2],
            ['p4', 2, 2],
            ['p5', 2, 1],
            ['p6', 3, 1]
        ],
        layout: 'fluid',
        filler: {
            keepDataAndEvents: false
        },
        gutter: 5
    });
};

crux.workHover = function(){
    var workItem = $("#work-section #grid .block");
    workItem.hover(function(){
        $(this).find(".caption").toggleClass('active');
    });

};

$(function(){
    crux.init();
});

