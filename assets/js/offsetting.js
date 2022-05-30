//assign empty arrays for local storage
var metricTon = [];
var treeResults = [];

// modal event listener
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

var init = () => {
  getResults();
  renderResults();
};

$("#submitBtn").on("click", (event) => {
  event.preventDefault();
  var userInput = $("#emission-results-input").val();
  if (!userInput) {
    return;
  } else {
    metricTon.push(userInput);
    setResults();
  }
  getResults();
  convertToTrees(userInput);
  renderResults();
});

// function that converts user input to number of trees.
// user input *1000 / 167 = trees needed
var convertToTrees = (input) => {
  var numberOfTrees = ((input * 1000) / 167).toFixed(0);
  console.log(numberOfTrees);
  treeResults.push(numberOfTrees);
  setResults();
  return numberOfTrees;
};

//set value into local storage
var setResults = () => {
  localStorage.setItem("metricTon", JSON.stringify(metricTon));
  localStorage.setItem("treeResults", JSON.stringify(treeResults));
};

//retrieve value from local storage
var getResults = () => {
  metricTon = JSON.parse(localStorage.getItem("metricTon")) || [];
  treeResults = JSON.parse(localStorage.getItem("treeResults")) || [];
};

//takes value from local storage and appends the results onto table elements
var renderResults = () => {
  $("#results-container").html("");
  for (i = 0; i < metricTon.length && i < treeResults.length; i++) {
    var tableRowContainer = $("<tr>");
    var userInputData = $("<td>");
    var treeNumData = $("<td>");

    userInputData.text(metricTon[i]);
    treeNumData.text(treeResults[i]);

    userInputData.appendTo(tableRowContainer);
    treeNumData.appendTo(tableRowContainer);

    tableRowContainer.prependTo($("#results-container"));
  }
};

//resets local storage data.

$("#resetBtn").on("click", (event) => {
  event.preventDefault();
  localStorage.clear();
  location.reload();
});

init();
