var crux = crux || {};
crux.homeFunction = function() {
    crux.showMenuOnClick();
    crux.iconAnimation();
    crux.changeIcon


};

var showMenuOnClick = $('nav.navbar-default .container-fluid');



crux.showMenuOnClick = function(){
    var showMenuOnClick = $('nav.navbar-default .container-fluid');
    var iconChangeOnClick = $('#icon-transition');
    $(function() {
        $('.toggle-nav').click(function() {
            showMenuOnClick.toggleClass('show-nav');
            return false;
        });
    });
    //close burger menu
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            showMenuOnClick.removeClass('show-nav');
            iconChangeOnClick.removeClass('open');
        }
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

