const btnLogin = document.getElementById('btn-login');
const checkBox = document.getElementById('agreement');

function validaLogin() {
  const inputEmail = document.getElementById('email-login');
  const inputSenha = document.getElementById('senha-login');
  if (inputEmail.value === 'trybe@teste.com' || inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
function btnAtivar() {
  const checkBoxNow = document.getElementById('agreement');
  if (checkBoxNow.checked === true) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

btnLogin.addEventListener('click', validaLogin);
checkBox.addEventListener('change', btnAtivar);
