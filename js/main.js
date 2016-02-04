var crux = crux || {};
crux.homeFunction = function() {
    crux.showMenuOnClick();
    crux.showProjectPlannerOnClick();
};

crux.showProjectPlannerOnClick = function(){
    var showProjectPlanner = $('nav.navbar-default .container-fluid');
    $(function(){
       $('.toggle-planner').click(function() {
           showProjectPlanner.toggleClass('show-project-planner');
           showProjectPlanner.removeClass('show-nav');
           return false;
       });
    });
};

crux.showMenuOnClick = function(){
    var showMenuOnClick = $('nav.navbar-default .container-fluid');
    $(function() {
        $('.toggle-nav').click(function() {
            showMenuOnClick.toggleClass('show-nav');
            showMenuOnClick.removeClass('show-project-planner');
            return false;
        });
    });

    //close burger menu
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            showMenuOnClick.removeClass('show-nav');
            showMenuOnClick.removeClass('show-project-planner');

            //iconChangeOnClick.removeClass('open');

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

