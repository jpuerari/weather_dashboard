var appid = "f441cfb77f1af8db9f72b34e1d10a300"
var city = "Berlin"
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appid}`
//var queryURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${appid}`


var now = moment().format('M/D/YYYY');

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    
    var pOne = $("<p>").text("City: " + response.name);

    $("#currentTime").text(now);

    var pTwo = $("<p>").text("Temperature: " + response.main.temp);

    var pThree = $("<p>").text("Humidity: " + response.main.humidity);
    var pFour = $("<p>").text("Wind speed: " + response.wind.speed);
    $("#changeThisLater").append(pOne, now, pTwo, pThree, pFour);
})