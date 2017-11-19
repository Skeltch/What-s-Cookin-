var map
function init() {
	var styledMapType = new google.maps.StyledMapType(
		[
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#1d2c4d"
			  }
			]
		  },
		  {
			"elementType": "labels",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#8ec3b9"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#1a3646"
			  }
			]
		  },
		  {
			"featureType": "administrative.country",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#4b6878"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#64779e"
			  }
			]
		  },
		  {
			"featureType": "administrative.neighborhood",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.province",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#4b6878"
			  }
			]
		  },
		  {
			"featureType": "landscape.man_made",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#334e87"
			  }
			]
		  },
		  {
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#023e58"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#283d6a"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#6f9ba5"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#1d2c4d"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#023e58"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#3C7680"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#304a7d"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#98a5be"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#1d2c4d"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#2c6675"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#255763"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#b0d5ce"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#023e58"
			  }
			]
		  },
		  {
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#98a5be"
			  }
			]
		  },
		  {
			"featureType": "transit",
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#1d2c4d"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#283d6a"
			  }
			]
		  },
		  {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#3a4762"
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
				"color": "#4e6d70"
			  }
			]
		  }
		],
		{name: 'Styled Map'});
	var myLatlng = new google.maps.LatLng(40.39, -74.434);
	var myOptions = {
	  zoom: 13,
	  center: myLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map'), myOptions);
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
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
	marker.bindTo('map', mapLabel);
	marker.bindTo('position', mapLabel);
}
google.maps.event.addDomListener(window, 'load', init);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-12846745-20']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var options=["Fast","Spicy","Salty","Sweet","Sour","Great Value", "Vegetarian", "Peanut Free", "WiFi",
			"Accommodating", "Good Ambiance", "Parking", "Kid Friendly", "Pets allowed"];
var tagSelector = document.getElementById("tagSelector");
for (var i=0; i<options.length; i++){
	var opt = document.createElement("option");
	opt.value=options[i];
	opt.innerHTML=options[i];
	tagSelector.appendChild(opt);
}

function openTab(tabName){
	var i;
	var x=document.getElementsByClassName("tabBody");
	for( i=0; i<x.length; i++){
		x[i].style.display="none";
	}
	document.getElementById(tabName).style.display="block";
}

var slider = document.getElementById("mileRange");
var miles = document.getElementById("miles");
slider.oninput = function(){
	miles.innerHTML=this.value;
}

var address = document.getElementById("searchBar");
var resultsTable = document.getElementById("searchResults");
var i=1;
function search(){
	console.log(address.value);
	console.log(slider.value);
	var row = resultsTable.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	cell1.innerHTML="Name"+i;
	cell2.innerHTML="Price"+i;
	cell3.innerHTML="Rating"+i;
	cell1.className="clickableCell";
	cell1.addEventListener('click', function(){
		addMarker();
	});
	i++;
}

function sort(n){
  var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = resultsTable.getElementsByTagName("TR");
    /* Loop through all resultsTable rows (except the
    first, which contains resultsTable headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

//function addMarker(lat, lng, text){
function addMarker(){
	var myLatlng = new google.maps.LatLng(40.40, -74.434);
	marker = new google.maps.Marker({
		position: myLatlng,
		map: map 
	});
	var mapLabel = new MapLabel({
	  text: 'Home',
	  position: myLatlng,
	  map: map,
	  fontSize: 12,
	  align: 'right'
	});
	mapLabel.set('position', myLatlng);
	marker.addListener('click', function(){
		map.setCenter(marker.getPosition());
		//Call with id of the resturant
		getRestaurant();
		
	});
}

function getRestaurant(){
	//Retrieve information from server and input here
	var restaurantName=document.getElementById("restaurantName");
	var ownerName=document.getElementById("ownerName");
	var ratingStars=document.getElementsByClassName("ratingStars");
	restaurantName.innerHTML="Changed";
	ownerName.innerHTML="Changed";	
	//Testing the rating
	for( i=0; i<ratingStars.length; i++){
		ratingStars[i].innerHTML="\u2606";
	}
	for( i=0; i<parseInt(3); i++){
		ratingStars[i].innerHTML="\u2605";
	}
	openTab('info');
}
var ratingSubmit;
function rate(amount){
	console.log(amount);
	var ratingStars=document.getElementsByClassName("ratingStars");
	var reviewStars=document.getElementsByClassName("stars");
	for( i=0; i<reviewStars.length; i++){
		reviewStars[i].innerHTML="\u2606";
	}
	
	for( i=reviewStars.length-1; i>=reviewStars.length-parseInt(amount); i--){
		reviewStars[i].innerHTML="\u2605";
	}
	ratingSubmit=parseInt(amount);
	console.log(ratingSubmit);
}
//src=https://googlemaps.github.io/js-map-label/examples/maplabel.html