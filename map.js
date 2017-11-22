//Load map
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
var tagSelector = $("#tagSelector");
var tagFilter = $("#tagFilter");
for (var i=0; i<options.length; i++){
	var opt = $("<option value="+options[i]+">"+options[i]+"</option>");
	//opt.value=options[i];
	//opt.innerHTML=options[i];
	tagFilter.append(opt);
	tagSelector.append(opt.clone());
}

//Change tabs
function openTab(tabName){
	var i;
	var x=$(".tabBody");
	for( i=0; i<x.length; i++){
		x[i].style.display="none";
	}
	document.getElementById(tabName).style.display="block";
}

//Slider value
var slider = document.getElementById("mileRange");
var miles = $("#miles");
slider.oninput = function(){
	miles.html(this.value);
}

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

//Search for restaurants
markers=[]
labels=[]
var address = $("#searchBar");
var priceFilter = $("#priceFilter");
var ratingFilter = $("#ratingFilter");
var tagFilter = $("#tagFilter");
var resultsTable = document.getElementById("searchResults");
var data;
var curRestaurant=1;
function search(){
	for(var i=0; i<markers.length; i++){
		markers[i].setMap(null);
		labels[i].setMap(null);
	}
	markers=[];
	labels=[]
	var rows = resultsTable.childNodes[1];
	while(rows.childNodes.length>2){
		rows.removeChild(rows.lastChild);
	}
	var inputLat, inputLng;
	var client = new HttpClient();
		client.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address.val()+'&key=AIzaSyA0EvWDobuEx-LQR-zaV5Sq-0SdvBo2hCE', function(response){
		console.log(response);
		inputLat = JSON.parse(response).results[0].geometry.location.lat;
		inputLng = JSON.parse(response).results[0].geometry.location.lng;	
		console.log(inputLat);
		console.log(inputLng);
		$.ajax({
			url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/query_for_restaurants.php?lat="+inputLat+"&long="+inputLng+"&radius="+slider.value+"&rating="+ratingFilter.val()+"&price="+priceFilter.val()+"&tag="+tagFilter.val(),
			type: "GET",
			contentType: "application/json",
			dataType: "json",
			success: function(response){
				data = response;
				console.log(response);
				for(var j=0; j<data.length; j++){
					resultsTable.style.display="inline-block";
					var row = resultsTable.insertRow(j+1);
					var cell1 = row.insertCell(0);
					cell1.id=j;
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					cell1.innerHTML=data[j].name;
					cell2.innerHTML=data[j].price;
					cell3.innerHTML=data[j].rating;
					addMarker(data[j].lat, data[j].long, data[j].name, j);
					cell1.className="clickableCell";
					var loc=new google.maps.LatLng(data[j].lat,data[j].lng)
					var restaurantData=data[j]
					cell1.addEventListener('click', function(e){
						curRestaurant=this.id;
						map.setCenter(new google.maps.LatLng(data[this.id].lat, data[this.id].long));
						//Call with id of the resturant
						getRestaurant(this.id);
						//getRestaurant(data[index]);
					});
				}
			},
			error: function(response){
				console.log("ERROR");
				console.log(response.responseText);
			}
		});
	});
}

//Sort the results table
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

function addMarker(lat, lng, label, index){
	var loc = new google.maps.LatLng(lat,lng);
	marker = new google.maps.Marker({
		position: loc,
		map: map 
	});
	var mapLabel = new MapLabel({
	  text: label,
	  //text: 'Home',
	  position: loc,
	  map: map,
	  fontSize: 12,
	  align: 'right'
	});
	mapLabel.set('position', loc);
	marker.addListener('click', function(){
		curRestaurant=this.id;
		map.setCenter(marker.getPosition());
		getRestaurant(data[this.id]);
		
	});
	markers.push(marker);
	labels.push(mapLabel);
	return marker;
}

function searchRestaurant(name){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
	request.onload = function(){
		getRestaurant(JSON.parse(request.responseText));
	};
	request.send();
}

//Load restaurant in info area
function getRestaurant(index){
	//Retrieve information from server and input here
	var restaurantName=$("#restaurantName");
	var ownerName=$("#ownerName");
	var ratingStars=$(".ratingStars");
	restaurantName.html(data[index].name);
	ownerName.html(data[index].id);	
	var dollarText="";
	for(var i=0; i<data[index].price; i++){
		dollarText+="$";
	}
	$("#price").html(dollarText);
	$("#tagsDiv").html('');
	for( i=0; i<data[index].tags.length; i++){
		$("#tagsDiv").append("<span class='tags'>"+data[index].tags[i]+"</span>");
	}
	//Testing the rating
	for( i=0; i<ratingStars.length; i++){
		ratingStars.eq(i).html("\u2606");
	}
	for( i=0; i<parseInt(data[index].rating); i++){
		ratingStars.eq(i).html("\u2605");
	}
	$("#restaurantDescription").html(data[index].desc);
	openTab('info');
}

