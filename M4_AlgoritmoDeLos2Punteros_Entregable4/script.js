//                 [ 0 ]   [ 1 ]      [ 2 ]     [ 3 ]      [ 4 ]   [ 5 ]
//                I: P1  I1:P2 I2:P1  I2:P2
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(array) {
    // Punteros
    let i = 0;
    let j = 1;

    while (j < array.length) {
        // Comparar iniciales de los nombres actuales
        if (array[i].charAt(0) === array[j].charAt(0)) {
            return [array[i], array[j]];
        }
        
        // Avanzar ambos punteros
        i++;
        j++;
    }

    return 'No se encontraron invitados que puedan sentarse juntos'; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
