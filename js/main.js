var crux = crux || {};
crux.homeFunction = function() {
    crux.showMenuOnClick();
    crux.showProjectPlannerOnClick();
    //crux.showAlertDialog();
    crux.plannerForm();
    crux.projectListSlideDown();
    crux.changeDropDownValue();
};

crux.changeDropDownValue = function(){
    var dropDownItem = $(".dropdown-menu .project-item");
    dropDownItem.on('click',function(){
        $("#project-list").text($(this).text()).append(' <span class="caret"></span>');
        $("#project-list").val($(this).text());

    });
};

crux.projectListSlideDown = function(){
    var dropDownMenu = $('.dropdown');
    dropDownMenu.on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

// Add slideUp animation to dropdown
    dropDownMenu.on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
};

crux.plannerForm = function(){
    var contactForm =  document.getElementById('planner-form');
    contactForm.setAttribute('action', '//formspree.io/' + 'capielle17' + '@' + 'gmail' + '.' + 'com');
};

crux.showAlertDialog = function(){
    var alertDialog = $('.alert-dialog');
    alertDialog.hide();
    alertDialog.on('click', function(){
        alertDialog.show();
        window.setTimeout(function() {
            alertDialog.fadeTo(500, 0).slideUp(500, function(){
                $(this).remove();
            });
        }, 1000);
    });
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

