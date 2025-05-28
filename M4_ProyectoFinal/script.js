const { clear } = require("console");
const fs = require("fs");

// Ruta del archivo de notas
const filePath = "./notas.json";

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

// TODO: Agregar nota a notas.json
function agregarNota(titulo, contenido) {
  let notas = []; // Objeto donde se guardaran las notas, inicializar
  if (fs.existsSync(filePath)) {
    // Evalua si existe notas.json
    const lista = fs.readFileSync(filePath, "utf8"); // Lectura de las notas
    notas = JSON.parse(lista); // Convertir JSON a un objeto o valor de JavaScript
  }
  // Validar que no se repita el título
  const yaExiste = notas.some((nota) => nota.titulo === titulo);
  if (yaExiste) {
    console.log(`Ya existe una nota con el título "${titulo}".`); // Avisa si ya exite la nota
    return; // Interrumpe la acción, no se agrega nota
  }

  const nuevaNota = { titulo, contenido }; // Se crea una nueva nota si no existe una con ese titulo
  notas.push(nuevaNota); // Se agrega al objeto a notas

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), "utf8"); // Se rescriben las notas del objeto notas ene el array, como parametros se le da la ruta del JSON, la conversión de notas a JSON (ruta, replacer, espaciado) y el codificador
  console.log("Nota agregada con éxito."); // Mensaje de éxito
}

/*
  TODO: Listar todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    // Verificación de exitencia de notas.JSON
    const datos = fs.readFileSync(filePath, "utf8"); // Lectura de las notas JSON
    const notas = JSON.parse(datos); // Convertir JSON a objeto notas

    if (notas.length === 0) {
      // Si no se encuentran da la debida advertencia
      console.log("📭 No hay notas guardadas.");
      return;
    }

    // * Impresión de las notas con formato
    console.log("📒 Lista de notas:");
    notas.forEach((nota, index) => {
      console.log(
        `\n[${index + 1}] Título: ${nota.titulo}\nContenido: ${nota.contenido}`
      );
    });
  } else {
    console.log("No hay notas guardadas.");
  }
}

/**
 *  TODO: Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    // Verifica si la nota existe
    const datos = fs.readFileSync(filePath, "utf8"); // Lectura de las notas JSON
    const notas = JSON.parse(datos); // Convertir datos JSON a objeto notas

    // PISTA: Filtra las notas y elimina la que coincida con el título. COMPLETAR: Usa Array.filter para obtener las notas restantes.
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo); // Obtener el resto de las notas

    if (notasRestantes.length === notas.length) {
      // Si no excluyo ninguna, la nota a eliminar no existe, se da aviso
      console.log(`❌ No se encontró ninguna nota con el título "${titulo}".`);
      return;
    }

    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2), "utf8"); // Se reescribe el JSON excluyendo las notas que se quieren borrar para eliminarlas
    console.log(`Nota con título "${titulo}" eliminada.`); // Mensaje de éxito
  } else {
    console.log("No hay notas para eliminar.");
  }
}

// Ejecución de ejemplo
agregarNota("Compras", "Comprar leche y pan.");
agregarNota("Pendientes", "Comprar leche y pan.");
listarNotas();
eliminarNota("Compras");
listarNotas();