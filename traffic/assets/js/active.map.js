
 (function ($) {
  "use strict";
   var anemy = [24.3687178 ,88.6381025];
  $('#googleMap')
      .gmap3({
          center:anemy,
          zoom:15,
          scrollwheel: false,
          mapTypeId: "proton", 
          mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "proton"]
        }
      })
        .marker({
            position: anemy,
            icon: 'http://maps.google.com/mapfiles/marker_green.png'
        })
      .styledmaptype(
        "proton",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#999999"},{"lightness":30}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fff"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#fff"},{"lightness":19},{"weight":0.3}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":16}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":10},{"weight":1}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#F2F2F2"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":21}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#28AE5F"},{"lightness":9}]}

        ],
        {name: "proton"}
      );

}(jQuery)); 