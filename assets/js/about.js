// modal initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

// form initilization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
  instances.getSelectedValues();
});


// text area 
$('#textarea1').val('');
  M.textareaAutoResize($('#textarea1'));


// ADDING Content for Carbon Interface API

var appKey = "FCoeGHOGk5VmFyLJVI78lw";
// var electricity_value = getElectricityValue();
var legobject = [{"departure_airport": `sfo`, "destination_airport": "yyz"},
{"departure_airport": "yyz", "destination_airport": "sfo"}]

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



$("#submitBtn").on("click", function() { 
  var userInput = $("#flight-num").val()
  
})




  
  
  
    
  