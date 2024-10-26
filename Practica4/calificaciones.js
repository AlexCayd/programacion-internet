function evaluar() {
    const calificacion = parseFloat(document.getElementById('inputresultado').value);  
    const resultado = document.getElementById('resultado');
    if (calificacion < 0 || calificacion > 10) {  
        resultado.innerText = 'Calificación fuera de rango (0-10)'
    } else if (calificacion >= 0 && calificacion < 6) {
        resultado.innerText = 'NA'
    } else if (calificacion >= 6 && calificacion < 7.5) {
        resultado.innerText = 'S'
    } else if (calificacion >= 7.5 && calificacion < 9) {
        resultado.innerText = 'B'
    } else if (calificacion >= 9 && calificacion < 10) {
        resultado.innerText = 'MB'
    } else if (calificacion == 10) {
        resultado.innerText = 'LAP'
    }
}
