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


$("#submitBtn").on("click", function(event) { 
  event.preventDefault()
  var userInput = $("#flight-num").val()
  localStorage.setItem('flight-num', userInput)
  console.log(userInput)
  var num = localStorage.getItem('flight-num')
  console.log("hope"+num)
})

var modalEl = document.getElementById('modal1');
console.log(modalEl);

function renderNewEl(){
  var num = localStorage.getItem('flight-num')
  for (i = 0; i < num; i++) {
    var con = document.createElement('div');
    con.classList = "input-field col s12"
    modalEl.appendChild(con);

    var con2 = document.createElement('div');
    con2.classList = "row"
    con.appendChild(con2);

    var con3 = document.createElement('div');
    con3.classList = "col"
    con2.appendChild(con3);

    var deEl = document.createElement('input')
    deEl.classList = "validate"
    deEl.innerHTML = "Departing Airport"
  }

}

// for (var i = 0; i < 5; i++){
//                 var cardEl = document.createElement('div');
//                 cardEl.classList = 'indCard'
//                 cardContainer.appendChild(cardEl)
                
//                 tempCon = document.createElement('div')
//                 var temp = "Temp: " + (data.daily[i].temp.day)
//                 tempCon.textContent = temp;
//                 cardEl.appendChild(tempCon)

{/* <form class="input-field col s12" id="form">
            <div class="input-field col s12">
              <input id="flight-num" class="validate" type="text" placeholder="5">
              <label for="textarea1">How Many Flights Have You Taken This Year?</label>
            </div>
        

            <div class="input-field col s12">
              <div class="row">
                <div class="col">
                  <input id="departure" class="validate" type="text" placeholder="SFO">
                  <label for="textarea">Departing Airport</label>
                </div>
              
              <div class = "col">
                <input id="arrival" class="col validate" type="text" placeholder="JFK">
                <label for="textarea">Destination Airport</label>
              </div>  
            </div> */}
  
    
  