// Reading Time


$("article").readingtime();


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
 



// Backstretch


  $("body.index, body.en_index, body.fr_index, body.de_index, body.pt_index, body.it_index, body.gl_index").backstretch([
                           "http://ciav.s3.amazonaws.com/img/_DSC3214.jpg",
                           "http://ciav.s3.amazonaws.com/img/_DSC3250.jpg",
                           "http://ciav.s3.amazonaws.com/img/function01.jpg"

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






