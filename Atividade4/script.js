function jogar(escolhaJogador) {
    // Máquina escolhe de 1 a 3
    let escolhaMaquina = Math.floor(Math.random() * 3) + 1;

    let opcoes = {
        1: "Pedra",
        2: "Papel",
        3: "Tesoura"
    };

    let resultado = "";

    if (escolhaJogador === escolhaMaquina) {
        resultado = "Empate!";
    } 
    else if (
        (escolhaJogador === 1 && escolhaMaquina === 3) ||
        (escolhaJogador === 2 && escolhaMaquina === 1) || 
        (escolhaJogador === 3 && escolhaMaquina === 2) 
    ) {
        resultado = "Você venceu!";
    } 
    else {
        resultado = "Você perdeu!";
    }

    alert(
        "Você escolheu: " + opcoes[escolhaJogador] + "\n" +
        "Máquina escolheu: " + opcoes[escolhaMaquina] + "\n\n" +
        resultado
    );
}