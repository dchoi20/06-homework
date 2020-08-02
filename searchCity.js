// let $searchBtn = $("#citySearchBtn");
let $citySearch = $("#citySearch");
// let $cityList = $("#cityList");

// $searchBtn.on("click", () => {
//   event.preventDefault();
//   $(`<ul>
//     <li>${$citySearch.val()}</li>
//   </ul>`).appendTo($cityList);
//   $citySearch.val("");
// });

function cityNameSearch() {
  let cityName = $("#citySearch").val();

  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=2fba1101fc9ba3049e9335532cd0c48d";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${response.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Temperature: ${(
            (response.main.temp - 273.15) * 1.8 +
            32
          ).toFixed(2)}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Humidity: ${
            response.main.humidity
          }</>
          <h6 class="card-subtitle mb-2 text-muted">Windspeed: ${
            response.wind.speed
          }</h6>
        </div>
      </div>`).appendTo("#cities");
  });
  $("#citySearch").val("");
}

// NEW YORK TIME API
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GcVcv3ibf39BiRgpffCcppBauYG8F9da

$("#citySearchBtn").on("click", function () {
  event.preventDefault();
  $(`<li><button>${$citySearch.val()}</button></li>`).appendTo("#cityBtn");

  // cityNameSearch();
});

$("#cityBtn").on("click", cityNameSearch);
