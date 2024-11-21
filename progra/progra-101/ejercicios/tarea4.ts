/*
4- Dado el siguiente arreglo: 
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?
*/


let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5, ];

function findMax(list: number[]): void{

    let seen: number = -999999

    for ( let index = 0; index < numbers.length; index++ ) {
        const element = numbers[index];
    
        if (element > seen) {
            seen = element
        };
    
    };

    console.log(`El número mayor es: ${seen}`)

};

findMax(numbers)