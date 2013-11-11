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
  
  ['Menhires por la paz', 43.385480, -8.394005, 0, '<img src="http://ciav.s3.amazonaws.com/img/1-manolopaz.jpg" alt="" class="pin" /><br><strong>Menhires por la paz.</strong><br>Manolo Paz'],
  ['Combate entre Hércules y Gerión', 43.383499, -8.404391, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/2-timbehrensxoseespona.jpg" alt="" /><br><strong>Combate entre Hércules y Gerión.</strong><br>Tim Behrens y Xosé Espona'],
  ['Menhir Pentacefálico', 43.384388, -8.405603, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/3-ramonmiranda.jpg" alt="" /><br><strong>Menhir Pentacefálico.</strong><br>Ramón Miranda'],
  ['Ártabros', 43.383749, -8.404756, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/4-arturoandrade.jpg" alt="" /><br><strong>Ártabros.</strong>br>Arturo Andrade'],
  ['Rosa de los Vientos', 43.386703, -8.407727, 0, '<img src="http://ciav.s3.amazonaws.com/img/5-javiercorrea.jpg" alt="" class="pin" /><br><strong>Rosa de los Vientos.</strong><br>Javier Correa'],
  ['Espinoso', 43.387164, -8.408210, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/6-chicherri.jpg" alt="" /><br><strong>Espinoso.</strong><br>E. Saavedra Chicherri.'],
  ['Los Guardianes', 43.385090, -8.407137, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/7-soledadpenalta.jpg" alt="" /><br><strong>Los Guardianes.</strong><br>Soledad Penalta.'],
  ['Ara Solis', 43.385324, -8.406848, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/8-silveriorivas.jpg" alt="" /><br><strong>Ara Solis.</strong><br>Silverio Rivas.'],
  ['Hidra de Lerna', 43.385293, -8.405807, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/9-fidelgoas.jpg" alt="" /><br><strong>Hidra de Lerna.</strong><br>Fidel Goás Mendes.'],
  ['Breogán', 43.384887, -8.402599, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/breogan-thumb.jpg"><br><strong>Breogán.</strong><br>José Cid.'],
  ['Caronte', 43.384100, -8.402224, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/11-ramonconde.jpg" alt="" /><br><strong>Caronte.</strong><br>Ramón Conde.'],
  ['Caracola', 43.388801, -8.401022, 0, '<img src="http://ciav.s3.amazonaws.com/img/12-monchoamigo.jpg" alt="" class="pin" /><br><strong>Caracola.</strong><br>Moncho Amigo.'],
  ['La Copa del Sol', 43.387499, -8.398029, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/13-pepegalan.jpg" alt="" /><br><strong>La Copa del Sol.</strong><br>Pepe Galán.'],
  ['Hércules en la Nave de los Argonautas', 43.386376, -8.396838, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/14-gonzaloviana.jpg" alt="" /><br><strong>Hércules en la Nave de los Argonautas.</strong><br>Gonzalo Viana'],
  ['Guitarra', 43.384326, -8.403844, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/15-pabloserrano.jpg" alt="" /><br><strong>Guitarra.</strong><br>Pablo Serrano.'],
  ['Monumento a los Fusilados', 43.384879, -8.393351, 0, '<img src="http://ciav.s3.amazonaws.com/img/16-diazpardo.jpg" alt="" class="pin" /><br><strong>Monumento a los Fusilados.</strong><br>Isaac Díaz Pardo'],
  ['Puertas de Hércules', 43.386228, -8.406408, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/17B-franciscoleiro.JPG" alt="" /><br><strong>Puertas de Hércules.</strong><br>Francisco Leiro'],
  ['Estatua de Carlos III', 43.385745, -8.406140, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/18-carlosiii.jpg" alt="" /><br><strong>Estatua de Carlos III</strong>'],
  ['Estatua de Hércules', 43.386096, -8.406547, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/19-franciscoleiro.jpg" alt="" /><br><strong>Estatua de Hércules.</strong><br>Francisco Leiro.']
  
];


      var sites2 = [
       ['Torre de Hércules', 43.385971,-8.406483, 0, '<img src="http://ciav.s3.amazonaws.com/img/20-torre.jpg" alt="" class="pin" /><br>Torre de Hércules'],
       ['Petroglifos de Punta Herminia', 43.38771,-8.398887, 0, '<img src="http://ciav.s3.amazonaws.com/img/21-petroglifos.jpg" alt="" class="pin" /><br>Petroglifos de Punta Herminia']
       ];


       var sites3 = [
       ['San Amaro', 43.381901,-8.396816, 0, 'San Amaro'],
       ['O Grelle', 43.383881,-8.393619, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/23-adormideras.jpg" alt="" /><br>O Grelle'],
       ['Area de Concha', 43.384528,-8.392675, 0, 'Area de Concha'],
       ['O Coido', 43.386174,-8.395904, 0, 'O Coido'],
       ['O Areal', 43.383959,-8.406129, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/26-aslapas.jpg" alt="" /><br>O Areal']
       ];

       var sites4 = [
       ['Carmen Vilariño', 43.387834,-8.395078, 0, 'Carmen Vilariño'],
       ['Iris', 43.392918,-8.412223, 0, 'Iris'],
       ['Gondiez 1', 43.389955,-8.411665, 0, 'Gondiez 1'],
       ['Aegean Sea', 43.388396, -8.407867, 0, '<img class="pin" src="http://ciav.s3.amazonaws.com/img/egeo-thumb.jpg" ><br>Aegean Sea'],
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
                icon: 'http://ciav.s3.amazonaws.com/icon/statue-2.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "Statue";

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
                icon: 'http://ciav.s3.amazonaws.com/icon/petroglyphs.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "petroglyphs";

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
                icon: 'http://ciav.s3.amazonaws.com/icon/beach.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "Beach";

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
                icon: 'http://ciav.s3.amazonaws.com/icon/shipwreck-2.png',
                title: sites[0],
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "shipwreck";

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }





