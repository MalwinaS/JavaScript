const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const p = document.querySelector('p');

getRandomColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    p.style.color = "#" + randomColor;
}
  
color.addEventListener('click', getRandomColor);



changeSizeUp = () => {
    let fontSizee = 36; 
    p.style.fontSize = fontSizee + 'px';
    fontSizee++   
    
}
  
sizeUp.addEventListener('click', changeSizeUp);

changeSizeDown = () => {
    for (let i = 36; i >= 10; i--) {
        p.style.fontSize = `${i}px`;
    }
}
  
sizeDown.addEventListener('click', changeSizeDown);