// Arreglo de productos
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// 1. Usamos filter() para obtener productos con precio menor a $100.
const productosBaratos = productos.filter((producto) => producto.precio < 100);
console.log("Productos con precio menor a $100:", productosBaratos);

// 2. Usamos sort() para ordenar alfabéticamente esos productos por su nombre.
const productosOrdenados = productos.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
});
console.log("Productos ordenados alfabéticamente:", productosOrdenados);

// 3. map()
const nombresProductos = productos.map((producto) => producto.nombre);
console.log("Nombres de los productos filtrados y ordenados:", nombresProductos);

// reduce()
const totalPrecio = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("Suma total de precios de productos:", totalPrecio);