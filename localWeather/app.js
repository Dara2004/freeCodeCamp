//alert("JS was loaded!");
//document.querySelector("#location").addEventListener("click", alert("Hello!"));

//function weather() {
var link = "http://api.openweathermap.org/data/2.5/weather?";
var appId = "appid=a4c7023945ec2b1685fd31b0d37d1ee2&units=imperial";
var icon;
var weatherId;
var x = document.getElementById("location");
var city;
//test link: http://api.openweathermap.org/data/2.5/weather?lat=49.242953&lon=-123.065162&appid=a4c7023945ec2b1685fd31b0d37d1ee2

function getLocation() { //this is called in html body
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            weatherId = "lat=" + position.coords.latitude.toFixed(6) + "&lon=" + position.coords.longitude.toFixed(6);
            $.getJSON(link + weatherId + "&" + appId, function (data) { //request JSON format of the location's weather
                //        console.log(data.id)
                //alert("Load was performed");
                //        alert(data.coord.lon);
                document.querySelector('#location').innerHTML = data.name + ", " + data.sys.country;
                var degreeC = ((data.main.temp - 32) * 5 / 9).toFixed(1);
                document.querySelector('#temp').innerHTML = degreeC + "&#8451 / " + data.main.temp + "&#8457";
                document.querySelector('#main').innerHTML = data.weather[0].description;
                icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                document.querySelector('#icon').src = icon;
                //http://openweathermap.org/img/w/10d
                //                document.querySelector('.dropdown li').innerHTML = data.name;
            });
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//add cities to dropdown menu:
//function addCity() {
//    var y = document.getElementById("citylist");
//    var li = document.createElement("li"); //create "li" element in html
//    $.getJSON("city.list.json", function (data) {
//        //        for (var i = 0; i < data.length, i++) {
//        console.log(data[i].name);
//        //        }
//        //        alert("city list is loaded");
//
//        //        city = data.name;
//        //        li.text = city;
//        //        y.add(li);
//    });
//}
//addCity();

//function findWeatherId(position) {
//    //"id=6173331"; "lat=49.242953&lon=-123.06516210000001"  
//    //            x.innerHTML = position.coords.latitude + position.coords.longitude;
//}


//to access Open Weather API using lat and lon of a location
//$(document).ready(function () {
//    getLocation(); //run the getLocation function first to get weather Id
//    $.getJSON(link + weatherId + "&" + appId, function (data) { //request JSON format of the location's weather
//        //        console.log(data.id)
//        alert("Load was performed");
//        //        alert(data.coord.lon);
//        document.querySelector('#location').innerHTML = data.name + ", " + data.sys.country;
//        document.querySelector('#temp').innerHTML = data.main.temp;
//        document.querySelector('#main').innerHTML = data.weather[0].main;
//        document.querySelector('#icon').innerHTML = data.weather[0].icon;
//        document.querySelector('.dropdown li').innerHTML = data.name;
//    });
//});

//$('#my_get_related_keywords ').click(function () {
//            getLocation();
//            $.ajax({
//                type: "POST",
//                url: "link" + weatherId + "&" + appId,
//                data: '{"HERE YOU CAN PUT DATA TO PASS AT THE SERVICE"}',
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function (msg) {
//                    //do something
//                },
//                error: function (errormessage) {
//
//                    //do something else
//
//                }
//            });
//        }

//Google API to detect the current location: 



//};
//document.querySelector('#location').addEventListener("click", weather);
//console.log(data);

////{
//    "coord": {
//        "lon": -123.12,
//        "lat": 49.25
//    },
//    "weather": [{"id": 500,
//        "main": "Rain",
//        "description": "light rain",
//        "icon": "10d"
//    }],
//    "base": "stations",
//    "main": {
//        "temp": 285.54,
//        "pressure": 1021,
//        "humidity": 22,
//        "temp_min": 284.15,
//        "temp_max": 291.15
//    },
//    "visibility": 16093,
//    "wind": {
//        "speed": 3.6,
//        "deg": 60
//    },
//    "clouds": {
//        "all": 1
//    },
//    "dt": 1492716900,
//    "sys": {
//        "type": 1,
//        "id": 1112,
//        "message": 0.0638,
//        "country": "CA",
//        "sunrise": 1492693725,
//        "sunset": 1492744468
//    },
//    "id": 6173331,
//    "name": "Vancouver",
//    "cod": 200
//}
