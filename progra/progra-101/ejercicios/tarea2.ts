/*
2- Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
Ejemplo: 10 kilómetros = 6.21 millas*/

function kilometerToMile( kilometers: number ) {
    const mile: number = 0.62;

    if ( kilometers <= 0 ) {
        console.log("Debes agregar al menos 1 Kilometro");
        return
    };

    const result: number = mile * kilometers

    return console.log( `${kilometers} Kilometros(s), equivalen a ${result} Millas` );
}

kilometerToMile(1)