// on page load show map
window.onload = function() {
	initMap();
};

// init map
var myMap;

var stations = [
	{
		name: 'Landingsplek A',
		location: {lat: 28.651172,lng: -80.687335}
	}, 	{
		name: 'Landingsplek B',
		location: {lat: 28.422798,lng: -80.676603}
	},  {
		name: 'Kennedy Space Center, Cape Canaveral, Florida',
		location: {lat: 28.590303, lng: -80.659333}
	}
];

function initMap() {
	// set style for the map https://mapstyle.withgoogle.com/
	var myStyles =[
  	{
    	"elementType": "geometry",
    	"stylers": [
      	{
        	"color": "#17223d"
      	}
    	]
  	},
  	{
    	"elementType": "geometry.fill",
    	"stylers": [
      	{
        	"color": "#182c42"
      	}
    	]
  	},
  	{
    	"elementType": "labels.text.fill",
    	"stylers": [
      	{
        	"color": "#E9F6FF"
      	}
    	]	
  	},
  	{
    	"elementType": "labels.text.stroke",
    	"stylers": [
      	{
        	"color": "#002846"
      	}
    	]
  	},
  	{
    	"featureType": "administrative.country",
    	"elementType": "geometry.stroke",
    	"stylers": [
      	{
        	"color": "#867dc7"
      	}
    	]
  	},
  	{
    	"featureType": "administrative.province",
    	"elementType": "geometry.stroke",
    	"stylers": [
      	{
        	"color": "#aaa4e0"
      	}
    	]
  	},
  	{
    	"featureType": "landscape.natural",
    	"elementType": "geometry",
    	"stylers": [
      	{
        	"color": "#213a5c"
      	}
    	]
  	},
  	{
    	"featureType": "poi",
    	"elementType": "geometry",
    	"stylers": [
      	{
        	"color": "#2a5681"
      	}
    	]
  	},
  	{
    	"featureType": "poi",
    	"elementType": "labels.text.fill",
    	"stylers": [
      	{
        	"color": "#E9F6FF"
      	}
    	]
  	},
  	{
    	"featureType": "poi",
    	"elementType": "labels.text.stroke",
    	"stylers": [
      	{
        	"color": "#002846"
      	}
    	]
  	},
  	{
    	"featureType": "poi.park",
    	"elementType": "geometry.fill",
    	"stylers": [
      	{
        	"color": "#1a3b5d"
      	}
    	]
  	},
  	{
    	"featureType": "poi.park",
    	"elementType": "labels.text.fill",
    	"stylers": [
      	{
        	"color": "#E9F6FF"
      	}
    	]
  	},
  	{
    	"featureType": "road",
    	"elementType": "geometry",
    	"stylers": [
      	{
        	"color": "#0a3a71"
      	}
    	]
  	},
  	{
    	"featureType": "road",
    	"elementType": "labels.text.fill",
    	"stylers": [
      	{
        	"color": "#E9F6FF"
      	}
    	]
  	},
  	{
    	"featureType": "road",
    	"elementType": "labels.text.stroke",
    	"stylers": [
      	{
        	"color": "#002846"
      	}
    	]
  	},
  	{
    	"featureType": "road.highway",
    	"elementType": "geometry",
    	"stylers": [
      	{
        	"color": "#8bb8dd"
      	}
    	]
  	},
  	{
    	"featureType": "road.highway",
    	"elementType": "geometry.stroke",
    	"stylers": [
      	{
        	"color": "#002846"
      	}
    	]
  	},
  	{
    	"featureType": "road.highway",
    	"elementType": "labels.text.fill",
    	"stylers": [
      	{
        	"color": "#E9F6FF"
      	}
    	]
  	},
  	{
    	"featureType": "road.highway",
    	"elementType": "labels.text.stroke",
    	"stylers": [
      	{
        	"color": "#002846"
      	}
    	]
  	},
  	{
    	"featureType": "transit",
    	"elementType": "labels.text.fill",
    	"stylers": [
      	{
        	"color": "#E9F6FF"
      	}
    	]
  	},
  	{
    	"featureType": "transit",
    	"elementType": "labels.text.stroke",
    	"stylers": [
      	{
        	"color": "#002846"
      	}
    	]
  	},
  	{
    	"featureType": "transit.line",
    	"elementType": "geometry.fill",
    	"stylers": [
      	{
        	"color": "#3b526a"
      	}
    	]
  	},
  	{
    	"featureType": "transit.station",
    	"elementType": "geometry",
    	"stylers": [
      	{
        	"color": "#365477"
      	}
    	]
  	},
  	{
    	"featureType": "water",
    	"elementType": "geometry",
    	"stylers": [
      	{
        	"color": "#0e1626"
      	}
    	]
  	},
  	{
    	"featureType": "water",
    	"elementType": "labels.text.fill",
    	"stylers": [
      	{
        	"color": "#E9F6FF"
      	}
    	]
  	}
	];

	// set optios for map 
	var mapOptions = {
		center: {
			lat: 28.590303, 
			lng: -80.659333
		},
		zoom: 10,
		clickableIcons: true,
		styles: myStyles
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	for(var i=0; i<stations.length; i++){
		addStation(stations[i]);
	}

}

function addStation(station){
	new google.maps.Marker({
		position: station.location,
		map: myMap,
		title: station.name + ' ' + station.ranking + '/5'
	})
	console.log(station.name + ' added to map');
}