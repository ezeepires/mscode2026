function adicao() {
    const primeiro = document.getElementById('entrada1');
    const segundo = document.getElementById('entrada2');
    const result = Number(primeiro.value) + Number(segundo.value);
    resultado(result);
}

function subtracao() {
    const primeiro = document.getElementById('entrada1');
    const segundo = document.getElementById('entrada2');
    const result = Number(primeiro.value) - Number(segundo.value);
    resultado(result);
}

function multiplicar() {
    const primeiro = document.getElementById('entrada1');
    const segundo = document.getElementById('entrada2');
    const result = Number(primeiro.value) * Number(segundo.value);
    resultado(result);
}

function divisao() {
    const primeiro = document.getElementById('entrada1');
    const segundo = document.getElementById('entrada2');
    const result = Number(primeiro.value) / Number(segundo.value);
    resultado(result);
}

function resultado(result) {
    document.getElementById('resultado').innerText=result;
    
}


