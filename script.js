//List Variables



var appid = "f441cfb77f1af8db9f72b34e1d10a300"
var city = "Amsterdam"
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appid}`
//var queryURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${appid}`


var now = moment().format('M/D/YYYY');

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);

    //Current City <Div>
    
    var city = $("<p>").text("City: " + response.name);

    $("#currentTime").text(now);

    var temperature = $("<p>").text("Temperature: " + response.main.temp);
    var humidity = $("<p>").text("Humidity: " + response.main.humidity);
    var windSpeed = $("<p>").text("Wind speed: " + response.wind.speed);
    $("#amsterdam").prepend(city, now, temperature, humidity, windSpeed);
});

    // Five Day Forecast <Div>


    


    //Search Bar Functions
    



    //Other Cities

    
