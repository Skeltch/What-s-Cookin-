var HttpClient = function() {
    this.get = function(url, aCallback) {
        var request = new XMLHttpRequest();
		request.open("GET",url,true);
		request.setRequestHeader("Access-Control-Allow-Origin","http://localhost:8082");
		request.setRequestHeader('Access-Control-Allow-Credentials', 'true');
		//request.withCredentials = false;
        request.onreadystatechange = function() { 
            if (request.readyState == 4 && request.status == 200)
                aCallback(request.responseText);
        }

        request.open( "GET", url, true );            
        request.send( null );
    }
}
/*
var client = new HttpClient();
client.get('https://maps.googleapis.com/maps/api/geocode/json?address=57%20berkshire%20way&key=AIzaSyA0EvWDobuEx-LQR-zaV5Sq-0SdvBo2hCE', function(response){
	console.log(response);
	//$('#json').append("<p>"+response+"</p>");
});
*/
/*
function addMarker(){
	var myLatlng = new google.maps.LatLng(40.40, -74.434);
	var mapLabel = new MapLabel({
          text: 'Home',
          position: myLatlng,
          map: map,
          fontSize: 12,
          align: 'right'
	});
	mapLabel.set('position', myLatlng);
	var marker = new google.maps.Marker();
	marker.addListener('click', function(){
		map.setCenter(marker.getPosition());
	});
	marker.bindTo('map', mapLabel);
	marker.bindTo('position', mapLabel);
}
*/