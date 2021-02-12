const html = document.querySelector('html');
const buttonA = document.querySelector('.font-size-normal');
const buttonAplus = document.querySelector('.font-size-plus');
const buttonAplusplus = document.querySelector('.font-size-plus-plus');
const contrastBtn = document.querySelector('.contrast-btn');
const body = document.querySelector("body");

buttonA.onclick = () => {
    const active = document.querySelector('.buttons-font-size > .active');
    active.classList.remove("active");

    buttonA.classList.add("active");
    html.style.fontSize = '16px';
}

buttonAplus.onclick = () => {
    const active = document.querySelector('.buttons-font-size > .active');
    active.classList.remove("active");

    buttonAplus.classList.add("active");
    html.style.fontSize = '18px';
}

buttonAplusplus.onclick = () => {
    const active = document.querySelector('.buttons-font-size > .active');
    active.classList.remove("active");

    buttonAplusplus.classList.add("active");
    html.style.fontSize = '19px';
}

contrastBtn.onclick = () => {
    body.classList.toggle("contrast");
}