const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=d30da34909b2761f704e346eef7f39be';
const units = '&units=metric';
let city;
let url;

const getWeather = () => {
    //city = input.value;
    city = 'London';
    url = apiLink + city + apiKey + units;

    axios.get(url)
        .then(res => {
            const temp = res.data.main.temp;
            const hum = res.data.main.humidity;
            const status = Object.assign({}, ...res.data.weather)

            cityName.textContent = res.data.name
            weather.textContent = status.main
            temperature.textContent = Math.floor(temp) + '°C';
            humidity.textContent = hum + "%";

            if (status.id >= 200 && status.id < 300) {
                photo.setAttribute('src', './images/thunderstorm.png')
            } else if (status.id >= 300 && status.id < 500) {
                photo.setAttribute('src', './images/drizzle.png')
            } else if (status.id >= 500 && status.id < 600) {
                photo.setAttribute('src', './images/rain.png')
            } else if (status.id >= 600 && status.id < 700) {
                photo.setAttribute('src', './images/ice.png')
            } else if (status.id >= 700 && status.id < 800) {
                photo.setAttribute('src', './images/fog.png')
            } else if (status.id == 800) {
                photo.setAttribute('src', './images/sun.png')
            } else if (status.id >= 801 && status.id < 900) {
                photo.setAttribute('src', './images/cloud.png')
            } else {
                photo.setAttribute('src', './images/unknown.png')
            }

            console.log(res.data.weather);
            console.log(status.id);
        })
};

getWeather()