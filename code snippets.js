var style_shortHover={weight: 4,
				smoothFactor: 3.0};
var style_longHover={color: "#FF0000",
				dashArray: 6,
				lineCap: 'butt',
				weight: 2,
				smoothFactor: 3.0};
var style_shortPerma={weight: 6,
				smoothFactor: 3.0};
var style_longPerma={color: "#FF0000",
				dashArray: 6,
				lineCap: 'butt',
				weight: 3,
				smoothFactor: 3.0};


var	WestcliffeShort = omnivore.gpx('GPX/Westcliffe.gpx');
	WestcliffeShort.on('ready', function() {
        	this.setStyle([style_short, opacity: 0]);
   		 });
	WestcliffeShort.addTo(map);


var BishopsCastleLong =omnivore.gpx('GPX/BishopsCastle_long.gpx');
		BishopsCastleLong.on('ready', function() {
        		this.setStyle([style_long, opacity: 0]);
   			 });
	BishopsCastleLong.addTo(map);
var BishopsCastleShort = omnivore.gpx('GPX/BishopsCastle.gpx');
	BishopsCastleShort.on('ready', function() 
        	this.setStyle([style_short, opacity: 0]);
   		 });
	BishopsCastleShort.addTo(map);
   				 
var FortGarlandLong =omnivore.gpx('GPX/FortGarland_long.gpx');
	FortGarlandLong.on('ready', function() {
        	this.setStyle([style_long, opacity: 0]);
   		 });
	FortGarlandLong.addTo(map);
var FortGarlandShort = omnivore.gpx('GPX/FortGarland.gpx');
	FortGarlandShort.on('ready', function() {
        	this.setStyle([style_short, opacity: 0]);
   		 });
	FortGarlandShort.addTo(map);







var WestcliffeMarker = L.marker([38.1359, -105.4638],{icon: iconWestcliffe}).addTo(map);
WestcliffeMarker.on('mouseover', function(e) {
	WestcliffeShort.setStyle(opacity: 0.6)
	});
WestcliffeMarker.on('mouseout', function(e) {
	WestcliffeShort.setStyle(opacity: 0)
	});
WestcliffeMarker.on('click', function(e) {
	permaRoute();
});


var BishopsMarker = L.marker([38.0608, -105.0940], {icon: iconBishopsCastle}).addTo(map);
BishopsMarker.on('mouseover', function(e) {
	BishopsCastleShort.setStyle(opacity: 0.6);
	BishopsCastleLong.setStyle(opacity: 0.6)
});
BishopsMarker.on('mouseout', function(e) {
	BishopsCastleShort.setStyle(opacity: 0);
	BishopsCastleLong.setStyle(opacity: 0)
};
BishopsMarker.on('click', function(e) {
	permaRoute();
});


var FortGarlandMarker = L.marker([37.4272, -105.4312], {icon: iconFortGarland}).addTo(map);
FortGarlandMarker.on('mouseover', function(e) {
	FortGarlandShort.setStyle(opacity: 0.6);
	FortGarlandLong.setStyle(opacity: 0.6)
});
FortGarlandMarker.on('mouseout', function(e) {
	FortGarlandShort.setStyle(opacity: 0);
	FortGarlandLong.setStyle(opacity: 0)
});
FortGarlandMarker.on('click', function(e) {
	permaRoute();
});

	
