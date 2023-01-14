const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const btnThree = document.querySelector('.btn-3');
const p = document.querySelector('p');




function Food(name, price) {
    this.name = name,
    this.price = price
}

const dishOne = new Food('pasta', 23);
const dishTwo = new Food('pizza', 28);
const dishThree = new Food('tiramisu', 20);


Food.prototype.show = function() {
    console.log(`${this.name} kosztuje ${this.price}zl.`);
}

btnOne.addEventListener('click', () => dishOne.show());
btnTwo.addEventListener('click', () => dishTwo.show());
btnThree.addEventListener('click', () => dishThree.show());
// dishOne.show();