let listaDeCompras = [];  // Lista vacía

// Función para agregar un producto
function agregarProducto(producto) {
  // TODO: Verifica si el producto ya está en la lista antes de agregarlo
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
    } else {
        console.log('Producto ya existente en la lista');
    }
}

// Función para eliminar un producto
function eliminarProducto(producto) {
  // TODO: Encuentra y elimina el producto de la lista
    let productoAEliminar = listaDeCompras.findIndex((item) => item == producto );
    listaDeCompras.splice(productoAEliminar, 1);
}

// Función para mostrar la lista completa
function mostrarLista() {
    console.log("Lista de Compras:");
  // TODO: Recorre el arreglo y muestra cada producto
    for(let i = 0; i < listaDeCompras.length; i++) {
    console.log(listaDeCompras[i]);
    }
}

// Prueba tus funciones
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche");  // Este producto no debe agregarse de nuevo
eliminarProducto("Pan");
mostrarLista();  // Debería mostrar "Leche" y "Pan"