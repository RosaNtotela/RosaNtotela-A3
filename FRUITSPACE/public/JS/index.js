const form = document.getElementById('form');

function cadastrar(){

    var pnome = document.getElementById('pnome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('sen').value;
    var confirmar = document.getElementById('conf').value;

    if(pnome !== '' && email !== '' && senha !== '' && confirmar !== ''){
        alert('Usuario Cadastrado!')
    }
}

form.addEventListener('submit', () => {
    cadastrar()
})

