var botao = document.querySelector("button")
var botao2 =  document.querySelector("button")

function  pulaLinha() {
document.write("<br>")
}
function mostra(frase) {
 document.write(frase)
 pulaLinha()
 
}
function CalculaImc(altura,peso) {
return peso/ (altura * altura)
}
var nome = prompt("Informe o seu nome");
//var alturaInformada = prompt(nome + ", informe sua altura");
//var pesoInformado = prompt(nome + ", informe seu peso");

var imc = Math.round(CalculaImc(botao, botao2));

mostra(nome + ", o seu IMC é " + imc);
if(imc < 18.5) {

mostra("Você está abaixo do recomendado")

}
if(imc < 18.5) {

mostra("Você está abaixo do recomendado");

}

if (imc > 24.9) {
mostra("Você esta sobrepeso")
}

if(imc > 35) {

mostra("Você está acima do recomendado");
}
if (imc >= 18.5 && imc <= 24.9) {
 
    mostra("Seu IMC esta otimo")
}