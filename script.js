const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c35a6e8fffmsh1c53308d6783b7bp1ff734jsn12f8eb2995da',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    cityName.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity_2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed_2.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.log(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()  //prevent default reload
    getWeather(city.value)
})

getWeather("Delhi")



const getWeatherForCities = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            document.getElementById(city.charAt(0) + "temp").innerHTML = response.temp;
            // Ntemp.innerHTML = response.temp
            document.getElementById(city.charAt(0) + "feels_like").innerHTML = response.feels_like
            document.getElementById(city.charAt(0) + "humidity").innerHTML = response.humidity
            document.getElementById(city.charAt(0) + "min_temp").innerHTML = response.min_temp
            document.getElementById(city.charAt(0) + "max_temp").innerHTML = response.max_temp
            document.getElementById(city.charAt(0) + "wind_speed").innerHTML = response.wind_speed
            document.getElementById(city.charAt(0) + "sunrise").innerHTML = response.sunrise
            document.getElementById(city.charAt(0) + "sunset").innerHTML = response.sunset
        })
        .catch(err => console.log(err));
}

const cities = ["New york", "Kolkata", "Bangalore", "Pune", "Hyderabad"];

for (let i = 0; i < cities.length; i++) {
    // text += cars[i];
    getWeatherForCities(cities[i]);
}
