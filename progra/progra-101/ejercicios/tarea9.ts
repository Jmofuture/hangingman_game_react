/*
9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un 
nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra. 
Ejemplo: 
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );  
console.log( herosWithLetterS ); // She Hulk, Spiderman
*/

function herosWithLetter(heroes: string[], letter: string): string[] {
    let letterStart:string = letter
    let nameWithoutLetter: string[] = []; 

    for (let i = 0; i < heroes.length; i++) {
        const currentName = heroes[i];


        if (currentName[0].toLowerCase() === letter.toLowerCase()) {
            nameWithoutLetter.push(currentName); 
        }
    }

    return nameWithoutLetter; 
}


let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier', 'Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let hero = herosWithLetter(heroes, "h");
console.log(hero); 
