/*
7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar  
max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de  
trabajar así: 
let maxValue = max( 5, 2, 6); 
console.log( maxValue ); // 6

*/

function maxNumber(a: number, b: number, c: number): number {
    
    let aux: number

    if( c > b && b > a ){
        aux = c;

    } else if( b > a ) {
        aux = b;

    }else {
        aux = a
    }

    return aux;
}

console.log(maxNumber(12, 6244 , 1500)); 