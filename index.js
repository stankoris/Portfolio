const listButton = document.getElementById("listButton");
const listMobile = document.getElementById("listMobile");
const closeButton = document.getElementById("closeButton");
const mainTag = document.querySelector('main');
const banner = document.getElementById("banner");
const blackBanner = document.getElementById("blackBanner");
const body = document.body;

let list_open = false;

listButton.addEventListener("click", () => {
    list_open = !list_open;

    if (list_open) {
        listMobile.style.transform = "translateX(0%)";
        listButton.style.display = "none";
        mainTag.style.zIndex = "0";
        banner.style.display = "none";
    } else {
        closeMenu();
    }
});

closeButton.addEventListener("click", closeMenu);

function closeMenu() {
    if (list_open) {
        list_open = false;
        listMobile.style.transform = "translateX(-100%)";
        listButton.style.display = "block";
        banner.style.display = "flex";
        mainTag.style.zIndex = "2000";
    }
}

// KOD ZA PROMENU TEME

const themeToggleBtn = document.getElementById('theme-toggle');
const toggleCircle = themeToggleBtn.querySelector('.toggle-circle');
const savedTheme = localStorage.getItem('theme');

function updateTheme(isLightTheme) {
    if (isLightTheme) {
        body.classList.add('light-theme');
        toggleCircle.classList.remove('moon-icon');
        toggleCircle.classList.add('sun-icon');
        banner.style.display = "none";
        blackBanner.style.display = "flex";
    } else {
        body.classList.remove('light-theme');
        toggleCircle.classList.remove('sun-icon');
        toggleCircle.classList.add('moon-icon');
        banner.style.display = "flex";
        blackBanner.style.display = "none";
    }
}

if (savedTheme === 'light-theme') {
    updateTheme(true);
} else {
    updateTheme(false);
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light-theme' : 'root');
    updateTheme(isLight);
});
