function valor (valu) {
    document.getElementById('result').value += valu
}

function deleted () {
    document.getElementById('result').value = " "
}

function calcular () {
    let = result = document.getElementById('result').value
    try {
        let operacion = evaluar(result);
       document.getElementById('result').value = operacion
        
    } catch (e) {
       document.getElementById('result').value = "ERROR"
    } 
}

function borrarDigito () {
    let valorResult = document.getElementById('result');
    valorResult.value = valorResult.value.slice(0, -1);
}

function evaluar (expresion) {
    return Function('"use strict";return (' + expresion + ')')();
}

function gray() {
    let body = document.body;
    body.style.backgroundColor="#4c4c4c" 
    body.style.color="white"
}

function white() {
    let body = document.body;
    body.style.backgroundColor="white" 
    body.style.color="black"
}

function blue() {
    let body = document.body;
    body.style.backgroundColor="#004085"
    body.style.color="white"
}