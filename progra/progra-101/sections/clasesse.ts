class Car {
    public brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;
    private readonly createdAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;
        this.createdAt = 12345;
    };


    public turnOn() {

        if ( this.isRunning ){
            console.log('El auto ya estaba encendido');
            return;
        }

        if ( this.fuelTank <= 0 ){
            console.log('No tiene gasolina');
            return;

        }

         this.isRunning = true;
         console.log('Ya se encendio');

    };

    public fillTank( gas : number ){

        if ( gas <= 0 ) {
            
            console.log('Tiene que se mayor a 0');
            return;
        }

        if ( gas >= 100 ){
            this.fuelTank = 100
            console.log('El tanque està lleno');
            return
        }

        if ( gas >= 0 && gas < 100 ){
            this.fuelTank += gas
            console.log('El tanque está lleno');
            return
        }



    }
}

let myMazda = new Car('Mazda', 'Coupe');

console.log(myMazda);

myMazda.fillTank(50)
console.log(myMazda);

myMazda.fillTank(20)
console.log(myMazda);

myMazda.fillTank(-20)
console.log(myMazda);

