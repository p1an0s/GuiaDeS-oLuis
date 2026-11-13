
// TROCAR FUNDO
function TrocarFundo() {
    document.body.classList.toggle("modo-escuro");

    let botao = document.getElementById("trocaDeFundo");

    if (document.body.classList.contains("modo-escuro")) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
}


// CURTIR
function Curtir(botao) {

    let curtidas = parseInt(botao.getAttribute("data-curtidas")) || 0;

    curtidas++;

    botao.setAttribute("data-curtidas", curtidas);
    botao.textContent = `Curtidas: ${curtidas}`;
}


// FORMULÁRIO
const formulario = document.getElementById("formulario");

const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const mensagemInput = document.getElementById("mensagem");

const aviso = document.getElementById("aviso");


formulario.addEventListener("submit", function(event) {

    // Impede o envio automático
    event.preventDefault();

    // Array que armazenará os erros
    let erros = [];


    // Verificação do campo nome
    if (nomeInput.value.trim() === "") {

        erros.push("O campo nome está vazio.");

    }


    // Verificação do campo email
    if (emailInput.value.trim() === "") {

        erros.push("O campo email está vazio.");

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {

        erros.push("O campo email não é válido. Verifique o endereço digitado.");

    }


    // Verificação do campo mensagem
    if (mensagemInput.value.trim() === "") {

        erros.push("O campo mensagem está vazio.");

    } else if (mensagemInput.value.trim().length < 5) {

        erros.push("O campo mensagem deve ter pelo menos 5 caracteres.");

    }


    // Verificação final
    if (erros.length > 0) {

        aviso.textContent = erros.join("\n");
        aviso.style.color = "red";

    } else {

        aviso.textContent = "Formulário enviado com sucesso!";
        aviso.style.color = "green";

        formulario.reset();
    }

});

function MostraReceita(idReceita) {

    let receita = document.getElementById(idReceita);

    if (receita) {
        receita.hidden = !receita.hidden;
    }
}