let todoInput;
let errorInfo;
let addBtn;
let ulList;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-list');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.add-btn');
    ulList = document.querySelector('.todo-list ul');
    
}
const prepareDOMEvents = () => {
    
}

document.addEventListener('DOMContentLoaded', main);