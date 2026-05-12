// Função para calcular IMC
function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (!altura || !peso) {
        document.getElementById("resultado").innerHTML = "Preencha todos os campos!";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Magreza (Grau 0)";
    } else if (imc < 25) {
        classificacao = "Normal (Grau 0)";
    } else if (imc < 30) {
        classificacao = "Sobrepeso (Grau I)";
    } else if (imc < 40) {
        classificacao = "Obesidade (Grau II)";
    } else {
        classificacao = "Obesidade Grave (Grau III)";
    }

    document.getElementById("resultado").innerHTML =
        `IMC: ${imc.toFixed(2)} <br> Classificação: ${classificacao}`;
}

/////////////////////////////////////////////////////////////
// OBJETO FUNCIONARIO - 3 FORMAS DIFERENTES
/////////////////////////////////////////////////////////////

// 1️⃣ Forma literal
let funcionario1 = {
    matricula: "001",
    nome: "João",
    funcao: "Analista"
};
console.log(funcionario1);

// 2️⃣ Usando função construtora
function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

let funcionario2 = new Funcionario("002", "Maria", "Gerente");
console.log(funcionario2);

// 3️⃣ Usando Object()
let funcionario3 = new Object();
funcionario3.matricula = "003";
funcionario3.nome = "Carlos";
funcionario3.funcao = "Desenvolvedor";

console.log(funcionario3);