/*
3- Calcule el área de un triangulo rectángulo que: 
Base 10 y altura 5
*/

function area( base: number = 10, heigth: number = 5 ) {

    if ( base <= 0 || heigth <= 0) {
        console.log("La base y la altura deben ser mayor a 0");
        return
    };

    const result: number = (base * heigth) / 2

    return console.log( `El area del rectangulo es ${result}` );
}

area(0, 25)