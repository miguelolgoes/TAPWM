function abrirCurso() {
    const curso = document.getElementById("curso").value;

    if (curso === "") {
        return;
    }

    let titulo = "";
    let descricao = "";

    switch (curso) {
        case "ADS":
            titulo = "Análise e Desenvolvimento de Sistemas";
            descricao = "Curso voltado ao desenvolvimento de software, banco de dados, programação e engenharia de software.";
            break;

        case "LOG":
            titulo = "Logística";
            descricao = "Forma profissionais para atuar no planejamento, transporte, armazenagem e distribuição de produtos.";
            break;

        case "MEC":
            titulo = "Manufatura Avançada";
            descricao = "Capacita profissionais para trabalhar com automação, processos industriais e tecnologias de manufatura.";
            break;

        case "POL":
            titulo = "Polímeros";
            descricao = "Curso focado em materiais poliméricos, processos de fabricação e controle de qualidade.";
            break;

        case "GQ":
            titulo = "Gestão da Qualidade";
            descricao = "Ensina técnicas de melhoria contínua, gestão de processos e controle da qualidade.";
            break;

        case "EA":
            titulo = "Eletrônica Automotiva";
            descricao = "Forma profissionais para atuar com sistemas eletrônicos e diagnósticos de veículos.";
            break;
    }

    const confirmar = confirm("Deseja abrir a janela do curso " + titulo + "?");

    if (confirmar) {
        const novaJanela = window.open("", "_blank", "width=600,height=300");

        novaJanela.document.write(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>${titulo}</title>
                <style>
                    body{
                        font-family: Arial, sans-serif;
                        background:#f4f4f4;
                        padding:20px;
                    }
                    h1{
                        color:#b30000;
                    }
                    p{
                        font-size:18px;
                    }
                </style>
            </head>
            <body>
                <h1>${titulo}</h1>
                <p>${descricao}</p>
            </body>
            </html>
        `);

        novaJanela.document.close();
    }

    // Volta o select para a opção inicial
    document.getElementById("curso").selectedIndex = 0;
}