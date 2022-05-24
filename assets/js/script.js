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

// ADDING Content for Carbon Interface API


var appKey = 'HySkTwvhMPAKSFnlBztMg'
var electricity_value = getElectricityValue()


const response = fetch('https://www.carboninterface.com/api/v1/estimates', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${appKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "type": "electricity",
      "electricity_unit": "mwh",
      "electricity_value": .42,
      "country": "us",
      "state": "fl"
    })}).then(function (response) {
        console.log(response)
      return response.json();
    })
    .then(function (data) {
      console.log(data.data.attributes.carbon_mt);
      console.log(data.data.attributes);
    });

    function getElectricityValue() {
        // ask the user a series of questions to get data for estimates
    }
