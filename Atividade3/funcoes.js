function mediaAritmetica(){
    
    let nome = prompt("Digite seu nome: ");
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    let num3 = parseFloat(prompt("Digite o terceiro número: "));

    alert(`A média da nota do aluno ${nome} na disciplina de Matemática é: ${(num1 + num2 + num3) / 3}`);
}

function operacoesNumeros(){
    let produto;;
    
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    alert("A soma é: " + (num1 + num2));
    alert("A subtração é: " + (num2 - num1));
    alert("O produto é: " + (num1 * num2));
    alert("A divisão é: " + (num1 / num2));
    alert("O resto da divisão é: " + (num1 % num2));
}