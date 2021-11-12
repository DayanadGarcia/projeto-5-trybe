const btnLogin = document.getElementById('btn-login');
const checkBox = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const areaTexto = document.getElementById('textarea');

const form = document.getElementById('evaluation-form');
const divFormulario = document.getElementById('formulario');

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
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

function setName() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const newName = document.createElement('h3');
  newName.innerText = `Nome: ${nome} ${sobrenome}`;
  console.log(newName);

  form.appendChild(newName);
}

function setEmail() {
  const email = document.getElementById('input-email').value;
  const newEmail = document.createElement('h3');
  newEmail.innerText = `Email: ${email}`;
  form.appendChild(newEmail);
}

function setHouse() {
  const casa = document.getElementById('house').value;
  const newHouse = document.createElement('h3');
  newHouse.innerText = `Casa: ${casa}`;
  form.appendChild(newHouse);
}

function setFamily() {
  const radios = document.getElementsByName('family');
  const checkedFamily = [];
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      checkedFamily.push(radios[i].value);
    }
  }
  const newFamily = document.createElement('h3');
  newFamily.innerText = `Família: ${checkedFamily}`;
  form.appendChild(newFamily);
}
function setSubject() {
  const checks = document.getElementsByName('checkbox');
  const checkedMaterias = [];
  for (let i = 0; i < checks.length; i += 1) {
    if (checks[i].checked) {
      checkedMaterias.push(checks[i].value);
    }
  }
  const newMatter = document.createElement('h3');
  newMatter.innerText = `Matérias: ${checkedMaterias.join(', ')}`;
  form.appendChild(newMatter);
}

function setEvaluation() {
  const evaluation = document.getElementsByName('rate');
  const checkedEvaluation = [];
  for (let i = 0; i < evaluation.length; i += 1) {
    if (evaluation[i].checked) {
      checkedEvaluation.push(evaluation[i].value);
    }
  }
  const newEvaluation = document.createElement('h3');
  newEvaluation.innerText = `Avaliação: ${checkedEvaluation}`;
  form.appendChild(newEvaluation);
}

function setObs() {
  const obs = document.getElementById('textarea').value;
  const newObs = document.createElement('h3');
  newObs.innerText = `Observações: ${obs}`;
  form.appendChild(newObs);
}

function submit(event) {
  event.preventDefault();

  divFormulario.style.display = 'none';
  setName();
  setEmail();
  setHouse();
  setFamily();
  setSubject();
  setEvaluation();
  setObs();
}

function contador(event) {
  const contagem = document.getElementById('counter');
  const tamanho = areaTexto.getAttribute('maxlength');
  const evento = event.target;
  const atualValor = evento.value.length;
  contagem.innerHTML = `${tamanho - atualValor}`;
}

btnLogin.addEventListener('click', validaLogin);
checkBox.addEventListener('change', btnAtivar);
btnEnviar.addEventListener('click', submit);
areaTexto.addEventListener('input', contador);
