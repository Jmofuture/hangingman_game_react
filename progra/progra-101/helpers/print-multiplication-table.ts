export function printMultiplicationTable(base: number = 1 , limit: number = 10 ) {

    let i = 1

    if ( limit <= 0 ){
        
        throw new Error("El numero debe ser mayor a 0");
        
    }
    
    while (i <= limit) {
        
        
        console.log(`${base} X ${i} = ${base * i}`);
    
        i++
    
    }
}

