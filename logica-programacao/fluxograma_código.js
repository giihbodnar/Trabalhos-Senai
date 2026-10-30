
let pergunta = require('prompt-sync')()
console.log("FAÇA SEU CADASTRO")

let cadastro;
let data_atual = new Date(2022, 05, 16);
let data_evento = new Date(2022, 07, 15);
let maior_idade = new Date(18, 0, 0);
let participantes = 90;

//data do evento
if (data_atual>data_evento) {
    console.log("Infelizmente seu cadastro não pode ser efetuado, pois a data do evento já passou :(")
    precess.exit(0)
}

//idade

let idade = pergunta("Informe a sua idade:")
    if (idade >=18) {
        console.log("Você possui a idade mínima necessária para o evento! :)")
    } else {
        console.log("Infelizmente seu cadastro não pode ser efetuado, pois você não possui a idade mínima necessária para o evento!")
        precess.exit(0)
    }


//participantes
if (participantes > 100) {
    console.log("Infelizmente seu cadastro não pode ser efetuado, pois o limite total de pessoas foi excedido :(")
} else {
    console.log("Cadastro finalizado!")
}









