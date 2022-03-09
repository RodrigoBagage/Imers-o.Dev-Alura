var nome = "Rodrigo"
var notaDoPrimeiroBimestre = Number(window.prompt("Digite a nota I ")) 
var notaDoSegundoBimestre = Number(window.prompt("Digite a nota II "))
var notaDoTerceiroBimestre = Number(window.prompt("Digite a nota III "))
var notaDoQuartoBimestre = Number(window.prompt("Digite a nota IV "))

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada= notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log(notaFixada)

window.alert("Bem vindo " + nome)
window.alert("A sua média é " + notaFixada)
// isso é um comentário


// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação.
