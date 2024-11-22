const apiKey = "8c7ced5d907e416a7a2b9f976b7a7c18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon')
const searchImg = document.querySelector(".img0")
const humidityImg = document.querySelector(".img1")
const windImg = document.querySelector(".img2")
humidityImg.src = "images/humidity.png"
searchImg.src = "images/search.png"
    windImg.src = "images/wind.png"

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
    // searchImg.src = "images/search.png"
    // humidityImg.src = "images/humidity.png"
    // windImg.src = "images/wind.png"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
    // searchImg.src = "images/search.png"
    // humidityImg.src = "images/humidity.png"
    // windImg.src = "images/wind.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
    // searchImg.src = "images/search.png"
    // humidityImg.src = "images/humidity.png"
    // windImg.src = "images/wind.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
    // searchImg.src = "images/search.png"
    // humidityImg.src = "images/humidity.png"
    // windImg.src = "images/wind.png"
    }

    document.querySelector(".weather").style.display = "block"

    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
