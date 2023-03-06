// script da aplicação
document.getElementById("menu-button").addEventListener("click", menuHamburger);

function menuHamburger() {
    var x = document.getElementById("links");
    console.log(x.style.display);
    if(x.style.display === block) {
        console.log("BLOCK");
    } else {
        console.log("NO BLOCK");
    }
}