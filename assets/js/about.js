// modal initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

// form initilization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

instance.getSelectedValues();


// text area 
$('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));

// ADDING Content for Carbon Interface API

var appKey = "HySkTwvhMPAKSFnlBztMg";
var electricity_value = getElectricityValue();

const response2 = fetch("https://www.carboninterface.com/api/v1/estimates", {
  method: "POST",
  mode: "cors",
  headers: {
    Authorization: `Bearer ${appKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    type: "electricity",
    electricity_unit: "mwh",
    electricity_value: 0.42,
    country: "us",
    state: "fl",
  }),
})
  .then(function (response2) {
    console.log(response2);
    return response2.json();
  })
  .then(function (data) {
    console.log(data.data.attributes.carbon_mt);
  });

// ADDING Content for Carbon Interface API

var appKey = "HySkTwvhMPAKSFnlBztMg";
var electricity_value = getElectricityValue();

const response = fetch("https://www.carboninterface.com/api/v1/estimates", {
  method: "POST",
  mode: "cors",
  headers: {
    Authorization: `Bearer ${appKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    type: "electricity",
    electricity_unit: "mwh",
    electricity_value: 0.42,
    country: "us",
    state: "fl",
  }),
})
  .then(function (response2) {
    console.log(response2);
    return response2.json();
  })
  .then(function (data) {
    console.log(data.data.attributes.carbon_mt);
    console.log(data.data.attributes);
  });

function getElectricityValue() {
  // ask the user a series of questions to get data for estimates
}
function getElectricityValue() {}
