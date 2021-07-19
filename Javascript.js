var botao = document.querySelector("button")
console.log(botao)

function  pulaLinha() {
document.write("<br>")
}
function mostra(frase) {
 document.write(frase)
 pulaLinha()
 
}
//function CalculaImc(altura,peso) {
//return peso/ (altura * altura)
//}
botao.addEventListener("click", function(event){
    event.preventDefault(event)
  var dados = document.querySelector("#inputs-dados")
  //console.log(dados)
  var peso  = dados.peso.value
  var altura = dados.altura.value

  
    
var nome = prompt("Informe o seu nome");


var imc = Math.round(CalculaImc(altura, peso));

mostra(nome,",o seu IMC é " + imc);
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
   var imcOtimo = document.querySelector("#IMC-otimo")
   
   imcOtimo.style.color = "green"
}
})
function CalculaImc(altura,peso) {
    return peso/ (altura * altura)
    }