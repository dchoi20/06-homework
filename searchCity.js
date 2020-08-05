// let $searchBtn = $("#citySearchBtn");
let $citySearch = $("#citySearch");
// let $cityList = $("#cityList");

let $cityName = $("#cityName");
let $cityTemperature = $("#cityTemperature");
let $cityHumidity = $("#cityHumidity");
let $cityWind = $("#cityWind");
let cityArray = [];

function cityNameSearch() {
  let cityName = $("#citySearch").val();
  console.log(cityName);

  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=2fba1101fc9ba3049e9335532cd0c48d";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(`<div id="currentCityCard" class="card">
        <div>
          <h5 class="card-title cityCard-title">${response.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted cityCard">Temperature: ${(
            (response.main.temp - 273.15) * 1.8 +
            32
          ).toFixed(2)}</h6>
          <h6 class="card-subtitle mb-2 text-muted cityCard">Humidity: ${
            response.main.humidity
          }</>
          <h6 class="card-subtitle mb-2 text-muted cityCard">Windspeed: ${
            response.wind.speed
          }</h6>
        </div>
      </div>`).appendTo("#cities");
  });
  // $("#citySearch").val("");
}

$("#cityList").on("click", cityNameSearch);

$("#citySearchBtn").on("click", function () {
  event.preventDefault();
  renderList();
});

function renderList() {
  $("#cityList").empty();
  cityArray.push($citySearch.val());

  for (let i = 0; i < cityArray.length; i++) {
    localStorage.setItem("cityName", cityArray);
    $(`<p class="cityBtns">${cityArray[i]}</p>`).appendTo("#cityList");
  }
}

// localStorage.setItem("cityName", JSON.stringify(cityArray));
// let cityNameStore = JSON.parse(localStorage.getItem("cityName"));
for (let i = 0; i < localStorage.length; i++) {}
