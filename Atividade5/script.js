let respostas = [];

document.getElementById("formPesquisa").addEventListener("submit", function(e) {
  e.preventDefault();

  if (respostas.length >= 45) {
    alert("Limite máximo de 45 respostas atingido!");
    return;
  }

  const idade = Number(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const opiniao = Number(document.getElementById("opiniao").value);

  respostas.push({ idade, sexo, opiniao });

  document.getElementById("contador").textContent = 
  `Respostas registradas: ${respostas.length} / 45`;

  this.reset();
  alert("Resposta adicionada!");
});

function calcular() {
  if (respostas.length === 0) {
    alert("Nenhuma resposta registrada!");
    return;
  }

  let somaIdade = 0;
  let maior = respostas[0].idade;
  let menor = respostas[0].idade;
  let pessimo = 0;
  let otimoBom = 0;

  let homens = 0;
  let mulheres = 0;
  let outros = 0;

  respostas.forEach(r => {
    somaIdade += r.idade;

    if (r.idade > maior) maior = r.idade;
    if (r.idade < menor) menor = r.idade;

    if (r.opiniao === 1) pessimo++;
    if (r.opiniao === 3 || r.opiniao === 4) otimoBom++;

    if (r.sexo === "masculino") homens++;
    else if (r.sexo === "feminino") mulheres++;
    else outros++;
  });

  let media = somaIdade / respostas.length;
  let porcentagem = (otimoBom / respostas.length) * 100;

  document.getElementById("resultado").innerHTML = `
    Média das idades: ${media.toFixed(2)} <br>
    Idade da pessoa mais velha: ${maior} <br>
    Idade da pessoa mais nova: ${menor} <br>
    Quantidade que respondeu péssimo: ${pessimo} <br>
    Porcentagem de ótimo e bom: ${porcentagem.toFixed(2)}% <br>
    Homens: ${homens} <br>
    Mulheres: ${mulheres} <br>
    Outros: ${outros}
  `;
}