var cityInput = document.getElementById("cityInput");
var searchButton = document.getElementById("searchButton");
var weatherResult = document.getElementById("weatherResult");
var cityName = document.getElementById("cityName");
var temperature = document.getElementById("temperature");
var condition = document.getElementById("condition");
var errorMessage = document.getElementById("errorMessage");

var apiKey = "9a8cfcdd4de7b45c273634129ecb87a5";

function getWeather() {
    var city = cityInput.value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    weatherResult.classList.add("hidden");
    errorMessage.classList.add("hidden");

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city + "&appid=" + apiKey + "&units=metric";

    fetch(apiUrl)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(function(data) {
            cityName.innerText = data.name;
            temperature.innerText = data.main.temp;
            condition.innerText = data.weather[0].main;

            weatherResult.classList.remove("hidden");
        })
        .catch(function(error) {
            errorMessage.innerText = error.message;
            errorMessage.classList.remove("hidden");
        });
}

searchButton.addEventListener("click", getWeather);