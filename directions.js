var style_short={
	weight: 4,
	smoothFactor: 3.0,
	opacity: 0
};
var style_long={
	color: "#FF0000",
	dashArray: 6,
	lineCap: 'butt',
	weight: 2,
	smoothFactor: 3.0,
	opacity: 0
};
var style_shortPerma={
	weight: 6,
	opacity: 1
};
var style_longPerma={
		weight: 3,
		opacity: 1
};
var style_Hover={
	opacity: 0.5
};
var style_invisible={
	opacity: 0
}

var map = L.map('mapid').setView([37.85, -105.18], 9);
L.tileLayer( 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>| <a href="http://www.openstreetmap.org/welcome">Improve map</a>'
}).addTo(map);

function mobilecheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
if (!mobilecheck()){
var MWContact = ("<b>Phone: </b> (719)-859-2157" +
					"</br> <b>Email: </b>" + '<a href="mailto:info@missionwolf.org">info@missionwolf.org</a>');
}else{
var MWContact = ("<b>Phone: </b>" + '<a href="tel:1-719-859-2157">(719)-859-2157</a>' +
					"</br> <b>Email: </b>" + '<a href="mailto:info@missionwolf.org">info@missionwolf.org</a>');
};

var LocationMarker;
var LocationCircle;

var	WestcliffeRoute = omnivore.gpx('GPX/Westcliffe.gpx')
		.on('ready', function() {
        	this.setStyle(style_short);
   		 })
		.addTo(map);


var BishopCastleLong =omnivore.gpx('GPX/BishopCastle_long.gpx')
		.on('ready', function() {
        		this.setStyle(style_long);
   			 });
var BishopCastleShort = omnivore.gpx('GPX/BishopCastle.gpx')
		.on('ready', function(){
        	this.setStyle(style_short);
   		 });
var BishopCastleRoute=L.featureGroup([BishopCastleShort, BishopCastleLong]).addTo(map);

var FortGarlandLong =omnivore.gpx('GPX/FortGarland_long.gpx')
		.on('ready', function() {
        	this.setStyle(style_long);
   		 });
var FortGarlandShort = omnivore.gpx('GPX/FortGarland.gpx')
		.on('ready', function() {
        	this.setStyle(style_short);
   		 });
var FortGarlandRoute=L.featureGroup([FortGarlandShort, FortGarlandLong]).addTo(map);

mouseout_Westcliffe= function(){
		WestcliffeRoute.setStyle(style_invisible);
}
mouseout_BishopCastle= function(){
		BishopCastleRoute.setStyle(style_invisible);
}
mouseout_FortGarland= function(){
		FortGarlandRoute.setStyle(style_invisible);
}


