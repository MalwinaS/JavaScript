const converter = document.querySelector('#converter');
const result = document.querySelector('.result'); 
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit
let celsius

// T(F) = T(C) * 1.8 + 32
// T(C) = (T(F) - 32) /  1.8



const changeTemp = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
    
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
    }
}

// T(F) = T(C) * 1.8 + 32
const changeCelsius = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.textContent  =  `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
    converter.value = '';
}


const changeFar = () => {
    celsius = (converter.value - 32) / 1.8;
    result.textContent  =  `${converter.value}°F to ${celsius.toFixed(1)}°C`;
    converter.value = '';
}


const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            changeCelsius();
        } else if (one.textContent === '°F') {
            changeFar();
        }
    } else {
        result.textContent = 'Musisz podac jakas wartosc'
    }
}

const resetDeg = () => {
    result.textContent = ''
    converter.value = '';
}


changeBtn.addEventListener('click', changeTemp);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', resetDeg);