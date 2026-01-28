const apiKey = "aa953271ebe24b2db6285555230608";
const apiUrl = "https://api.weatherapi.com/v1/current.json?aqi=no";
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
async function checkWeather(city) {
  const response = await fetch(apiUrl + `&key=${apiKey}&q=${city}`);
  if (response.status ==400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
  var data =await response.json();
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
  document.querySelector(".weather-icon").src = data.current.condition.icon;
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block"; 
}
}

