function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

function executarMaior() {
  let a = Number(document.getElementById("n1").value);
  let b = Number(document.getElementById("n2").value);
  let c = Number(document.getElementById("n3").value);

  document.getElementById("res1").innerText =
    "Maior: " + maiorNumero(a, b, c);
}

function ordemCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

function executarOrdem() {
  let a = Number(document.getElementById("c1").value);
  let b = Number(document.getElementById("c2").value);
  let c = Number(document.getElementById("c3").value);

  document.getElementById("res2").innerText =
    "Ordem: " + ordemCrescente(a, b, c);
}

function ehPalindromo(str) {
  let limpa = str.toLowerCase().replace(/\s+/g, "");
  let invertida = limpa.split("").reverse().join("");
  return limpa === invertida;
}

function executarPalindromo() {
  let texto = document.getElementById("texto").value;

  document.getElementById("res3").innerText =
    ehPalindromo(texto) ? "É palíndromo" : "Não é palíndromo";
}

function verificarSubconjunto(p1, p2) {
  if (!p1 || !p2) return "erro";

  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();

  return p1.includes(p2)
    ? "é um subconjunto"
    : "não é um subconjunto";
}

function executarSubconjunto() {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;

  document.getElementById("res4").innerText =
    verificarSubconjunto(p1, p2);
}

function diaDaSemana(data) {
  const dias = [
    "Domingo", "Segunda-feira", "Terça-feira",
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];

  let partes = data.split("-");
  let d = new Date(partes[0], partes[1] - 1, partes[2]);

  return dias[d.getDay()];
}

function executarData() {
  let data = document.getElementById("data").value;

  document.getElementById("res5").innerText =
    "Dia: " + diaDaSemana(data);
}