
// fetch("https://stoplight.io/mocks/cloverly/cloverly-api/27397357/estimates/flight", {
//     "method": "POST",
//     "headers": {
//       "Content-Type": "application/json",
//       "Authorization": ""
//     },
//     "body": "{\"airports\":[\"ATL\",\"SFO\"]}"
//   })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   });


var appKey = 'HySkTwvhMPAKSFnlBztMg'


// const response = fetch('https://www.carboninterface.com/api/v1/estimates', {
//   method: 'POST',
//   mode: 'cors',
//   headers: {
//     'Authorization': `Bearer ${appKey}`,
//     'Content-Type': 'application/json'},
//   body: JSON.stringify({"data": {
//     "type": "electricity",
//     "electricity_unit": "mwh",
//     "electricity_value": .42,
//     "country": "us",
//     "state": "fl"
//   }
//   })}).then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
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
    });
