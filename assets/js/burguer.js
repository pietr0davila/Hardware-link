const xmark = document.querySelector("i#close-icon");
const menu = document.querySelector("i#burguer-icon");
const menu_list = document.querySelector("div#collapsed");
const menu_overflow = document.querySelector("div#overflow-menu");
let openmenu = false;

menu.addEventListener("click", function() {
    if (!openmenu) {
        menu_list.style.top = "0";
        menu.style.top = "-40%";
        menu_overflow.style.display = "block";
        menu_overflow.style.opacity = "1";
        xmark.style.display = "block";
        openmenu = !openmenu;
    }
});

xmark.addEventListener("click", function() {
    if (openmenu) {
        menu_list.style.top = "-40%";
        xmark.style.display = "none";
        menu.style.top = "0";
        menu_overflow.style.opacity = "0";
        setTimeout(() => {
            menu_overflow.style.display = "none";
        }, 300);
        openmenu = !openmenu;
    }
});
