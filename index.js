const listButton = document.getElementById("listButton");
const listMobile = document.getElementById("listMobile");
const closeButton = document.getElementById("closeButton");
const mainTag = document.querySelector('main');
const background = document.getElementById("indexBackground");

let list_open = false;

listButton.addEventListener("click", () => {
    list_open = !list_open;

    if (list_open) {
        listMobile.style.transform = "translateX(0%)";
        listButton.style.display = "none";
        mainTag.style.zIndex = "0";
        background.style.display = "none";
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
        background.style.display = "block";
        mainTag.style.zIndex = "2000";
    }
});