const janela = document.getElementById('janela');
const statusTexto = document.getElementById('status');

let quebrada = false;

janela.addEventListener('mouseover', () => {
    if (!quebrada) {
        janela.src = 'images/janelaAberta.webp';
        statusTexto.textContent = 'Janela Aberta';
    }
});

janela.addEventListener('mouseout', () => {
    if (!quebrada) {
        janela.src = 'images/janelaFechada.jpg';
        statusTexto.textContent = 'Janela Fechada';
    }
});

janela.addEventListener('click', () => {
    janela.src = 'images/janelaQuebrada.jfif';
    statusTexto.textContent = 'Janela Quebrada';
    quebrada = true;
});