function submit() {
    const alertas = document.getElementById('alertas')
    const tbody = document.getElementById('tbody')
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const checkboxes = document.querySelectorAll('input[name="asistencia"]:checked');
    const diasSeleccionados = [];
    const radios = document.querySelectorAll('input[name="campus"]');    
    const campusSeleccionadoRadio = Array.from(radios).find(radio => radio.checked);
    let campusSeleccionado
    const disponibilidad = document.getElementById('disponibilidad').value;
    const color = document.getElementById('color').value;
    const experiencia = document.getElementById('experiencia').value;

    alertas.innerHTML = '';
    
    if (nombre == '') {
        alertas.innerHTML += '<p class = "alerta"> Error: No escribiste tu nombre </p>'
    }
    
    if (email == '') {
        alertas.innerHTML += '<p class = "alerta"> Error: No escribiste tu email </p>'
    }
    
    checkboxes.forEach(checkbox => {
        diasSeleccionados.push(checkbox.value);
    });
    
    if (diasSeleccionados.length == 0) {
        alertas.innerHTML += '<p class = "alerta"> Error: Tienes que elegir al menos un día de asistencia </p>'
    }
    
    if (!campusSeleccionadoRadio) {
        alertas.innerHTML += '<p class = "alerta"> Error: Tienes que seleccionar un campus</p>'
    } else {
        campusSeleccionado = campusSeleccionadoRadio.value;
    }
    
    if (disponibilidad == '') {
        alertas.innerHTML += '<p class = "alerta"> Error: Tienes que colocar tu disponibilidad</p>'
    }

    if(nombre !== '' && email !== '' && diasSeleccionados.length > 0 || campusSeleccionado || disponibilidad !== '') {
        tbody.innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${email}</td>
            <td>${diasSeleccionados}</td>
            <td>${campusSeleccionado}</td>
            <td>${disponibilidad}</td>
            <td>${color}</td>
            <td>${experiencia}</td>
        </tr>
        `;
    
        limpiar()
    }
}

function limpiar() {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const checkboxes = document.querySelectorAll('input[name="asistencia"]:checked');
    const radios = document.querySelectorAll('input[name="campus"]');    
    const disponibilidadInput = document.getElementById('disponibilidad');
    const colorInput = document.getElementById('color');
    const experienciaInput = document.getElementById('experiencia');

    nombreInput.value = '';
    emailInput.value = '';
    radios.forEach(radio => radio.checked = false);
    checkboxes.forEach(checkbox => checkbox.checked = false);
    disponibilidadInput.value = '';
    colorInput.value = '#000000'; 
    experienciaInput.value = '';
}