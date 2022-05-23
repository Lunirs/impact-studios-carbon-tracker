var requestOptions = {
    method: 'GET'
};

var params = {
    api_token: 'TNPak6m6ig7UHDYZQqczuFZHKtzZBIGaIgx8DZ8q',
    categories: 'general,tech',
    search: 'climate change',
    limit: '50'
};

var esc = encodeURIComponent;
var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');

fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });