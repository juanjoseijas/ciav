/*
scrollUp v1.1.0
Author: Mark Goodyear - http://www.markgoodyear.com
Git: https://github.com/markgoodyear/scrollup

Copyright 2013 Mark Goodyear
Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

Twitter: @markgdyr
*/
!function(e){e.scrollUp=function(o){var t={scrollName:"scrollUp",topDistance:300,topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:"Scroll to top",scrollImg:!1,activeOverlay:!1},i=e.extend({},t,o),a="#"+i.scrollName;e("<a/>",{id:i.scrollName,href:"#top",title:i.scrollText}).appendTo("body"),i.scrollImg||e(a).text(i.scrollText),e(a).css({display:"none",position:"fixed","z-index":"2147483647"}),i.activeOverlay&&(e("body").append("<div id='"+i.scrollName+"-active'></div>"),e(a+"-active").css({position:"absolute",top:i.topDistance+"px",width:"100%","border-top":"1px dotted "+i.activeOverlay,"z-index":"2147483647"})),e(window).scroll(function(){switch(i.animation){case"fade":e(e(window).scrollTop()>i.topDistance?e(a).fadeIn(i.animationInSpeed):e(a).fadeOut(i.animationOutSpeed));break;case"slide":e(e(window).scrollTop()>i.topDistance?e(a).slideDown(i.animationInSpeed):e(a).slideUp(i.animationOutSpeed));break;default:e(e(window).scrollTop()>i.topDistance?e(a).show(0):e(a).hide(0))}}),e(a).click(function(o){e("html, body").animate({scrollTop:0},i.topSpeed),o.preventDefault()})}}(jQuery);