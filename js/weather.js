const API_KEY = "e1997105359ed2e9a035e4a3b566a62d";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data.name);
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);