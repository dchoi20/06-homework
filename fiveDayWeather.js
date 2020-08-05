function fiveDayWeather() {
  let cityName = $("#citySearch").val();

  let queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=2fba1101fc9ba3049e9335532cd0c48d";

  // api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={your api key}

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    for (let i = 0; i < 5; i++) {
      $(`<div class="card fiveDayCard">
            <div class="card-body">
            <h5 class="card-title fiveDay">${response.city.name} (${
        response.list[i].dt_txt
      })</h5>
            <h5 class="card-subtitle mb-2 text-muted fiveDay">Temperature: ${(
              (response.list[i].main.temp - 273.15) * 1.8 +
              32
            ).toFixed(2)}</h5>
            <h5 class="card-text fiveDay">Humidity: ${
              response.list[i].main.humidity
            }</h5>
           </div>
      </div>`).appendTo("#fiveDay");
    }
  });
  //   $("#citySearch").val("");
}
$("#cityList").on("click", fiveDayWeather);

// $("#citySearchBtn").on("click", function () {
//   event.preventDefault();
// });
