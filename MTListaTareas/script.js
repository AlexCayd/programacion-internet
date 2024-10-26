function agregartarea() {
    const alertas = document.getElementById('alertas');
    const resultados = document.getElementById('resultados');   
    const input__tarea = document.getElementById('input__tarea').value;   

    alertas.innerHTML = ''; 

    if (input__tarea == '') {
        alertas.innerHTML = '<p class="alerta"> Error: La tarea debe tener nombre </p>';
    } else {
        const nuevaTarea = document.createElement('tr');
        nuevaTarea.innerHTML = `
            <td class="tarea">${input__tarea}</td>
            <td>
                <input type="checkbox" class="completed">
            </td>
        `;
        resultados.appendChild(nuevaTarea);

        const checkbox = nuevaTarea.querySelector('.completed');
        checkbox.addEventListener('change', function() {
            const tarea = nuevaTarea.querySelector('.tarea');
            if (checkbox.checked) {
                tarea.classList.add('tachado');
            } else {
                tarea.classList.remove('tachado');
            }
        });
    }

    limpiar(); 
}

function limpiar() {
    document.getElementById('input__tarea').value = '';
}


function borrarTodo() {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';
}