// Função para exibir na tela
function mostrarFuncionario(titulo, funcionario) {
    const div = document.getElementById("resultado");

    div.innerHTML += `
        <div class="card">
            <h3>${titulo}</h3>
            <p><strong>Matrícula:</strong> ${funcionario.matricula}</p>
            <p><strong>Nome:</strong> ${funcionario.nome}</p>
            <p><strong>Função:</strong> ${funcionario.funcao}</p>
        </div>
    `;
}

// forma — Objeto literal
const Funcionario1 = {
    matricula: 123,
    nome: "João Silva",
    funcao: "Desenvolvedor"
};

// forma — new Object()
const Funcionario2 = new Object();
Funcionario2.matricula = 456;
Funcionario2.nome = "Maria Souza";
Funcionario2.funcao = "Designer";

// forma — Função construtora
function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

const Funcionario3 = new Funcionario(789, "Carlos Lima", "Gerente");

// Exibir na tela
mostrarFuncionario("Forma 1 - Objeto Literal", Funcionario1);
mostrarFuncionario("Forma 2 - new Object()", Funcionario2);
mostrarFuncionario("Forma 3 - Função Construtora", Funcionario3);