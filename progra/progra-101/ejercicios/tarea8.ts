/*
8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el  
nombre que tenga más letras del arreglo, y debe de trabajar así: 
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 
let hero = largestNameOfArray( heroes ); 
console.log( hero ); // Profesor Charles Xavier
*/

function largestNameOfArray(heroes: string[]): string {
    let longestName = ""; 

    for (let i = 0; i < heroes.length; i++) {
        const currentName = heroes[i];


        if (currentName.length > longestName.length) {
            longestName = currentName; 
        }
    }

    return longestName; 
}


let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray(heroes);
console.log(hero); 
