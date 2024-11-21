
const words: string[] = [
    "CASA", "PERRO", "GATO", "AGUA", "FUEGO", "TIERRA", "AIRE", "FLOR",
    "ARBOL", "LUNA", "SOL", "NUBE", "RANA", "PEZ", "AVION", "CARRO",
    "MESA", "SILLA", "LIBRO", "PUERTA", "VENTANA", "NIÑO", "NIÑA",
    "FRUTA", "COMIDA", "CIELO", "ESTRELLA", "LAPIZ", "PAPEL", "BOLSA",
    "CAMA", "CAMPO", "RÍO", "MAR", "PLAYA", "TORRE", "JUEGO", "PAZ",
    "CIUDAD", "CALLE", "PLANTA", "MUNDO", "BARCO", "LUZ", "FOTO",
    "ROPA", "ZAPATO", "BICICLETA", "CARAMELO", "PELOTA"
  ];
  

export function getRandomWord(): string {

    const randomIndex = Math.floor( Math.random() * words.length )

    
    return words[randomIndex];
}