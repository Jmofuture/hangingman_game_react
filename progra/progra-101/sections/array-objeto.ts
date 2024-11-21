
// arrelos de objetos
interface Person {
    firstName: string;
    age: number;
    isActive: boolean;
}


let person1: Person = {
    firstName: "Juan",
    age: 30,
    isActive: true

};

let person2: Person = {
    firstName: "Ana",
    age: 25,
    isActive: true
};


let person3: Person = {
    firstName: "Lucía",
    age: 28,
    isActive: true
};


let people: Person[] = [ person1, person2, person3 ]

//console.log(people);

for (let index = 0; index < people.length; index++) {
    const element = people[index];

    console.log(element.firstName + ' '+ element.age);
    
}