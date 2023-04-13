const form = document.getElementById('form-AeB');

const inputA = document.getElementById("A").value;
const inputB = document.getElementById("B").value;

const valorA = parseFloat(inputA);
const valorB = parseFloat(inputB);

const contMsgSucesso =  document.querySelector('.msg-sucesso');
const contMsgErro = document.querySelector('.msg-erro');

const mensagemErro = `o A que tem por valor <b> ${valorA} não é maior que o B que tem por valor ${valorB}</b> `
const mensagemSucesso = `o A que tem o valor de <b>${valorA}</b> é maior que o valor B de <b>${valorB}</b>`;

function formValido(campoA, campoB){

    if(campoA>campoB){
        return true
    }else if(campoA == campoB){
        return false
    }else{
        return false
    }
} 

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(inputA + inputB);

    if(formValido(valorA, valorB)){
        contMsgSucesso.innerHTML = mensagemSucesso;
        contMsgSucesso.style.display = 'block';
        console.log(formValido.value + ' foi validado');

        const inputA = ' ';
        const inputB = ' ';
    } 
    else{
        contMsgErro.innerHTML = mensagemErro;
        contMsgErro.style.display = 'block';
        console.log(formValido.value + ' n foi validado');
    }
})
