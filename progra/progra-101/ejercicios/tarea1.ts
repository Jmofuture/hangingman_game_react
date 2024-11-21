/*
1- Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
Ejemplo: 150 libras = 68.0388 kilogramos
*/

function poundToKilogram( pounds: number ) {
    const kilograms: number = 0.453592;

    if ( pounds <= 0 ) {
        console.log("Debes agregar al menos 1 libra");
        return
    };

    const result: number = pounds * kilograms

    return console.log( `${pounds} Libra(s), equivalen a ${result} Kilogramos` );
}

poundToKilogram(0)