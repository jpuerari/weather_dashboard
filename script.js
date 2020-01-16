//List Variables



var appid = "f441cfb77f1af8db9f72b34e1d10a300"
var city = "Amsterdam"
//var queryURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${appid}`


var now = moment().format('M/D/YYYY');

function citySearch(city){

    $("#amsterdam").empty();
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appid}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    
        //Current City <Div>
        
        var city = $("<p>").text("City: " + response.name);
    
        $("#currentTime").text(now);
        var iconCode = response.weather[0].icon;
    
        var icon = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + iconCode + "@2x.png");

        var tempF = (response.main.temp - 273.15) * 9/5 + 32;
    
        var temperature = $("<p>").text("Temperature: " + Math.round(tempF) + "˚F");
        var humidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
        var windSpeed = $("<p>").text("Wind speed: " + response.wind.speed + " MPH");
        $("#amsterdam").prepend(city, now, temperature, humidity, windSpeed, icon);
    });

    var citiesList = localStorage.getItem("citiesList");
    console.log(citiesList)
    if(citiesList === null){
        var array = [city];
        localStorage.setItem("citiesList", JSON.stringify(array))
    } else {
        //json.parse the citiesList variable
        //push the new city to that array
        //localstorage .set with the new array (stringified)
    }
}


    // Five Day Forecast <Div>
    //var fiveDayForecast = $("<p>").text("Five Day Forecast: " + );

    //forecastDisplay("Forecast");

    


    


    //Search Bar Functions
    



    //Other Cities

    function makeButtons() {

        var otherCities = ["Madrid", "Rome", "Berlin", "Helsinki"];

        var citiesList = localStorage.getItem("citiesList");
        console.log(citiesList)
        if(citiesList === null){
            
        } else {
            console.log(citiesList)
            otherCities = JSON.parse(citiesList)
        }


        for (var i = 0; i < otherCities.length; i++) {

            console.log("otherCities")
            var a = $("<button>");
            a.addClass("cityButton");
    
            a.attr("data-name", otherCities[i]);
    
            a.text(otherCities[i]);
    
            $("#otherCities").append(a);
        }


    }   

    $(document).on("click", ".cityButton", function(){
        var city = $(this).text()
        citySearch(city)
    })

    makeButtons();

    $("#searchButton").on("click", function(event) {
        event.preventDefault();

        //grabs the input from the textbox
        var cityInput = $("#searchBox").val().trim();

        //add the cities from the textbox to the array
        //otherCities.push(movie);
        //console.log(otherCities);

        //calling render buttons which handles the processing of our cities array
        citySearch(cityInput);
    });

    // }

    
