// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Variables globales
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    // Obtener referencias a elementos del DOM usando IDs
    const botonAdivinar = document.getElementById('botonAdivinar');
    const inputNumero = document.getElementById('numeroUsuario');
    const mensaje = document.getElementById('mensaje');
    const contadorIntentos = document.getElementById('intentos');

    // Función para verificar el número
    const verificarNumero = () => {
        // Obtener el número ingresado por el usuario
        const numeroUsuario = parseInt(inputNumero.value);
        intentos++;
        
        // Actualizar contador de intentos
        contadorIntentos.textContent = `Intentos: ${intentos}`;

        // Validar el número ingresado
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
            mensaje.style.color = 'red';
            mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100';
            return;
        }

        // Comparar con el número secreto
        if (numeroUsuario === numeroSecreto) {
            mensaje.style.color = 'green';
            mensaje.textContent = `¡Felicitaciones! ¡Has adivinado el número en ${intentos} intentos!`;
            botonAdivinar.disabled = true;
        } else if (numeroUsuario < numeroSecreto) {
            mensaje.style.color = 'blue';
            mensaje.textContent = 'El número es mayor. ¡Sigue intentando!';
        } else {
            mensaje.style.color = 'blue';
            mensaje.textContent = 'El número es menor. ¡Sigue intentando!';
        }

        // Limpiar el input y darle foco
        inputNumero.value = '';
        inputNumero.focus();
    };

    // Agregar event listener al botón usando su ID
    botonAdivinar.addEventListener('click', verificarNumero);

    // Agregar event listener para la tecla Enter en el input
    inputNumero.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            verificarNumero();
        }
    });

    // Dar foco al input al cargar la página
    inputNumero.focus();
});