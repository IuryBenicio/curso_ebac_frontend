const form = document.getElementById('form-AeB');
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

    const inputA = document.getElementById("A").value;
    const inputB = document.getElementById("B").value;

    const valorA = parseFloat(inputA);
    const valorB = parseFloat(inputB);

    const contMsgSucesso =  document.querySelector('.msg-sucesso');
    const contMsgErro = document.querySelector('.msg-erro');

    const mensagemErro = `<b> ${valorA} não é maior que <b>${valorB}</b> `
    const mensagemSucesso = `<b>${valorA}</b> é maior que <b>${valorB}</b>`;

    console.log(inputA + inputB);
    if(formValido(valorA, valorB)){
        contMsgSucesso.innerHTML = mensagemSucesso;
        contMsgSucesso.style.display = 'block';
        console.log(formValido.value + ' foi validado');
        contMsgErro.style.display = 'none';

        const inputA = ' ';
        const inputB = ' ';
    } 
    else{
        contMsgErro.innerHTML = mensagemErro;
        contMsgErro.style.display = 'block';
        console.log(formValido.value + ' n foi validado');
        contMsgSucesso.style.display = 'none';
    }
})

