/*
5- Dado el siguiente arreglo: 
 let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
Haga una impresión en consola así: 
   
1 es un número impar 
2 es un número par
3 es un número impar
...
6 es un número par 
   
Debe de utilizar un ciclo FOR para generar dicha impresión.
Tip: usar el operador % para obtener el resultado, ejemplo:
2%2;     // 0
3%2;     // 1
4%2;     // 0
5%2;     // 1

*/

let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]

function oddEven(numbers: number[]): void {
    if (numbers.length < 1) {
        console.log('La lista está vacía');
        return;
    }

    let oddNumbers: number[] = [];
    let evenNumbers: number[] = [];

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    }

    console.log('Números pares:', evenNumbers);
    console.log('Números impares:', oddNumbers);
}


oddEven(numbers)