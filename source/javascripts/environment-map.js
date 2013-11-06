// Google Maps


var infowindow = null;
    $(document).ready(function () { initialize();  });
    


    function initialize() {

      var hercules = new google.maps.LatLng(43.385833, -8.406389);

      var MY_MAPTYPE_ID = 'custom_style';


        var featureOpts = [
          {
          "featureType": "landscape",
          "elementType": "geometry.stroke",
          "stylers": [
            { "color": "#010000" }
          ]
        },
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
        }
        ];



        

         var mapOptions = {
          zoom: 16,
          center: hercules,
          mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.TERRAIN, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var styledMapOptions = { name: 'Torre de Hércules' };
        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

        setMarkers(map, sites);
        setMarkers2(map, sites2);
        setMarkers3(map, sites3);
        setMarkers4(map, sites4);
        infowindow = new google.maps.InfoWindow({
                content: "loading..."
            });

        var bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
    }

    var sites = [
  
  ['Menhires por la paz', 43.385480, -8.394005, 0, 'Parque escultórico: Menhires por la paz. Manolo Paz'],
  ['Combate entre Hércules y Gerión', 43.383499, -8.404391, 0, 'Parque escultórico: Combate entre Hércules y Gerión. Tim Behrens y Xosé Espona'],
  ['Menhir Pentacefálico', 43.384388, -8.405603, 0, 'Parque escultórico: Menhir Pentacefálico. Ramón Miranda'],
  ['Ártabros', 43.383749, -8.404756, 0, 'Parque escultórico: Ártabros. Arturo Andrade'],
  ['Rosa de los Vientos', 43.386703, -8.407727, 0, 'Parque escultórico: Rosa de los Vientos. Javier Correa'],
  ['Espinoso', 43.387164, -8.408210, 0, 'Parque escultórico: Espinoso, E. Saavedra Chicherri.'],
  ['Los Guardianes', 43.385090, -8.407137, 0, 'Parque escultórico: Los Guardinaes, Soledad Penalta.'],
  ['Ara Solis', 43.385324, -8.406848, 0, 'Parque escultórico: Ara Solis, Silverio Rivas.'],
  ['Hidra de Lerna', 43.385293, -8.405807, 0, 'Parque escultórico: Hidra de Lerna, Fidel Goás Mendes.'],
  ['Breogán', 43.384887, -8.402599, 0, '<img src="http://ciav.s3.amazonaws.com/img/breogan-thumb.jpg"><br>Parque escultórico: Breogán, José Cid.'],
  ['Caronte', 43.384100, -8.402224, 0, 'Parque escultórico: Caronte, Ramón Conde.'],
  ['Caracola', 43.388801, -8.401022, 0, 'Parque escultórico: Caracola, Moncho Amigo.'],
  ['La Copa del Sol', 43.387499, -8.398029, 0, 'Parque escultórico: La Copa del Sol, Pepe Galán.'],
  ['Hércules en la Nave de los Argonautas', 43.386376, -8.396838, 0, 'Hércules en la Nave de los Argonautas, Gonzalo Viana'],
  ['Guitarra', 43.384326, -8.403844, 0, 'Parque escultórico: Guitarra, Pablo Serrano.'],
  ['Monumento a los Fusilados', 43.384879, -8.393351, 0, 'Parque escultórico: Espinoso.'],
  ['Puertas de Hércules', 43.386228, -8.406408, 0, 'Parque escultórico: Puertas de Hércules, Francisco Leiro'],
  ['Estatua de Carlos III', 43.385745, -8.406140, 0, 'Parque escultórico: Estatua de Carlos III.'],
  ['Estatua de Hércules', 43.386096, -8.406547, 0, 'Parque escultórico: Estatua de Hércules, Francisco Leiro.']
  
];


      var sites2 = [
       ['Torre de Hércules', 43.385971,-8.406483, 0, 'Torre de Hércules'],
       ['Petroglifos de Punta Herminia', 43.38771,-8.398887, 0, 'Petroglifos de Punta Herminia']
       ];


       var sites3 = [
       ['San Amaro', 43.381901,-8.396816, 0, 'San Amaro'],
       ['O Grelle', 43.383881,-8.393619, 0, 'O Grelle'],
       ['Area de Concha', 43.384528,-8.392675, 0, 'Area de Concha'],
       ['O Coido', 43.386174,-8.395904, 0, 'O Coido'],
       ['O Areal', 43.383959,-8.406129, 0, 'O Areal']
       ];

       var sites4 = [
       ['Carmen Vilariño', 43.387834,-8.395078, 0, 'Carmen Vilariño'],
       ['Iris', 43.392918,-8.412223, 0, 'Iris'],
       ['Gondiez 1', 43.389955,-8.411665, 0, 'Gondiez 1'],
       ['Aegean Sea', 43.388396, -8.407867, 0, '<img src="http://ciav.s3.amazonaws.com/img/egeo-thumb.jpg" ><br>Aegean Sea'],
       ['Isla', 43.388271,-8.412223, 0, 'Isla'],
       ['Juan Puebla', 43.388957,-8.396816, 0, 'Juan Puebla']
       ];



    function setMarkers(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                icon: 'http://ciav.s3.amazonaws.com/icon/orange_MarkerA.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }


    function setMarkers2(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                icon: 'http://ciav.s3.amazonaws.com/icon/brown_MarkerB.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }


    function setMarkers3(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                icon: 'http://ciav.s3.amazonaws.com/icon/paleblue_MarkerC.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }


function setMarkers4(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                icon: 'http://ciav.s3.amazonaws.com/icon/red_MarkerD.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }





