
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

          $('.timeline2 ul').bxSlider({
              pagerType: 'full',
              autoStart: true,
              controls: false,
              captions:false
         });

           

		  var slider = $('.timeline ul').bxSlider({
		    mode: 'fade',
			controls: false,
			captions: false,
			pager: false
		  });
		  $('#slider0').click(function(){
		    slider.goToSlide(0);
		    return false;
		  });
		  $('#slider1').click(function(){
		    slider.goToSlide(1);
		    return false;
		  });
		  $('#slider2').click(function(){
		    slider.goToSlide(2);
		    return false;
		  });
		  $('#slider3').click(function(){
		    slider.goToSlide(3);
		    return false;
		  });
		  $('#slider4').click(function(){
		    slider.goToSlide(4);
		    return false;
		  });
		  $('#slider5').click(function(){
		    slider.goToSlide(5);
		    return false;
		  });
		  $('#slider6').click(function(){
		    slider.goToSlide(6);
		    return false;
		  });
		  $('#slider7').click(function(){
		    slider.goToSlide(7);
		    return false;
		  });
		  $('#slider8').click(function(){
		    slider.goToSlide(8);
		    return false;
		  });
		  $('#slider9').click(function(){
		    slider.goToSlide(9);
		    return false;
		  });
		  $('#slider10').click(function(){
		    slider.goToSlide(10);
		    return false;
		  });
		  $('#slider11').click(function(){
		    slider.goToSlide(11);
		    return false;
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