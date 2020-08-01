let $searchBtn = $("#citySearchBtn");
let $citySearch = $("#citySearch");
let $cityList = $("#cityList");

$searchBtn.on("click", () => {
  event.preventDefault();
  $(`<ul>
    <li>${$citySearch.val()}</li>
  </ul>`).appendTo($cityList);
  $citySearch.val("");
});
