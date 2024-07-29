const botonFormulario = document.getElementById('botonFormulario');  // botón del formulario

const formularioTareas = document.getElementById('formularioTareas'); // Formulario de tareas

const textoInput = document.getElementById('textoInput');// espacio de texto para las tareas

const listaTareas = document.getElementById('listaTareas'); // Lista de tareas

botonFormulario.addEventListener('click', function () {
    if (formularioTareas.style.display === 'none' || formularioTareas.style.display === '') { // Si el formulario de tareas es none O es una cadena vacía
        formularioTareas.style.display = 'block';  // se muestra
    } else {
        formularioTareas.style.display = 'none'; // no se muestra
    }
});

formularioTareas.addEventListener('submit', function (event) {
    event.preventDefault();

    const textoTarea = textoInput.value.trim();  // traigo la tarea que el usuario envía y con el método trim elimino espacios en blanco al inicio y final del texto.

    if (textoTarea !== '') {  // revisa que el texto no esté vacío
        agregarTarea(textoTarea); // agrega una tarea a la lista
        textoInput.value = ''; // limpia el campo de entrada
        formularioTareas.style.display = 'none';   // oculta el formulario después de agregar la tarea
    }
});

function agregarTarea(textoTarea) {
    const row = document.createElement('tr'); // me hace una fila tr

    const tareaTd = document.createElement('td'); // me hace una celda td
    tareaTd.textContent = textoTarea; // contenido de texto de la celda de la tarea
    row.appendChild(tareaTd); // mete la celda tareaTd dentro de la fila row

    const celdaBotones = document.createElement('td'); //  celda para los botones

    const finalizarBtn = document.createElement('button'); // hace un botón para finalizar la tarea
    finalizarBtn.textContent = 'Finalizar';  // crea el texto que tiene el botón de finalizar
    finalizarBtn.style.backgroundColor =  "red"
    finalizarBtn.addEventListener('click', function () {
        row.remove(); // Elimina la fila
    });

    celdaBotones.appendChild(finalizarBtn);  // meto el botón de finalizar a la celda de botones
    row.appendChild(celdaBotones); // agrego la celda de acciones a la fila
    listaTareas.appendChild(row); // meto la fila completa a la lista de tareas
}
