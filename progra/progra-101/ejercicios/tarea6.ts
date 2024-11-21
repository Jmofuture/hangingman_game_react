/*

Realice un algoritmo, que permita la impresión en consola de la siguiente tabla: 
El resultado será esperado es algo así:

1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25

*/

function printMultiplicationTable(size: number) {

    for (let row = 1; row <= size; row++) {
        let output = ''; 

        for (let col = 1; col <= size; col++) {
            output += (row * col) + ' ';
        }

        console.log(output);
    }
}

// Llamar a la función para una tabla de 5x5
printMultiplicationTable(5);
