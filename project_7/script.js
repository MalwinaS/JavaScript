let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    
}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
}

const addNewTask = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        createToolsArea();

        ulList.append(newTodo);


        todoInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = 'Wpisz tresc zadania!';
    }
}

const createToolsArea = () => {
    const tools = document.createElement('div');
    tools.classList.add('tools');
    newTodo.append(tools);

    let btnComplete = document.createElement('button');
    btnComplete.classList.add('complete');
    btnComplete.innerHTML = '<i class="fas fa-check"></i>';

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit');
    btnEdit.textContent = 'EDIT';


    let btnDelete = document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.innerHTML = '<i class="fas fa-times"></i>';

    tools.append(btnComplete, btnEdit, btnDelete);
}

document.addEventListener('DOMContentLoaded', main);


