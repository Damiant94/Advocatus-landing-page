const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = 20;

slide.style.transform = 'translateX(' + (-size * counter) + '%)';

setInterval(() => {
    nextBtn.click();
}, 5000);

nextBtn.onclick = () => {
    if (counter >= images.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + '%)';
}

prevBtn.onclick = () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + '%)';
}

slide.ontransitionend = () => {
    if (images[counter].id === 'last-clone') {
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + '%)';
    }
    if (images[counter].id === 'first-clone') {
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + '%)';
    }
}