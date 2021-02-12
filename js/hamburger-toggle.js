const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-wrapper');

hamburger.onclick = () => {
    hamburger.classList.toggle("open");
    navWrapper.classList.toggle("open");
}
