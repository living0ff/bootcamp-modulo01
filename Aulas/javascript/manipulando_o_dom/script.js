'use strict'

function clicado() {

    //getById
    var nome = document.getElementById('txtNome');
    console.log(nome.value);

    //getByClass
    let classes = document.getElementsByClassName('lista');
    for (var i = 0; i < classes.length; i++) {
        console.log(classes[i])

    }
}