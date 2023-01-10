const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const p = document.querySelector('p');

getRandomColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    p.style.color = "#" + randomColor;
    console.log(randomColor)
}
  
color.addEventListener('click', getRandomColor);


let fontSize = 36; 
changeSizeUp = () => {
    fontSize += 5; 
    p.style.fontSize = fontSize + 'px';  
    
}
  
sizeUp.addEventListener('click', changeSizeUp);

changeSizeDown = () => {
    if (fontSize <= 21) return

    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';  
}
  
sizeDown.addEventListener('click', changeSizeDown);