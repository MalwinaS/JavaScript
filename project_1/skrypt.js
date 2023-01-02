const arrowBtn = document.querySelector('.arrow');
const img = document.querySelector('.item');

const showImg = () => {
img.classList.toggle('hide');

    if (img.classList.contains('hide')) {
        arrowBtn.style.transform = 'rotate(180deg)'
    }
    else {
        arrowBtn.style.transform = 'rotate(0deg)'
    }
}

arrowBtn.addEventListener('click', showImg);

