let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;

let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');

}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    btnDelete.addEventListener('click', deleteTodo);
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

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed');
    } else if (e.target.matches('.edit')) {
        editTodo(e);
    } else if (e.target.matches('.delete')) {
        deleteTodo(e);
    }
}

const editTodo = e => {
    todoToEdit = e.target.closest('li');

    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';
}

const deleteTodo = e => {
    e.target.closest('li').remove();

    const allTodos = ulList.querySelectorAl('li');
    
    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadan na liscie';
    }
}

const closePopup = () => {
    popup.style.display = 'none';
}

const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display = 'none';
        popupInfo.textContent = '';
    } else {
        popupInfo.textContent = 'Musisz podac jakas tresc';
    }
}


document.addEventListener('DOMContentLoaded', main);


// const add = (x, y) => {
//     const score = x + y;
//     showScore(score);
// }

// const showScore = (scoreTwo) => {
//     console.log(`Wynik to: ${scoreTwo}`);
// }

// add(2, 4);