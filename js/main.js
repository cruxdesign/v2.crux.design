var fs = fs || {};
fs.fsMainFunction = function() {
    //fs.showMenuOnClick();
    fs.iconAnimation();
};

fs.showMenuOnClick = function(){
    $('.toggle-nav').click(function() {
        $('body').toggleClass('show-nav');
        return false;
    });
};

fs.iconAnimation = function() {
    $('#icon-transition').on('click', function () {
        $(this).toggleClass('open');

    });
}


$(function(){
    fs.fsMainFunction();
});