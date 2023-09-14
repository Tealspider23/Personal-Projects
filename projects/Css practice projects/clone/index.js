const weather = document.getElementById("weather");
//import weather 
let url = "https://api.weatherapi.com/v1/current.json?key=1a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p&q=London&aqi=no"

fetch(url)
.then((response) => response.json())
.then((data) => {weather.textContent = data.current.temp_c});

function clicked(){
    alert("You clicked me!");
}