//Update my restaurant page
var myRestaurantName=$("#myRestaurantName");
var myName=$("#myName");
var myPrice=$("#myPrice");
var myRatingStars=$(".rating");
var myDescription=$("#myDescription");
var myTags=$("#myTags");
function myRestaurant(){
	openTab('myInfo')
	$.ajax({
		//url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/search.php?parameters="+searchJSON,
		url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/query_for_rest_info.php?CUST_ID="+userId,
		type: "GET",
		contentType: "application/json",
		dataType: "json",
		success: function(response){
			myRestaurantName.html(response[0].name);
			myName.html(response[0].id);
			var stars="";
			for(var j=0; j<5; j++){
				if(j<parseInt(response[0].rating)){
					stars+="\u2605";
				}
				else{
					stars+="\u2606";
				}
			}
			var priceString="";
			for(j=0; j<parseInt(response[0].price); j++){
				priceString+="$";
			}
			myRatingStars.html(stars);
			myPrice.html(priceString);
			myDescription.html(response[0].desc);
		},
		error: function(response){
			console.log(response);
		}
	});
}

var userId=1
function setUser(id){
	userId=parseInt(id);
	console.log(userId);
}

//Update edit restaurant page
var editMyRestaurantName=$("#editMyRestaurantName");
var editMyDescription=$("#editMyDescription");
function editRestaurant(){
	openTab('editInfo');
	editMyDescription.val(myDescription.html());
}

function deleteRestaurant(){
	//delete restaurant with userId
	$.ajax({
		url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/delete_user.php?CUST_ID="+userId,
		type: "GET",
		contentType: "application/json",
		dataType: "json",
	});
}

//submit edit
function submitEdit(){
	$.ajax({
		url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/edit_rest_desc.php",
		data: {
			CUST_ID: userId,
			DESC: editMyDescription.val()
		},
		type: "POST"
	});
	console.log(editMyDescription.val());
	openTab('myInfo');
}

//Rating
var ratingSubmit;
function rate(amount){
	var ratingStars=$(".ratingStars");
	var reviewStars=$(".stars");
	for( i=0; i<reviewStars.length; i++){
		reviewStars.eq(i).html("\u2606");
	}
	
	for( i=reviewStars.length-1; i>=reviewStars.length-parseInt(amount); i--){
		reviewStars.eq(i).html("\u2605");
	}
	ratingSubmit=parseInt(amount);
}

//Grab the inputs and submit review
var reviewBody = $("#reviewBody");
function submitReview(){
	$.ajax({
		url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/insert_review.php",
		data: {
			REST_ID: curRestaurant,
			CUST_ID: userId,
			RATING: ratingSubmit,
			PRICE: $("#priceSelector").val(),
			DESCRIPTION: reviewBody.val(),
			TAG: tagSelector.val()
		},
		type: "POST",
		success: function(response){
			console.log(response);
		}
	});
}

var myTransactions = document.getElementById("myTransactionsTable");
function loadTransactions(){
	var rows = myTransactions.childNodes[1];
	while(rows.childNodes.length>2){
		rows.removeChild(rows.lastChild);
	}
	openTab('myTransactions')
	$.ajax({
			url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/query_for_transactions.php?CUST_ID="+userId,
			type: "GET",
			contentType: "application/json",
			dataType: "json",
			success: function(response){
				var transactions = response;
				for(var i=0; i<transactions.length; i++){
					var row = myTransactions.insertRow(i+1);
					var cell1 = row.insertCell(0);
					var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
					var cell4 = row.insertCell(3);

					cell1.innerHTML=transactions[i].cust_id;
					cell2.innerHTML=transactions[i].rest_name;
					cell3.innerHTML=transactions[i].date;
					cell4.innerHTML=transactions[i].price;
				}
			},
			error: function(response){
				console.log(response);
			}
	});

}

function openReviews(){
	$("#reviewDiv").html('');
	$.ajax({
			url: "http://ec2-184-73-12-172.compute-1.amazonaws.com/query_for_reviews.php?REST_ID="+curRestaurant,
			type: "GET",
			contentType: "application/json",
			dataType: "text",
			success: function(response){
				console.log(response);
				openTab('reviews');
				var reviewDiv = $("#reviewDiv");
				var reviewData = JSON.parse(response);
				for(var i=0; i<reviewData.length; i++){
					var stars="";
					for(var j=0; j<5; j++){
						if(j<parseInt(reviewData[i].rating)){
							stars+="\u2605";
						}
						else{
							stars+="\u2606";
						}
					}
					var priceString="";
					for(j=0; j<parseInt(reviewData[i].price); j++){
						priceString+="$";
					}
					var name="Name";
					reviewDiv.append("<h4>"+reviewData[i].cust_id+"</h4>");
					reviewDiv.append("<div">priceString+"</div>");
					reviewDiv.append("<div>"+stars+"</div>");
					reviewDiv.append("<div class=\"tags\">"+reviewData[i].tag+"</div>");
					reviewDiv.append("<div>"+reviewData[i].description+"</div>");
				}
			},
			error: function(response){
				console.log(response);
			}	
	});
}

//src=https://googlemaps.github.io/js-map-label/examples/maplabel.html