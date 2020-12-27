// JavaScript source code

// grab elements on the dom
responseBox = document.getElementById("responsebox");
searchButton = document.getElementById("searchButton");
inputSpace = document.getElementById("inputSpace");


// create an array
const myArray = JSON.parse(localStorage.getItem("weatherStore")) || [];

// remember to add get item from local storage as an option to the array
// create a function that will display the weather data to HTML page- this should listen to the page reload event
const displayInfo = (arr) => {
    let mappedArray = arr.map((data) => {
        return     
      `<div id="responsebox">
        <div>
            <h3>Kano</h3>
            <span>Longitude: <span>60<sup>0</sup>N</span>,</span> 
            <span>Latitude: <span>60<sup>0</sup>W</span></span>
            <div>Rainfall: <span>200mm</span>, <span>Temperature:  <span>60<sup>0</sup>celsius</span>  </span></div>
            <div>Wind Speed: <span>20m/s</span>, <span>Pressure:  <span>60Pa</span></span></div>
        </div>
       </div>`
        let stringData = mappedArray.join("");
        responseBox.innerText = stringData;
    });
}


// create a function that will get response from weather site
const gatherInfo = (placename) => {
    let infoSource = `api.openweathermap.org/data/2.5/weather?q=${placename},uk&APPID=4db3f1197af24989851efdae5a636a29`
    fetch(infoSource).then((response) => {
        response.json().then((data) => {
            console.log(data);
            
            myArray.unshift(data);
            console.log(myArray);

        })
    })
}

// remember to add local storage so as to persist the data on client side
// create function that will handle submit event on the app
// create a function that will listen to an event on the form in the app