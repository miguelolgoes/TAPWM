function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return this.base * this.altura;
    }
}

let base = parseFloat(prompt("Digite a base do retângulo:"));
let altura = parseFloat(prompt("Digite a altura do retângulo:"));

let retangulo = new Retangulo(base, altura);

let area = retangulo.calcularArea();

class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(valor) {
        this._nomeCorrentista = valor;
    }

    get banco() {
        return this._banco;
    }

    set banco(valor) {
        this._banco = valor;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(valor) {
        this._numeroConta = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);

        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);

        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(valor) {
        this._juros = valor;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(valor) {
        this._dataVencimento = valor;
    }
}

let nomeCorrente = prompt("Nome do correntista (Conta Corrente):");
let bancoCorrente = prompt("Banco:");
let numeroCorrente = prompt("Número da conta:");
let saldoCorrente = parseFloat(prompt("Saldo:"));
let saldoEspecial = parseFloat(prompt("Saldo especial:"));

let contaCorrente = new Corrente(
    nomeCorrente,
    bancoCorrente,
    numeroCorrente,
    saldoCorrente,
    saldoEspecial
);

let nomePoupanca = prompt("Nome do correntista (Poupança):");
let bancoPoupanca = prompt("Banco:");
let numeroPoupanca = prompt("Número da conta:");
let saldoPoupanca = parseFloat(prompt("Saldo:"));
let juros = prompt("Juros:");
let dataVencimento = prompt("Data de vencimento:");

let contaPoupanca = new Poupanca(
    nomePoupanca,
    bancoPoupanca,
    numeroPoupanca,
    saldoPoupanca,
    juros,
    dataVencimento
);

document.getElementById("resultado").innerHTML = `
    <h2>1 - Retângulo</h2>
    <p><strong>Base:</strong> ${retangulo.base}</p>
    <p><strong>Altura:</strong> ${retangulo.altura}</p>
    <p><strong>Área:</strong> ${area}</p>

    <hr>

    <h2>2 - Conta Corrente</h2>
    <p><strong>Nome:</strong> ${contaCorrente.nomeCorrentista}</p>
    <p><strong>Banco:</strong> ${contaCorrente.banco}</p>
    <p><strong>Número da Conta:</strong> ${contaCorrente.numeroConta}</p>
    <p><strong>Saldo:</strong> R$ ${contaCorrente.saldo}</p>
    <p><strong>Saldo Especial:</strong> R$ ${contaCorrente.saldoEspecial}</p>

    <hr>

    <h2>3 - Conta Poupança</h2>
    <p><strong>Nome:</strong> ${contaPoupanca.nomeCorrentista}</p>
    <p><strong>Banco:</strong> ${contaPoupanca.banco}</p>
    <p><strong>Número da Conta:</strong> ${contaPoupanca.numeroConta}</p>
    <p><strong>Saldo:</strong> R$ ${contaPoupanca.saldo}</p>
    <p><strong>Juros:</strong> ${contaPoupanca.juros}</p>
    <p><strong>Data de Vencimento:</strong> ${contaPoupanca.dataVencimento}</p>
`;