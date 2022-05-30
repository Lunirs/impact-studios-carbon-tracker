// get local storage values from index.html modal input
var carbonEmissionResult = JSON.parse(localStorage.getItem("carbonEmission"));
var flightDistance = JSON.parse(localStorage.getItem("flight-distance"));
var flightNum = JSON.parse(localStorage.getItem("flight-num"));

// function that  takes the data from local storage and loops based on length of data. display each data in table element
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

// button leads users to next html page to offset their results value

$("#offset-Btn").on("click", (event) => {
  event.preventDefault();
  location.replace("offsetting.html");
});
