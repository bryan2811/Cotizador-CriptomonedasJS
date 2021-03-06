// API
const cotizador = new API('3ab0be852ffb2c92fbbe222a10b0d88c017764b29e89caaba09bae03cafef756');

// Instanciando las clases
const ui = new Interfaz()

// Leer el formulario
const formulario = document.querySelector('#formulario');

// EventListeners
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Leer la divisa seleccionada
    const divisaSelect = document.querySelector('#divisa');
    const divisaSeleccionada = divisaSelect.options[divisaSelect.selectedIndex].value;

    // Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    // Comprobar que ambos campos tengan algo seleccionado
    if (divisaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // Arrojar una alerta de error
        ui.mostrarMensaje('Ambos Campos Son Obligatorios', 'alert bg-danger text-center');
    } else {
        // Todo bien, consultar la API
        cotizador.obtenerValores(divisaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, divisaSeleccionada, criptoMonedaSeleccionada);
            })
    }
})