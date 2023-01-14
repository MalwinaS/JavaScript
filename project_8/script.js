const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "&appid=63fc4b528e9e73977e9320f14e05bf09"
const API_UNITS = "&units=metric"

const getWeather = () => {
    const city = input.value || 'warsaw';
    const URL= API_LINK + city + API_KEY + API_UNITS;

    axios.get(URL).then(res =>  {
        cityName.textContent = res.data.name;

        temperature.textContent = Math.floor(res.data.main.temp) + '℃';
        humidity.textContent = res.data.main.humidity + `%`;
    })
}

getWeather();