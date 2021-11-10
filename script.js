const btnLogin = document.getElementById("btn-login");
const btnEnviar = document.getElementById("submit-btn");
const checkBox = document.getElementById("agreement");

function validaLogin() {
  const inputEmail = document.getElementById("email-login");
  const inputSenha = document.getElementById("senha-login");
  if (inputEmail.value === "trybe@teste.com" || inputSenha.value === "123456") {
    alert('Olá, Tryber!');
  } else {
    alert("Email ou senha inválidos.");
  }
}
btnEnviar.disabled = true;
function btnAtivar() {
  if (checkBox.disable === false) {
    btnEnviar.disabled = false;
  } else if (checkBox.disable === true) {
    btnEnviar.disable = true;
  }
}
btnLogin.addEventListener("click", validaLogin);
btnEnviar.addEventListener("click", btnAtivar);
