const slideOpinion = document.querySelector('.slide-opinion');
const opinions = document.querySelectorAll('.slide-opinion opinion');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const sizeOpinion = 100 / 3;

btn1.onclick = () => {
    if (btn1.className === "active") return;
    btn1.className = "active";
    btn2.className = "";
    btn3.className = "";
    slideOpinion.style.transition = "transform 0.4s ease-in-out";
    slideOpinion.style.transform = 'translateX(' + (0) + '%)';
}

btn2.onclick = () => {
    if (btn2.className === "active") return;
    slideOpinion.style.transition = "transform 0.4s ease-in-out";
    slideOpinion.style.transform = 'translateX(' + (-sizeOpinion * 1) + '%)';
    btn2.className = "active";
    btn1.className = "";
    btn3.className = "";
}

btn3.onclick = () => {
    if (btn3.className === "active") return;
    slideOpinion.style.transition = "transform 0.4s ease-in-out";
    slideOpinion.style.transform = 'translateX(' + (-sizeOpinion * 2) + '%)';
    btn3.className = "active";
    btn2.className = "";
    btn1.className = "";
}
