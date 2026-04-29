

function calcular(a, b, c) {
  const soma = a + b + c;
  const quad1 = a * a;
  const quad2 = b * b;

  return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quad1} e o quadrado do segundo é: ${quad2}`;
}

function executarEx1() {
  const numeros = [
    Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value),
    Number(document.getElementById("n3").value)
  ];

  const resultado = calcular.apply(null, numeros);

  document.getElementById("resultado").innerText = resultado;
}

function gerarPalavras(letras) {
  const palavras = [];

  function embaralhar(array) {
    let copia = array.slice();

    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
  }

  while (palavras.length < 10) {
    const nova = embaralhar(letras).join("").toUpperCase();

    if (!palavras.includes(nova)) {
      palavras.push.apply(palavras, [nova]);
    }
  }

  return palavras;
}

function executarEx2() {
  const letras = [
    document.getElementById("l1").value.trim(),
    document.getElementById("l2").value.trim(),
    document.getElementById("l3").value.trim(),
    document.getElementById("l4").value.trim(),
    document.getElementById("l5").value.trim()
  ];

  if (letras.some(letra => letra === "")) {
    alert("Por favor, preencha todas as 5 letras.");
    return;
  }

  const apenasLetras = /^[a-zA-Z]$/;

  if (!letras.every(letra => apenasLetras.test(letra))) {
    alert("Digite apenas uma letra em cada campo (sem números ou símbolos).");
    return;
  }

  const palavras = gerarPalavras(letras);

  document.getElementById("resultado").innerText =
    "Palavras geradas:\n" + palavras.join("\n");
}