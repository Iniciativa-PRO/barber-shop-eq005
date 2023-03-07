// script da aplicação
document.getElementById("menu-button").addEventListener("click", menuHamburger);

function menuHamburger() {
    var x = document.getElementById("links");
    console.log(x.style.display);
}