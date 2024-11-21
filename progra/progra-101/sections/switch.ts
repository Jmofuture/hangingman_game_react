let weekDay: number = 2


if (weekDay < 1 || weekDay > 7) {

    throw new Error("Rango de días no permitido");
}


switch ( weekDay ) {
    case 1:
        console.log('Lunes');
        break;

    case 2:
        console.log('Martes');
        break;

    default:
        console.log('No es Martes, Miercoles');        
        break;
}