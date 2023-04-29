const weather = document.querySelector(".weather");
const city = document.querySelector(".city");


function geo_ok(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4d8b0d9caf3eb1218e3b5e87b460edab&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} º`;
    });
}
function geo_error(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geo_ok , geo_error);