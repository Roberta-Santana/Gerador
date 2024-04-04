let numeroEntrada=0;
let numeroSaida=0;
let listaNumerosEntrada = [];
let listaNumeroSaida = [];
let limiteMaximo = 14;

function gerarNumeroAleatorio(){
for(var i=0; i < 5 ;i++){
    let numeroLimite = parseInt(Math.random()*(15-0));
    numeroEntrada = parseInt(Math.random()*7);
    while(listaNumerosEntrada.includes(numeroEntrada)){
        numeroEntrada = parseInt(Math.random()*7);
    } 
    listaNumerosEntrada.push(numeroEntrada);
    numeroSaida=numeroLimite-numeroEntrada;
    listaNumeroSaida.push(numeroSaida);
}
var paragrafoEntrada = document.getElementById('entrada__valores');
paragrafoEntrada.innerHTML = listaNumerosEntrada.join(' , ');   
var paragrafoSaida = document.getElementById('saida__valores');
paragrafoSaida.innerHTML = listaNumeroSaida.join(' , ');
}