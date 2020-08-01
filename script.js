function nyArticleSearch() {
  let searchedArticle = "";

  let queryURL = "";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}

// NEW YORK TIME API
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GcVcv3ibf39BiRgpffCcppBauYG8F9da

$("#").on("click", function () {
  event.preventDefault();

  // nyArticleSearch();
});
