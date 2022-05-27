// var flightArray = JSON.parse(localStorage.getItem("flight-num"));
var carbonEmissionResult = JSON.parse(localStorage.getItem("carbonEmission"));
var flightDistance = JSON.parse(localStorage.getItem("flight-distance"));
var flightNum = JSON.parse(localStorage.getItem("flight-num"));

var renderResults = () => {
  $("results-container").html("");
  for (
    i = 0;
    i < carbonEmissionResult.length &&
    i < flightDistance.length &&
    i < flightNum.length;
    i++
  ) {
    var tableRowContainer = $("<tr>");
    var flightNumData = $("<td>");
    var carbonEmissionData = $("<td>");
    var flightDistanceData = $("<td>");

    flightNumData.text(flightNum[i]);
    console.log(carbonEmissionData.text(carbonEmissionResult[i]));
    carbonEmissionData.text(carbonEmissionResult[i]);
    flightDistanceData.text(flightDistance[i]);

    flightNumData.appendTo(tableRowContainer);
    flightDistanceData.appendTo(tableRowContainer);
    carbonEmissionData.appendTo(tableRowContainer);

    tableRowContainer.prependTo($("#results-container"));
  }
};

renderResults();

$("#offset-Btn").on("click", (event) => {
  event.preventDefault();
  location.replace("offsetting.html");
});
