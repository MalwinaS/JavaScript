const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if (pass.value.length > minValue && pass.value.match(letters) 
    && pass.value.match(numbers) && pass.value.match(special)){
        p.textContent = 'Masz bardzo dobre haslo';
        p.style.color = 'lime';
    } else if (pass.value.length > minValue && pass.value.match(letters) 
    && pass.value.match(numbers)) {
        p.textContent = 'Masz dobre haslo';
        p.style.color = 'yellow';
    } else {
        p.textContent = 'Masz slabe haslo';
        p.style.color = 'red';
    }
}

const checkPassword = () => {
    if (pass.value !== '') {
        showMsg();
    } else {
        p.textContent = 'Nie podałeś hasła...';
        p.style.color = 'white';
    }
}

pass.addEventListener('keyup', checkPassword);