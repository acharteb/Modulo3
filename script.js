// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // --- Captura de Elementos del DOM ---
    // Usamos 'const' porque estas referencias no cambiarán.
    const nombreInput = document.getElementById('nombreInput'); 
    const saludarBtn = document.getElementById('saludarBtn');
    const saludoMensaje = document.getElementById('saludo-mensaje');
    const infoCaracteres = document.getElementById('info-caracteres');

    function generarSaludo() {
        // Tomar el valor del input. Usamos .trim() para eliminar espacios en blanco al inicio/final.
        let nombre = nombreInput.value.trim(); // Usamos 'let' porque el valor de 'nombre' puede cambiar.

        // id para verificar si el campo de nombre está vacío o no.
        if (nombre === '') {
            // Si el nombre está vacío, mostrar mensajes específicos.
            saludoMensaje.textContent = "¡Debes ingresar tu nombre para saludar!";
            infoCaracteres.textContent = "El campo de nombre está vacío.";
        } else {
            // Si hay un nombre, generar el saludo.
            saludoMensaje.textContent = `Hola! ${nombre}`;

            // Mostrar cuántos caracteres tiene el nombre.
            // La propiedad .length nos da la cantidad de caracteres de un string.
            const longitudNombre = nombre.length; // 'const' porque la longitud es fija una vez calculada.
            infoCaracteres.textContent = `Tu nombre tiene ${longitudNombre} caracteres.`;
        }
    }

    // --- Captura de Eventos del DOM ---
    // Asignar la función 'generarSaludo' al evento 'click' del botón.
    // Usamos addEventListener para una mejor práctica y flexibilidad.
    saludarBtn.addEventListener('click', generarSaludo);

});
