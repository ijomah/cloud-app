// get the elements
// use fetch api
// get the text from the input
// pass the input data to the api
// interpolate the api res
// function to map the res to html
// function to get the keep data
// Keep data in localstorage
console.log("Inner width", window.innerWidth);

// JavaScript source code
// let input = document.getElementById("input-info");
// let displayArea = document.getElementById("data-area");
// let searchForm = document.getElementById("data-form");
// grab elements on the dom
const responseBox = document.getElementById("data-area");
//const searchButton = document.getElementById("searchButton");
const inputSpace = document.getElementById("input-info");
const myForm = document.getElementById("data-form");

// create an array
const myArray = JSON.parse(localStorage.getItem("weatherStore")) || [];

for (const locData of myArray) {
  if (locData.cod === "404") {
    myArray.splice(myArray.indexOf(locData), 1);
  }
}

// remember to add get item from local storage as an option to the array

//Dom loading
document.addEventListener("DOMContentLoaded", function() {
    displayInfo(myArray);
    console.log(myArray);

});
// create a function that will display the weather data to HTML page- this should listen to the page reload event
const displayInfo = (arr) => {
    let mappedArray = arr.map((data) => {
        return  `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 g-4">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="fs-3 card-title">
                <i class="fa-solid fa-location-dot fa-beat-fade"></i> &nbsp; ${data.name} 
              </h5>
              <div id="long-lat">
                <span class="lead">Long:</span> &nbsp; <span class="badge bg-primary">${data.coord.lon}<sup>0</sup>N</span>
                &nbsp; &nbsp; &nbsp;<span class="lead">Lat:</span> &nbsp; <span class="badge bg-primary">${data.coord.lat}<sup>0</sup>W</span>
              </div>
                <div id="weather-info" class="card-text mt-4">
                    <div class="fs-5 d-flex justify-content-between mt-3"><p>Rainfall:</p><i class="fa-solid fa-cloud-rain fa-2xl"></i> &nbsp;    <span class="badge bg-primary barge-height">${200}mm</span> </div>
                    <div class="fs-5 d-flex justify-content-between mt-3"><p>Temp:</p><i class="fa-solid fa-temperature-half fa-2xl"></i><span>&nbsp;   <span class="badge bg-primary">&nbsp;${Math.round(data.main.temp)}<sup>0</sup>C</span>  </span></div>
                    <div class="fs-5 d-flex justify-content-between mt-3"><p>Wind: </p><i class="fa-solid fa-wind fa-2xl"></i>&nbsp;  <span class="badge bg-primary barge-height">${data.wind.speed}m/s</span></div>
                    <div class="fs-5 d-flex justify-content-between mt-3"><p>Cloudy:</p><i class="fa-solid fa-cloud fa-2xl"></i>&nbsp;<span>   <span class="badge bg-primary" >${data.visibility}</span></span></div>
                </div>
            </div>
          </div>
        </div>
                `
                
    });
    stringData = mappedArray.join("");
    responseBox.innerHTML = stringData;
    console.log(stringData);
}


// create a function that will get response from weather site
// remember to add local storage so as to persist the data on client side


const gatherInfo = (Location) => {
    let infoSource = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&APPID=4db3f1197af24989851efdae5a636a29`

    fetch(infoSource).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if(!data.cod === "404") {
              myArray.unshift(data);
            }
            
            
            console.log(myArray);
            localStorage.setItem("weatherStore", JSON.stringify(myArray))
            setTimeout(() => {
                console.log("I reloads after 2 secs");
                location.reload();    
            }, 3500);
            
        })
        .catch((error) => {
            console.log(error);
        });

    });
};


// create function that will handle submit event on the app
const submitValue = (e) => {
    e.preventDefault();
let place = inputSpace.value.charAt(0).toLocaleUpperCase() + inputSpace.value.slice(1);
    gatherInfo(place);
    console.log(place, 'I am submited')
    
    displayInfo(myArray);

    inputSpace.value = "";

}

// create a function that will listen to an event on the form in the app
myForm.addEventListener("submit", submitValue);





// let input = document.getElementById("input-info");
// let displayArea = document.getElementById("data-area");
// let searchForm = document.getElementById("data-form");

// document.addEventListener("DOMContentLoaded", () => {
//   displayInfo(arrayOfData);
//   console.log("Content from dom load", arrayOfData);
// })

// let arrayOfData = JSON.parse(localStorage.getItem("weatherInfo")) || [];
// const fetchData = (placeName) => {
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&APPID=4db3f1197af24989851efdae5a636a29`; 
//     fetch(apiUrl).then((response) => {
//         console.log(response);
//             response.json().then((data) => {
//                 console.log(data);
//                 arrayOfData.unshift(data);
//                 if(localStorage.getItem("weatherInfo") === true) {
//                     console.log("Key exist in localStorage")
//                 } else {
//                     localStorage.setItem("weatherInfo", JSON.stringify(dataForStore));
//                 }
//                 setTimeout(() => {
//                   location.reload;
//                 }, 3500)
                
//             })
//             .catch((error) => {
//                console.log(error);
//           });
//         })
        
// }

// const displayInfo = (arr) => {
//     let singleLocationData = arr.map(locData => {
//         return `
        // <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 g-4">
        //   <div class="card h-100">
        //     <img src="..." class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="fs-3 card-title">
        //         <i class="fa-solid fa-location-dot fa-beat-fade"></i> &nbsp; ${locData.name} 
        //       </h5>
        //       <div id="long-lat">
        //         <span class="lead">Long:</span> &nbsp; <span class="badge bg-primary">${locData.coord.lon}<sup>0</sup>N</span>
        //         &nbsp; &nbsp; &nbsp;<span class="lead">Lat:</span> &nbsp; <span class="badge bg-primary">${locData.coord.lat}<sup>0</sup>W</span>
        //       </div>
        //         <div id="weather-info" class="card-text mt-4">
        //             <div class="fs-5 d-flex justify-content-between mt-3"><p>Rainfall:</p><i class="fa-solid fa-cloud-rain fa-2xl"></i> &nbsp;    <span class="badge bg-primary barge-height">${200}mm</span> </div>
        //             <div class="fs-5 d-flex justify-content-between mt-3"><p>Temp:</p><i class="fa-solid fa-temperature-half fa-2xl"></i><span>&nbsp;   <span class="badge bg-primary">&nbsp; ${60}<sup>0</sup>C</span>  </span></div>
        //             <div class="fs-5 d-flex justify-content-between mt-3"><p>Wind: </p><i class="fa-solid fa-wind fa-2xl"></i>&nbsp;  <span class="badge bg-primary barge-height">${20}m/s</span></div>
        //             <div class="fs-5 d-flex justify-content-between mt-3"><p>Cloudy:</p><i class="fa-solid fa-cloud fa-2xl"></i>&nbsp;<span>   <span class="badge bg-primary" >${60}Pa</span></span></div>
        //         </div>
        //     </div>
        //   </div>
        // </div>
//         `
//     })

//     let dataForStore = singleLocationData.join("");
//     displayArea.innerHTML = dataForStore;
    
    
// }

// const submitData = (e) => {
//     e.preventDefault;
//     console.log("Submitted");
//     fetchData(input.value);
//     displayInfo(arrayOfData);
    
// }
// searchForm.addEventListener("submit", submitData);