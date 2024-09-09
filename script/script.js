const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const nomeErro = document.querySelector("#nome + span.erro");
const emailErro = document.querySelector("#email + span.erro");
const mensagemErro = document.querySelector("#mensagem + span.erro");
const botao = document.getElementById("botao");
const paragrafo = document.querySelector("p");

// const menuBotao = document.getElementById("botaoMenu");
// const navBotao = document.getElementById("botaoNav");

// menuBotao.addEventListener('click', function() {
//     navBotao.style.display('block');
// });

nome.addEventListener("input", (event) => {
    if (nome.validity.valid) {
        nomeErro.textContent = "";
        nomeErro.className = "erro";
    } else {
        mostrarErro(nome, nomeErro);
    }
});

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailErro.textContent = "";
        emailErro.className = "erro";
    } else {
        mostrarErro(email, emailErro)
    }
})

mensagem.addEventListener("input", (event) => {
  if (mensagem.validity.valid) {
      mensagemErro.textContent = "";
      mensagemErro.className = "erro";
  } else {
      mostrarErro(mensagem, mensagemErro);
  }
});

form.addEventListener("submit", (event) => {
    if (!nome.validity.valid) {
        mostrarErro(nome, nomeErro);
        event.preventDefault();
    } else if (!email.validity.valid) {
        mostrarErro(email, emailErro);
        event.preventDefault();
    } else if (!mensagem.validity.valid){
        mostrarErro(mensagem, mensagemErro);
        event.preventDefault();
    }
});

function mostrarErro(input, erroElement) {
    if (input.validity.valueMissing) {
        if (input.id === "nome") {
            erroElement.textContent = `Você precisa inserir um ${input.id}.`;
        } else if (input.id === "email") {
            erroElement.textContent = 'Você precisa inserir um e-mail.';
        } else if (input.id === "mensagem") {
          erroElement.textContent = 'Você precisa inserir uma mensagem.';
        }
    } else if (input.validity.typeMismatch) {
        erroElement.textContent = 'Formato de e-mail inválido.';
    } else if (input.validity.tooShort) {
        if (input.id === "nome") {
            erroElement.textContent = `Nome precisa ter no mínimo ${input.minLength} caracteres.`;
        } else if (input.id === "mensagem") {
            erroElement.textContent = `Nome precisa ter no mínimo ${input.minLength} caracteres.`;
        }
    }

    erroElement.className = "erro ativo";
}

botao.addEventListener("click", envio);

function envio() {
    if (email.validity.valueMissing) {
        emailErro.textContent = "Você precisa inserir um email.";
    } else if (email.validity.typeMismatch) {
        emailErro.textContent = 'Formato de e-mail inválido.';
    } else {
        paragrafo.textContent = "Mensagem enviada!";
    }
}