
// 

$( "#menu .showmenu" ).click(function() {
  $( "#navigation-menu" ).toggle();
});

$( "#languages .showmenu" ).click(function() {
  $( "#navigation-languages" ).toggle();
});


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

           $('.timeline ul').bxSlider({
               pagerType: 'full',
               autoStart: true,
               controls: false,
               captions:false
          });






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