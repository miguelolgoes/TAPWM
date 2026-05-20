// 1. Literal de Objeto
const pessoa1 = {
  nome: "João",
  idade: 20,
  hobby: "tocar violão",
  
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
  }
};

// 2. new Object()
const pessoa2 = new Object();

pessoa2.nome = "Maria";
pessoa2.idade = 25;
pessoa2.hobby = "dançar";

pessoa2.apresentar = function() {
  return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
};

// 3. Função Construtora
function Pessoa(nome, idade, hobby) {
  this.nome = nome;
  this.idade = idade;
  this.hobby = hobby;

  this.apresentar = function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
  };
}

const pessoa3 = new Pessoa("Carlos", 30, "jogar futebol");

// 4. Classe
class PessoaClasse {
  constructor(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
  }
}

const pessoa4 = new PessoaClasse("Ana", 22, "ler livros");

// 5. Object.create()
const modeloPessoa = {
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
  }
};

const pessoa5 = Object.create(modeloPessoa);

pessoa5.nome = "Pedro";
pessoa5.idade = 28;
pessoa5.hobby = "andar de bicicleta";

// 6. Factory Function
function criarPessoa(nome, idade, hobby) {
  return {
    nome,
    idade,
    hobby,

    apresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
  };
}

const pessoa6 = criarPessoa("Juliana", 27, "pintar");

// Colocando os objetos em um array
const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6];

// Exibindo na tela
const resultado = document.getElementById("resultado");

pessoas.forEach((pessoa, index) => {
  resultado.innerHTML += `
    <div class="card">
      <p><strong>Pessoa ${index + 1}:</strong></p>
      <p>${pessoa.apresentar()}</p>
    </div>
  `;
});