var iconWestcliffe = L.icon({
    iconUrl: 'Westcliffe.svg',
    shadowUrl: 'WestcliffeShadow.svg',

    iconSize:     [66, 80], // size of the icon
    shadowSize:   [50, 30], // size of the shadow
    iconAnchor:   [33, 61], // point of the icon which will correspond to marker's location
    shadowAnchor: [14, 25],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var iconFortGarland = L.icon({
    iconUrl: 'FortGarland.svg',
    shadowUrl: 'FortGarlandShadow.svg',

    iconSize:     [50, 60], // size of the icon
    shadowSize:   [50, 20], // size of the shadow
    iconAnchor:   [23, 60], // point of the icon which will correspond to marker's location
    shadowAnchor: [6, 20],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var iconBishopCastle = L.icon({
    iconUrl: 'BishopCastle.svg',
    shadowUrl: 'FortGarlandShadow.svg',

    iconSize:     [50, 60], // size of the icon
    shadowSize:   [50, 20], // size of the shadow
    iconAnchor:   [23, 60], // point of the icon which will correspond to marker's location
    shadowAnchor: [6, 20],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var iconLogo = L.icon({
    iconUrl: 'LOGO.png',
    shadowUrl: 'LOGO_shadow.png',

    iconSize:     [55, 70], // size of the icon
    shadowSize:   [45, 25], // size of the shadow
    iconAnchor:   [25, 72], // point of the icon which will correspond to marker's location
    shadowAnchor: [-1, 26],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var iconLocation = L.icon({
   	iconUrl: 'dot.svg',
    	iconSize:     [12], // size of the icon
	iconAnchor:   [6,6]
    });

var MWMarker = L.marker([37.963, -105.215], {icon: iconLogo}).addTo(map);
MWMarker.bindPopup(MWContact);

var WestcliffeMarker = L.marker([38.1359, -105.4638],{icon: iconWestcliffe}).addTo(map);
WestcliffeMarker.on('mouseover', function(e) {
	WestcliffeRoute.setStyle(style_Hover);
	});
WestcliffeMarker.on('mouseout', mouseout_Westcliffe);
WestcliffeMarker.on('click', function(e) {
	WestcliffeRoute.setStyle(style_shortPerma);
	BishopCastleShort.setStyle(style_short);
	BishopCastleLong.setStyle(style_long);
	FortGarlandShort.setStyle(style_short);
	FortGarlandLong.setStyle(style_long);
	WestcliffeMarker.off('mouseout');
	BishopMarker.on('mouseout', mouseout_BishopCastle);
	FortGarlandMarker.on('mouseout', mouseout_FortGarland);
});
$("#WestcliffeText").hover(function(){
	WestcliffeRoute.setStyle(style_Hover)},
	mouseout_Westcliffe
	);
//$("#WestcliffeText").hover(alert("woop"));
	//WestcliffeRoute.setStyle(style_Hover),
	//mouseout_Westcliffe

var BishopMarker = L.marker([38.0608, -105.0940], {icon: iconBishopCastle}).addTo(map);
BishopMarker.on('mouseover', function(e) {
	BishopCastleRoute.setStyle(style_Hover);
})
BishopMarker.on('mouseout', mouseout_BishopCastle);
BishopMarker.on('click', function(e) {
	BishopCastleShort.setStyle(style_shortPerma);
	BishopCastleLong.setStyle(style_longPerma);
	WestcliffeRoute.setStyle(style_short);
	FortGarlandShort.setStyle(style_short);
	FortGarlandLong.setStyle(style_long);
	BishopMarker.off('mouseout');
	WestcliffeMarker.on('mouseout', mouseout_Westcliffe);
	FortGarlandMarker.on('mouseout', mouseout_FortGarland);
});


var FortGarlandMarker = L.marker([37.4272, -105.4312], {icon: iconFortGarland}).addTo(map);
FortGarlandMarker.on('mouseover', function(e) {
	FortGarlandRoute.setStyle(style_Hover);
});
FortGarlandMarker.on('mouseout', mouseout_FortGarland);
FortGarlandMarker.on('click', function(e) {
	FortGarlandShort.setStyle(style_shortPerma);
	FortGarlandLong.setStyle(style_longPerma);
	WestcliffeRoute.setStyle(style_short);
	BishopCastleShort.setStyle(style_short);
	BishopCastleLong.setStyle(style_long);
	FortGarlandMarker.off('mouseout');
	WestcliffeMarker.on('mouseout');
	BishopMarker.on('mouseout', mouseout_BishopCastle);
});

function onLocationFound(e) {
			var radius = e.accuracy / 2;
			if (typeof(LocationMarker)==="undefined"){
				LocationMarker= new L.marker(e.latlng, {icon: iconLocation} ).addTo(map);
				LocationCircle= new L.circle(e.latlng, radius).addTo(map);
				map.setView(e.latlng, 11)
			} else {
				LocationMarker.setLatLng(e.latlng);
				LocationCircle.setLatLng(e.latlng).setRadius(radius);
				}
		}
function onLocationError(e) {
			alert(e.message);
		}

		map.on('locationfound', onLocationFound);
		map.on('locationerror', onLocationError);

function locButton(){
		    var elem = document.getElementById("geolocate");
		    if (elem.text=="Locate me"){
		        map.locate({watch:true, enableHighAccuracy:true, setView:true})
		        elem.text = "Cancle";
		    } else {
					elem.text = "Locate me";
					map.stopLocate()
				}
			}
