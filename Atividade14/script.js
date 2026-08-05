function validar() {

    let form = document.nomeForm;

    let nome = form.elements["nome"].value.trim();
    let comentario = form.elements["comentario"].value.trim();
    let pesquisa = form.elements["pesquisa"];

    if (nome.length < 10) {
        alert("O nome deve possuir no mínimo 10 caracteres.");
        form.elements["nome"].focus();
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve possuir no mínimo 20 caracteres.");
        form.elements["comentario"].focus();
        return false;
    }

    let resposta = "";

    for (let i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            resposta = pesquisa[i].value;
            break;
        }
    }

    if (resposta === "") {
        alert("Escolha uma opção na pesquisa.");
        return false;
    }

    if (resposta === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }

    return true;
}