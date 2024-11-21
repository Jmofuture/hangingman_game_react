// Objetos

let person = {
    firstName: "Juan",    
    lastName: "Pérez",    
    age: 30,              
    gender: "Masculino",  
    email: "juan.perez@example.com",

    toString(){
        console.log(`Hola ${this.firstName} ${this.lastName}: ${this.email}`);
    }
};


/*
console.log(person.age);

person.toString()
*/


let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Rojo",
    mileage: 15000,
    isElectric: false
};

let tv = {
    brand: "Samsung",
    size: 55,
    resolution: "4K",
    type: "LED",
    isSmart: true,
    price: 1200
};

let youtubeVideo = {
    title: "JavaScript Basics",
    duration: "10:00",
    views: 15000,
    likes: 1000,
    isHD: true,
    uploader: "CodingAcademy"
};


console.log(car);
console.log(tv);
console.log(youtubeVideo);



