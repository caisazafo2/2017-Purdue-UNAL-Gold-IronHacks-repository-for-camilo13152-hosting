$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();
	})

});


var xmlhttp = new XMLHttpRequest();
var url = "https://api.darksky.net/forecast/915927622053e6e93854ede8d5d3360a/41.8708,-87.6505";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = xmlhttp.responseText;
        var text = myArr;
        var json = JSON.parse(text);
        //alert(JSON.parse(text).coord.lon);    
        document.getElementById("weather").innerHTML = "<center>Today the weather is <em>" + json.currently + "<img src=\"http://openweathermap.org/img/w/"+json.weather[0].icon+".png\"</em></center>";
        } else {
        	document.getElementById("weather").innerHTML = "Actually we can't get the weather from Chicago :("+ + json.currently ;
        }
    };

