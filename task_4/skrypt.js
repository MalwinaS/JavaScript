const btn = document.querySelector('.btn-one');
const img = document.querySelector('img');

const URL = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener('click', () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => img.setAttribute('src', data.message))
    .catch(err => console.error(err))

})


// TO DO
// const btnTwo = document.querySelector('.btn-two');
// const p = document.querySelector('p');

// const URL2 = "https://meowfacts.herokuapp.com/"

// btnTwo.addEventListener('click', () => {
//     fetch(URL2)
//     .then(res => res.json())
//     .then(data => data)
//     const {data, main: { title }} = data; 
//     p.textContent = data;
//  })

