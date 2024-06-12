const xmark = document.querySelector("i#close-icon");
const menu = document.querySelector("i#burguer-icon");
const menu_list = document.querySelector("div#collapsed");
const menu_overflow = document.querySelector("div#overflow-menu");
let openmenu = false;

menu.addEventListener("click", function() {
    if (!openmenu) { // Verifica se o menu não está aberto
        menu_list.style.top = "0"; // Abre o menu
        menu_overflow.style.display = "block";
        setTimeout(() => {
            menu_overflow.style.opacity = "1";
        }, 0);
        xmark.style.display = "block";
        openmenu = true; // Atualiza o estado do menu para aberto
    }
});

xmark.addEventListener("click", function() {
    if (openmenu) { // Verifica se o menu está aberto
        menu_list.style.top = "-50%"; // Fecha o menu
        xmark.style.display = "none";
        menu_overflow.style.opacity = "0";
        setTimeout(() => {
            menu_overflow.style.display = "none";
        }, 300);
        openmenu = false; // Atualiza o estado do menu para fechado
    }
});
