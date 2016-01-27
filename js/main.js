var crux = crux || {};
crux.homeFunction = function() {
    crux.showMenuOnClick();
    crux.iconAnimation();
    crux.shrinkNavbarMenu();
};



crux.shrinkNavbarMenu = function(){
    var brand = $('.navbar-brand');
    var logo = brand.find('.nav-logo');
    $(window).scroll(function() {
        if(window.innerWidth >= 992) {
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('navbar-shrink');
                logo.attr('src', '/img/logo/crux-logo-inverse.png');
            } else {
                $('nav').removeClass('navbar-shrink');
                logo.attr('src', '/img/logo/crux-brand.png');
            }
        }
    });
    if (window.innerWidth <= 991) {
        $('nav').addClass('navbar-shrink');
        logo.attr('src', '/img/logo/crux-logo-inverse.png');
    }
};

crux.showMenuOnClick = function(){
    var showMenuOnClick = $('nav.navbar-default .container-fluid');
    $(function() {
        $('.toggle-nav').click(function() {
            showMenuOnClick.toggleClass('show-nav');
            return false;
        });
    });
};

crux.iconAnimation = function() {
    $('#icon-transition').on('click', function () {
        $(this).toggleClass('open');

    });
}

$(function(){
    crux.homeFunction();
});

