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
        const status = Object.assign({}, ...res.data.weather)

        warning.textContent = '';
        input.value = '';

        if (status.id >= 200 && status.id < 300) {
            photo.setAttribute('src', 'img/thunderstorm.png');
        } else if (status.id >= 300 && status.id < 400) {
            photo.setAttribute('src', 'img/drizzle.png');
        } else if (status.id >= 500 && status.id < 600) {
            photo.setAttribute('src', 'img/rain.png');
        } else if (status.id >= 600 && status.id < 700) {
            photo.setAttribute('src', 'img/ice.png');
        } else if (status.id >= 701 && status.id < 800) {
            photo.setAttribute('src', 'img/fog.png');
        } else if (status.id === 800) {
            photo.setAttribute('src', 'img/sun.png');
        } else if (status.id > 800 && status.id < 900) {
            photo.setAttribute('src', 'img/cloud.png');
        } else {
            photo.setAttribute('src', 'img/unknown.png');
        }

        temperature.textContent = Math.floor(res.data.main.temp) + '℃';
        humidity.textContent = res.data.main.humidity + `%`;
        weather.textContent = status.main;

    })
    .catch(() => warning.textContent = "Wpisz poprawna nazwe miasta");
}
    const enterCheck = e => {
        if (e.key === 'Enter') {
        getWeather();
    }
}


input.addEventListener('keyup', enterCheck);
getWeather();
button.addEventListener('click', getWeather);
