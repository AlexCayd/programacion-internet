function evaluar() {
    const numero = parseFloat(document.getElementById('factorialinput').value);  
    const resultado = document.getElementById('resultado');
    
    let factorial = 1, factorialresultado = 1
    
    for(let i = numero; i > 1; i--) {
        factorialresultado *= i;
    }
    
    resultado.innerText = factorialresultado

    if(numero < 0) {
        resultado.innerText = 'No está definido'
    }
}
