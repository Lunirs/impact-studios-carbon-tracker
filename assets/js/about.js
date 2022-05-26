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
var carbonEmissionResult = [];
var flightArray = [];
var flightDistance = [];
var flightNum;
if (!JSON.parse(localStorage.getItem("flight-num"))) {
  flightNum = [];
} else {
  flightNum = JSON.parse(localStorage.getItem("flight-num"));
}
console.log(flightNum);
var appKey = "PIyW58u2ebQ7k0qbWwqJw";

// initialization function
function init() {
  flightArray = JSON.parse(localStorage.getItem("flightsArray")) || [];
  carbonEmissionResult =
    JSON.parse(localStorage.getItem("carbonEmission")) || [];
  flightDistance = JSON.parse(localStorage.getItem("flight-distance")) || [];
}

function getResponse2(legobject) {
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
      console.log(data.data.attributes.distance_value);
      carbonEmissionResult.push(data.data.attributes.carbon_mt);
      flightDistance.push(data.data.attributes.distance_value);
      localStorage.setItem(
        "carbonEmission",
        JSON.stringify(carbonEmissionResult)
      );
      localStorage.setItem("flight-distance", JSON.stringify(flightDistance));
    });
}

// This is the event listener for the # of flights button
$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  var num = $("#flight-num").val();
  flightNum.push(num);
  console.log("This should be the flight num array", flightNum);
  console.log("This should be the num", num, "type of num", typeof num);
  localStorage.setItem("flight-num", JSON.stringify(flightNum));
  renderNewEl(num);
});

var modalEl = document.getElementById("form1");
console.log(modalEl);

function renderNewEl() {
  var num = JSON.parse(localStorage.getItem("flight-num"));
  // num = JSON.stringify(num)

  for (i = 0; i<num.length; i++){
    num2 = parseInt(num[i])
    console.log("num2: ",num2)
    console.log("type: ",typeof(num2))

  }

  // console.log("this is the type of num: ",typeof(num2))
  // console.log("render new el running")

  for (i = 0; i < num2; i++) {
    // container for both the departure and destination
    var con = document.createElement("div");
    con.classList = "input-field col s12";
    modalEl.appendChild(con);

    var con2 = document.createElement("div");
    con2.classList = "row flight";
    con.appendChild(con2);

    var con3 = document.createElement("div");
    con3.classList = "col";
    con2.appendChild(con3);

    var departureEl = document.createElement("input");
    departureEl.classList = "validate depart";
    departureEl.type = "text";
    departureEl.placeholder = "SFO";
    con3.appendChild(departureEl);

    var label = document.createElement("label");
    label.innerHTML = "Departing Airport";
    con3.appendChild(label);

    // content for Destination within For Loop

    var dcon3 = document.createElement("div");
    dcon3.classList = "col";
    con2.appendChild(dcon3);

    var destinationEl = document.createElement("input");
    destinationEl.classList = " col validate destinate";
    destinationEl.type = "text";
    destinationEl.placeholder = "JFK";
    dcon3.appendChild(destinationEl);

    var label2 = document.createElement("label");
    label2.innerHTML = "Destination Airport";
    dcon3.appendChild(label2);
  }
  // Creating the Second Submit button
  var submitBtn2 = document.createElement("a");
  submitBtn2.id = "submitBtn2";
  // submitBtn2.setAttribute("href","results.html")
  submitBtn2.classList = "modal-submit waves-effect waves-green btn-flat";
  submitBtn2.textContent = "SUBMIT";
  modalEl.appendChild(submitBtn2);

  // Have empty array
  // flight num = 0

  $("#submitBtn2").on("click", function (event2) {
    // console.log(document.querySelectorAll(".flight"))
    var flightContainer = document.querySelectorAll(".flight");
    for (var i = 0; i < flightContainer.length; i++) {
      var departure = flightContainer[i].children[0].children[0].value;
      var destination = flightContainer[i].children[1].children[0].value;
      flightArray.push({
        departure_airport: departure,
        destination_airport: destination,
      });
      localStorage.setItem("flights", JSON.stringify(flightArray));
    }
    getResponse2(flightArray);
  });
}

init();
