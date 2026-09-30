const mountainone = document.querySelector("#mountainblue_01");
const mountaintwo = document.querySelector("#mountainred_02");
const plants = document.querySelector("#plants");
const arboluno = document.querySelector("#treesdown_01");
const arboldos = document.querySelector("#treesup_02");
const hombre = document.querySelector("#man_01");
const titulo = document.querySelector("#titulo");

window.addEventListener("scroll", () => { 
    let scroll = window.scrollY;

    if (mountainone) mountainone.style.left = scroll * 1 + "px";
    if (mountaintwo) mountaintwo.style.left = scroll * 0.5 + "px";

    if (arboldos) {
        arboldos.style.bottom = scroll * -2 + "px";
        arboldos.style.right = scroll * 2 + "px";
    }

    if (arboluno) arboluno.style.right = scroll * 2 + "px";
    if (hombre) hombre.style.right = scroll * 1 + "px";
    if (plants) plants.style.right = scroll * 2 + "px";
    if (titulo) titulo.style.right = scroll * 3 + "px";
});