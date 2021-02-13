const createSectionsAnchors = () => {
    let sections;
    if (window.matchMedia("(max-width: 1000px)").matches) {
        sections = [
            document.querySelector(".about-us"),
            document.querySelector(".practis"),
            document.querySelector(".lawyers"),
            document.querySelector(".publications"),
            document.querySelector(".faq"),
            document.querySelector(".contact")
        ];
    } else {
        sections = [
            document.querySelector("#about-us-anchor"),
            document.querySelector("#practis-anchor"),
            document.querySelector("#lawyers-anchor"),
            document.querySelector("#publications-anchor"),
            document.querySelector("#faq-anchor"),
            document.querySelector("#contact-anchor")
        ];
    }
    return sections
}

const links = document.querySelectorAll('.nav-links a');

links.forEach((link, index) => {
    link.onclick = (event) => {
        event.preventDefault();
        const sections = createSectionsAnchors();
        sections[index].scrollIntoView({
            behavior: 'smooth'
        })
    }
});

const contactBtn = document.querySelector(".contact-btn");
contactBtn.onclick = () => {
    const sections = createSectionsAnchors();
    sections[5].scrollIntoView({
        behavior: 'smooth'
    });
}

const logo = document.querySelector(".logo");
logo.onclick = () => {
    body.scrollIntoView({
        behavior: 'smooth'
    })
}






