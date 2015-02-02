$(document).ready(function(){
  $(window).scroll(function(){
    var brand = $('.brand-logo');
    var treshold = ($('.carousel-inner').outerHeight()-100);
    if ($(window).scrollTop() > treshold ) {
      if (!brand.hasClass('nav-scrolled')){
        //brand.fadeOut();
        brand.attr('src', '/img/crux-sign.png');
        brand.fadeIn();
        brand.addClass('nav-scrolled');
        $('.navbar').addClass('navbar-crux-default').find('.container').css('padding-top', '8px');;
      }
    }
    else if ($(window).scrollTop() < treshold) {
      brand.attr('src', '/img/crux-logo.png');
      brand.fadeIn();
      brand.removeClass('nav-scrolled');
      $('.navbar').removeClass('navbar-crux-default').find('.container').css('padding-top', '42px');
    }
  });
});
$("[rel='tooltip']").tooltip();    

$('.image-hover').hover(
    function(){
        $(this).find('.caption').show();
    },
    function(){
        $(this).find('.caption').hide();
    }
);

$(function(){
  $(document).on('click','#about-nav', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:($('#about').offset().top)}, 'easeInOutExpo');
  });
  $(document).on('click','#work-nav', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:($('.carousel-inner').outerHeight() - 72)}, 'slow');
  });
  $(document).on('click','#contact-nav', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:($('#about').outerHeight() + $('#about').offset().top)}, 'slow');
  });
  $(document).on('click','#home-nav', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:$('#home').position().top}, 'slow');
  });
});

   var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('vid', {
          width: '100%',
          videoId: 'DfhwTkQ6oYw',
          playerVars:{
            origin: 'http://crux.ph',
            controls: 0,
            modestBranding: 0,
            loop: 1,
            rel: 0,
            info: 0
          }
        });
      }

$(document).ready(function(){
    function customPlayback(){
        if ($('#vid').is(":in-viewport(200)")) {
            player.playVideo();
        } else if (player.getPlayerState()==1){
            player.pauseVideo();
        }
    }

    $(window).scroll(customPlayback);

    $('.carousel').on('slid.bs.carousel', function(){
        customPlayback();
    });

});
