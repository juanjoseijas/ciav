// Reading Time


$("article").readingtime();







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


  $("#cover").backstretch(["http://ciav.s3.amazonaws.com/img/function01.jpg",
                               "http://hotelpiornedo.s3.amazonaws.com/images/18.jpg",
                               "http://hotelpiornedo.s3.amazonaws.com/images/44.jpg"
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






