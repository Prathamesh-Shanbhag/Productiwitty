function weatherBalloon(cityID) {
  var key = '53a0e138f08a98a3b4b07c0df28856be';
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?id=' +
      cityID +
      '&appid=' +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weatherBalloon(1275339);

  // "lon": 72.847939,
 // "lat": 19.01441
};
function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);

  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = celcius + '&deg;';
  document.getElementById('location').innerHTML = d.name;
}
