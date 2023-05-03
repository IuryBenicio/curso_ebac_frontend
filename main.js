$(document).ready(function(){
    $('form #CPF').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    });

    $('form #CEP').mask('00000-000',{
        placeholder: '00000-000'
    });

    $('form #telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CEP: {
                required: true
            },
            CPF: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: "por favor insira seu nome",
            telefone: "por favor insira seu telefone",
            email: "por favor insira seu email",
            CEP: "por favor insira seu CEP",
            CPF: "por favor insira seu CPF",
            endereco: "por favor insira seu endereço"
        }
    })
})