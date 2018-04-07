
// on page load show map
window.onload = function() {
	initMap();
};

// init map
var myMap;

function initMap() {
	// set optios for map 
	var mapOptions = {
		center: {
			lat: 52.067514882683064, 
			lng: -355.6761313835413
		},
		zoom: 17,
		clickableIcons: true,
	};

	// create map and add to page
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}



















		//mapTypeId: 'hybrid'
		//disableDefaultUI: true,
		//rotateControl: false,
		//zoomControl: false,
		//mapTypeControl: false,
		//streetViewControl: false,
		//scaleControl: true,
		//draggable: false,
		//scrollwheel: false,
