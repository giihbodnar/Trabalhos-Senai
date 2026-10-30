
let pesoPecas = 150
let numeroPecas = 20
let nomePeca = "Martelo"

if(pesoPecas >= 100) {
    console.log("Pode cadastrar a peca")
} else {
    console.log("Peso insuficiente")
}

if (numeroPecas >= 30) {
    console.log("impossivel cadastrar, numero pecas excedido")
} else {
    console.log("Cadastro permitido")
}

if (nomePeca.length < 3) {
    console.log ("Numero de caracateres insuficiente")
} else {
    console.log("Nome adequado de acordo com as diretivas")
}