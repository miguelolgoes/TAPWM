function verificarTriangulo() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  let resultado = document.getElementById("resultado");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultado.innerText = "Por favor, insira apenas números válidos.";
    return;
  }

  if (Math.abs(b - c) < a && a < b + c &&
      Math.abs(a - c) < b && b < a + c &&
      Math.abs(a - b) < c && c < a + b) {

    if (a === b && b === c) {
      resultado.innerText = "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
      resultado.innerText = "Triângulo Isósceles";
    } else {
      resultado.innerText = "Triângulo Escaleno";
    }

  } else {
    resultado.innerText = "Os valores NÃO formam um triângulo.";
  }
}