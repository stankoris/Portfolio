const listButton = document.getElementById("listButton");
const listMobile = document.getElementById("listMobile");
const closeButton = document.getElementById("closeButton");
const mainTag = document.querySelector('main');

let list_open = false;

listButton.addEventListener("click", () => {
    list_open = !list_open;

    if (list_open) {
        listMobile.style.transform = "translateX(0%)";
        listButton.style.display = "none";
        mainTag.style.zIndex = "0";
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
        mainTag.style.zIndex = "2000";
    }
});