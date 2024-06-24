const listButton = document.getElementById("listButton");
const listMobile = document.getElementById("listMobile");
const closeButton = document.getElementById("closeButton");
const mainTag = document.querySelector('main');
const banner = document.getElementById("banner");

let list_open = false;

listButton.addEventListener("click", () => {
    list_open = !list_open;

    if (list_open) {
        listMobile.style.transform = "translateX(0%)";
        listButton.style.display = "none";
        mainTag.style.zIndex = "0";
        banner.style.display = "none";
    } else {
        listMobile.style.transform = "translateX(-100%)";
    }
});

closeButton.addEventListener("click", () => {
    if (list_open) {
        list_open = false;
        listMobile.style.transform = "translateX(-100%)";
        listButton.style.display = "block"
        listButton.style.transition = "display 1s ease";
        banner.style.display = "flex";
        mainTag.style.zIndex = "2000";
    }
});

// KOD ZA PROMENU TEME

const themeToggleBtn = document.getElementById('theme-toggle');
const toggleCircle = themeToggleBtn.querySelector('.toggle-circle');
const blackBanner = document.getElementById("blackBanner");

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        toggleCircle.classList.remove('moon-icon');
        toggleCircle.classList.add('sun-icon');
        banner.style.display = "none"
        blackBanner.style.display = "flex"
    } else {
        toggleCircle.classList.remove('sun-icon');
        toggleCircle.classList.add('moon-icon');
        banner.style.display = "flex"
                blackBanner.style.display = "none"
    }
});