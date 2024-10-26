function resumir() {
    const nombre = document.getElementById('nombre').value
    const email = document.getElementById('email').value
    const edad = document.getElementById('edad').value    
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fecha = document.getElementById('nacimiento').value    
    const color = document.getElementById('color').value     

    const resumen = document.getElementById('resumen')

    resumen.innerText = 
    '\nNombre: ' + nombre + 
    '\nCorreo electrónico: ' + email +
    '\nEdad: ' + edad +
    '\nGénero: ' + genero +
    '\nFecha de nacimiento: ' + fecha +
    '\nColor favorito: ' + color
}