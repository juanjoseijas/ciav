
// 

$( "#menu .showmenu" ).click(function() {
  $( "#navigation-menu" ).toggle();
});

$( "#languages .showmenu" ).click(function() {
  $( "#navigation-languages" ).toggle();
});



// Zurb Reveal Modal

 $('#notice').reveal();

// ScrollUp

 $(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

});


// Fresco

 $( ".bodytext a:has(img)" ).addClass( "fresco" );


// Photoset-grid

 $('.photoset-grid').photosetGrid();
 



// Backstretch


  $("#cover").backstretch([
                           "http://ciav.s3.amazonaws.com/img/cover1.png",
                           "http://ciav.s3.amazonaws.com/img/cover2.png",
                           "http://ciav.s3.amazonaws.com/img/cover3.png",
                           "http://ciav.s3.amazonaws.com/img/cover4.png"

                               ], {duration: 6000, fade: 750} );




  // Slider


          $('.bxslider').bxSlider({
            pagerType: 'full',
            autoStart: true,
            controls: false,
            captions:true
            
          });

          $('.adslider').bxSlider({
            
            randomStart: true,
            autoStart: true,
            autoControls: false,
            auto: true
            
          });

           $('.featured').bxSlider({
             slideWidth: 2400,
             slideMargin: 0,
             auto: true,
             randomStart: false,
             autoStart: false,
             speed: 1500
          });



// Timeline


(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})(jQuery);


// Share

$('#twitter').sharrre({
  share: {
    twitter: true
  },
  enableHover: false,
  enableCounter: false,
  enableTracking: true,
  buttons: { twitter: {via: 'CorunaTurismo'}},
  click: function(api, options){
    api.simulateClick();
    api.openPopup('twitter');
  }
});


$('#facebook').sharrre({
  share: {
    facebook: true
  },
  enableHover: false,
  enableCounter: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('facebook');
  }
});