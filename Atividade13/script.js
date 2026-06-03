const texto = document.getElementById("texto");
const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");

texto.addEventListener("input", () => {
    if (maiusculas.checked) {
        texto.value = texto.value.toUpperCase();
    } else if (minusculas.checked) {
        texto.value = texto.value.toLowerCase();
    }
});

maiusculas.addEventListener("change", () => {
    texto.value = texto.value.toUpperCase();
});

minusculas.addEventListener("change", () => {
    texto.value = texto.value.toLowerCase();
});