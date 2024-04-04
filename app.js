let numeroEntrada=0;
let numeroSaida=0;
let listaNumerosEntrada = [];
let listaNumeroSaida = [];
let limiteMaximo = 14;

function gerarNumeroInteiroAleatorio(min, max){ /* Gerando um n inteiro aleatório entre dois valores (min, max) */
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1 ))+min;
}

function gerarNumeroAleatorio(){
for(var i=0; i < 5 ;i++){
    let numeroLimite = gerarNumeroInteiroAleatorio(0,15);
    numeroEntrada = parseInt(Math.random()*7);
    while(listaNumerosEntrada.includes(numeroEntrada)){
        numeroEntrada = parseInt(Math.random()*7);
    } 

    listaNumerosEntrada.push(numeroEntrada);
    numeroSaida=numeroLimite-numeroEntrada;

    if(numeroSaida<0){
        numeroEntrada = parseInt(Math.random()*7);
    }
    listaNumeroSaida.push(numeroSaida);
}
var paragrafoEntrada = document.getElementById('entrada__valores');
paragrafoEntrada.innerHTML = listaNumerosEntrada.join(' , ');   
var paragrafoSaida = document.getElementById('saida__valores');
paragrafoSaida.innerHTML = listaNumeroSaida.join(' , ');
}