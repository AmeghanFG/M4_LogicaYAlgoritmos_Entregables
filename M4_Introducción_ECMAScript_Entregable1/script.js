// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte, personas = 1) {
    // TODO: Crear un objeto con los datos del destino
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        personas: personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte, personas) {
    let costoBase = 0;

    // Costo base por destino
    const destinosCostos = {
        "Paris": 500,
        "Londres": 400,
        "New York": 600,
        "Tokio": 700,
        "Barcelona": 300,
    };
    
    costoBase = destinosCostos[destino] || 0;

    // Costo adicional por tipo de transporte
    const transportesCostos = {
        "Avión": 200,
        "Tren": 100,
        "Auto": 50
    };

    costoBase += transportesCostos[transporte] || 0;

    return costoBase * personas;
}

// Función para aplicar descuentos
const calcularDescuento = (costoBase, personas) => {
    let descuento = 0;
    if (personas >= 20) {
        descuento = costoBase * 0.3;
    } else if (personas >= 10) {
        descuento = costoBase * 0.2;
    } else if (personas >= 5) {
        descuento = costoBase * 0.1;
    }
    return descuento != 0 ? descuento : 'No aplica';
}

// Función para mostrar el itinerario de los viajes registrados en la consola
const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    // Mostrar en consola
    console.log("Itinerario de Viajes:");
    for (const viaje of destinos) {
        let costoTotal = calcularDescuento(viaje.costo, viaje.personas) !== 'No aplica' ? viaje.costo - calcularDescuento(viaje.costo, viaje.personas) : viaje.costo;
        console.log(`
            Destino: ${viaje.destino}
            Fecha: ${viaje.fecha}
            Transporte: ${viaje.transporte}
            Personas: ${viaje.personas}
            Costo base: ${viaje.costo}
            Descuento: ${calcularDescuento(viaje.costo, viaje.personas)}
            Costo total: ${costoTotal}
            ---------------------------
        `);
    }
}

// ver los itinerarios en HTML
const mostrarItinerarioHTML = () => {
    const listaViajes = document.getElementById('listaViajes');
    listaViajes.innerHTML = ''; // Limpiar lista existente si es necesario

    // Se recorre el arreglo de destimos y se muestra
    destinos.forEach(viaje => {
        let costoTotal = calcularDescuento(viaje.costo, viaje.personas) !== 'No aplica' ? viaje.costo - calcularDescuento(viaje.costo, viaje.personas) : viaje.costo;
        // Creación del elemento li para los viajes
        const li = document.createElement('li');
        // Agregar información
        li.innerHTML = `
            <strong>Destino:</strong> ${viaje.destino}<br>
            <strong>Fecha:</strong> ${viaje.fecha}<br>
            <strong>Transporte:</strong> ${viaje.transporte}<br>
            <strong>Personas:</strong> ${viaje.personas}<br>
            <strong>Costo:</strong> $${viaje.costo.toFixed(2)}<br>
            <strong>Descuento:</strong> ${calcularDescuento(viaje.costo, viaje.personas)}<br>
            <strong>Costo Total:</strong> ${costoTotal.toFixed(2)}<br>
            <hr>
        `;
        // Mostrar en html
        listaViajes.appendChild(li);
    });
};


// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión", 1);
    registrarDestino("Londres", "2024-07-01", "Tren", 4);
    registrarDestino("New York", "2024-08-10", "Auto", 20);
    registrarDestino("Tokio", "2024-09-20", "Avión", 2);

    // Mostrar el itinerario de los viajes en consola
    mostrarItinerario();
    // Mostrar el itinerario de los viajes en HTML
    mostrarItinerarioHTML(); 
}

// Ejecutar la aplicación
iniciarApp();