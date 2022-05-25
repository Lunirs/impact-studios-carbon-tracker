// modal initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

// form initilization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
  // instances.getSelectedValues();
});

// ADDING Content for Carbon Interface API

var appKey = "FCoeGHOGk5VmFyLJVI78lw";
// var electricity_value = getElectricityValue();
var legobject = [
  { departure_airport: `sfo`, destination_airport: "yyz" },
  { departure_airport: "yyz", destination_airport: "sfo" },
];

const response2 = fetch("https://www.carboninterface.com/api/v1/estimates", {
  method: "POST",
  mode: "cors",
  headers: {
    Authorization: `Bearer ${appKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    type: "flight",
    passengers: 1,
    legs: legobject,
  }),
})
  .then(function (response2) {
    console.log(response2);
    return response2.json();
  })
  .then(function (data) {
    console.log(data.data.attributes.carbon_mt);
  });

$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  var userInput = $("#flight-num").val();
  localStorage.setItem("flight-num", userInput);
  console.log(userInput);
  var num = localStorage.getItem("flight-num");
  console.log("hope" + num);
});

$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  var userInput = $("#flight-num").val();
  localStorage.setItem("flight-num", userInput);
  console.log(userInput);
  var num = localStorage.getItem("flight-num");
  console.log("hope" + num);
});

var modalEl = document.getElementById("modal1");
console.log(modalEl);

function renderNewEl() {
  var num = localStorage.getItem("flight-num");
  for (i = 0; i < num; i++) {
    var con = document.createElement("div");
    con.classList = "input-field col s12";
    modalEl.appendChild(con);

    var con2 = document.createElement("div");
    con2.classList = "row";
    con.appendChild(con2);

    var con3 = document.createElement("div");
    con3.classList = "col";
    con2.appendChild(con3);

    var deEl = document.createElement("input");
    deEl.classList = "validate";
    deEl.innerHTML = "Departing Airport";
  }
}
