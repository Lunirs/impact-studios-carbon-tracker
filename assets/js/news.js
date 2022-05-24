var requestOptions = {
  method: "GET",
};

var params = {
  api_token: "TNPak6m6ig7UHDYZQqczuFZHKtzZBIGaIgx8DZ8q",
  categories: "general,tech",
  search: "climate change",
  limit: "100",
};

var esc = encodeURIComponent;
var query = Object.keys(params)
  .map(function (k) {
    return esc(k) + "=" + esc(params[k]);
  })
  .join("&");

fetch(`https://api.thenewsapi.com/v1/news/all?${query}${requestOptions}`)
  .then((response) => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
