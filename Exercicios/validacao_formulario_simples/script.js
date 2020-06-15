'use strict'


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('formularioCadastro').addEventListener('submit', (event) => {

    var retornovalores = valoresUsuario();

    if (!validar(retornovalores)) {
      event.preventDefault();
    }
  });
});


function valoresUsuario() {
  var obj = {
    nome: document.getElementById('txtNome').value,
    email: document.getElementById('txtEmail').value,
    senha: document.getElementById('txtSenha').value,
    confirmarsenha: document.getElementById('txtConfirmarSenha').value,
    datanas: document.getElementById('txtDataNascimento').value,
    genero: document.getElementById('txtSexo').value,
    infousuario: document.getElementById('txtInfo').value,
  };

  return obj
}

function validar(retornovalores) {

  /*VARIAVEIS UTILIZADAS NO CODIGO*/
  let filtroemail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let datanascimento = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

  var erros = [];


  /*VALIDAÇAO DO NOME*/
  if (retornovalores.nome.length < 3 || retornovalores.nome.length > 50) {
    erros.push('Informe um nome válido. Mínimo de 3 caracteres e máximo de 50 caracteres.')
    document.getElementById('txtNome').classList.add('invalido');
  } else {
    document.getElementById('txtNome').classList.remove('invalido');
  } if (retornovalores.nome.length >= 3 && retornovalores.nome.length < 50) {
    document.getElementById('txtNome').classList.add('valido');
  } else {
    document.getElementById('txtNome').classList.remove('valido')
  }
  /*VALIDAÇAO DA SENHA*/
  if (retornovalores.senha.length < 7 || retornovalores.senha.length > 100) {
    erros.push('Informe uma senha válida. Mínimo de 7 e máximo de 100 caracteres.')
    document.getElementById('txtSenha').classList.add('invalido');
  } else {
    document.getElementById('txtSenha').classList.remove('invalido');
  }
  if (retornovalores.senha.length >= 7 && retornovalores.senha.length < 100) {
    document.getElementById('txtSenha').classList.add('valido');
  } else {
    document.getElementById('txtSenha').classList.remove('valido');
  }
  /*CONFIRMAÇÃO DE SENHA */
  if (retornovalores.confirmarsenha < 1 || retornovalores.confirmarsenha != retornovalores.senha) {
    erros.push('Senhas informadas diferentes.')
    document.getElementById('txtConfirmarSenha').classList.add('invalido');
  } else
    document.getElementById('txtConfirmarSenha').classList.remove('invalido')

  if (retornovalores.confirmarsenha == retornovalores.senha && retornovalores.confirmarsenha > 1) {
    document.getElementById('txtConfirmarSenha').classList.add('valido');
  } else {
    document.getElementById('txtConfirmarSenha').classList.remove('valido');
  }

  /*VALIDAÇÃO DE E-MAIL*/
  if (!filtroemail.test(retornovalores.email)) {
    erros.push('Informe um email válido.')
    document.getElementById('txtEmail').classList.add('invalido');
  } else {
    document.getElementById('txtEmail').classList.remove('invalido');
  } if (filtroemail.test(retornovalores.email)) {
    document.getElementById('txtEmail').classList.add('valido');
  } else {
    document.getElementById('txtEmail').classList.remove('valido');
  }
  /*VALIDAÇÃO DE GENERO */
  if (retornovalores.genero == '') {
    erros.push('Informe um gênero.')
    document.getElementById('txtSexo').classList.add('invalido');
  } else {
    document.getElementById('txtSexo').classList.remove('invalido');
  }
  if (retornovalores.genero == 'f' || retornovalores.genero == 'm') {
    document.getElementById('txtSexo').classList.add('valido');
  } else {
    document.getElementById('txtSexo').classList.remove('valido');
  }

  /*VALIDAÇÃO DATA DE NASCIMENTO DO TIPO INPUT TEXT*/
  if (!datanascimento.test(retornovalores.datanas)) {
    erros.push('Data de nascimento invalida.')
    document.getElementById('txtDataNascimento').classList.add('invalido');
  } else {
    document.getElementById('txtDataNascimento').classList.remove('invalido');
  } if (datanascimento.test(retornovalores.datanas)) {
    document.getElementById('txtDataNascimento').classList.add('valido');
  } else {
    document.getElementById('txtDataNascimento').classList.remove('valido');
  }

  /*VERIFICAÇAO DE ERROS*/
  if (erros.length > 0) {
    var listaerros = document.getElementById('listaerros');
    var ul = document.createElement('ul');
    listaerros.innerHTML = ''

    for (let i = 0; i < erros.length; i++) {
      var li = document.createElement('li');
      li.innerHTML = erros[i];
      ul.appendChild(li);
    }
    listaerros.appendChild(ul);
  } else {
    return true
  }
}