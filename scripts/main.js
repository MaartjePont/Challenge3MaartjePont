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
		location: {lat: 28.572976, lng: -80.648973}
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
        "color": "#0f4e4e"
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
        	"color": "#437bba"
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

	// initialize direction variables
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

	// set optios for map 
	var mapOptions = {
		center: {
			lat: 28.577614, 
			lng: -80.639576
		},
		zoom: 8,
		clickableIcons: true,
		styles: myStyles
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	for(var i=0; i<stations.length; i++){
		addStation(stations[i]);
	}

	// set the map for the direction display 
	directionsDisplay.setMap(myMap);
	
	// call function to get the route
	calculateAndDisplayRoute(directionsService, directionsDisplay);

}

function addStation(station){
	new google.maps.Marker({
		position: station.location,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		title: station.name + ' ' + station.ranking + '/5'
	})
	console.log(station.name + ' added to map');
}

// function to get the route
function calculateAndDisplayRoute(directionsService, directionsDisplay) {

	var request = {
		origin: {lat: 28.651172,lng: -80.687335},
		destination: {lat: 28.576945,lng: -80.646769},
		travelMode: 'DRIVING'
	};

  // als je op de button klikt - show route
	directionsService.route(request, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response); // display the route
		} else {
			window.alert('Directions request failed due to ' + status);
		}
  });
}

// Het weer in Florida
function getAPIdata() {

  var url = "http://api.openweathermap.org/data/2.5/weather";
  var apiKey ="910e837151d5d789f03c6c3cc16cddfb";
  var city = "florida";

  // construct request
  var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
  
  // get current weather
  fetch(request)
  
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // render weatherCondition
    onAPISucces(response);  
  })
  
  // catch error
  .catch(function (error) {
    onAPIError(error);
  });
}

function onAPISucces(response) {
  // get type of weather in string format
  var type = response.weather[0].description;

  // get temperature in Celcius
  var degC = Math.floor(response.main.temp - 273.15);

  // render weather in DOM
  var weatherBox = document.getElementById('weather');
  weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}

function onAPIError() {
  console.error('Request failed', error);
  var weatherBox = document.getElementById('weather');
  weatherBox.className = 'hidden'; 
}

// init data stream
document.getElementById("getWeather").onclick = function(){
  getAPIdata();
  if (document.getElementById("weather").style.display == 'block')
  {
  document.getElementById("weather").style.display = 'none';
  } else{
  document.getElementById("weather").style.display = 'block';
  }
};