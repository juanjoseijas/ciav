// Google Maps


//var infowindow = null;
    $(document).ready(function () { initialize();  });

function initialize() {

var sources = [  

['Marker 11', 43.386195, -8.406510, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse-2.png','','<div>Torre de Hércules<div>']





];

var hercules = new google.maps.LatLng(43.385833, -8.406389);
var MY_MAPTYPE_ID = 'custom_style';

var featureOpts = [
          
        {
          "featureType": "landscape.man_made",
          "stylers": [
            { "visibility": "off" }
          ]
        },
          {
          "featureType": "landscape.natural",
          "stylers": [
            
            { "color": "#E2E0DC" }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
           
            { "color": "#F8F7F6" }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "poi",
          "stylers": [
            { "visibility": "off" }
          ]
        },
        {
            "featureType": "administrative",
            "stylers": [
            { "visibility": "off" }
            ]
        }
        ];



var lines = [];

   
    

          
// Creating an object literal containing the properties we want to pass to the map 
          var mapOptions = {
          zoom: 5,
          center: hercules,
          mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.TERRAIN, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
        };   
          
          
// Calling the constructor, thereby initializing the map  
          var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          var styledMapOptions = { name: 'Torre de Hércules' };
          var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
          map.mapTypes.set(MY_MAPTYPE_ID, customMapType); 
















    var markers = [];         

    var i, newMarker;

   

infowindow = new google.maps.InfoWindow();
    

    for (i = 0; i < sources.length; i++) {      
      newMarker = new google.maps.Marker({        
        position: new google.maps.LatLng(sources[i][1], sources[i][2]),        
        map: map,  
        shadow: sources[i][5],         
        icon: sources[i][4],
        info: sources[i][6],
        title: sources[i][0],
                clickable: true    
              
      });      

      newMarker.category = sources[i][3];      
      newMarker.setVisible(true);       
      
      markers.push(newMarker);  

        google.maps.event.addListener(newMarker, 'click', function() {     
        infowindow.setContent(this.info);    
        infowindow.open(map,this);   

       });
      
    }  


function displayMarkers(category) {      
      
    var i;       

      for (i = 0; i < sources.length; i++) {        
        if (markers[i].category === category) { 
            if (markers[i].visible === true){
               markers[i].setVisible(false); }
            else {
               markers[i].setVisible(true);}         
                   
        }        
      }    
    }



   }