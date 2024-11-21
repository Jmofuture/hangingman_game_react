// Arreglos

export const flowers: string[] = ["Rosa", "Tulipán", "Girasol", "Margarita", "Orquídea", "Lirio", "Clavel", "Azucena", "Jazmín", "Dalia"];


for (let index = 0; index < flowers.length; index++) {
    console.log(index, flowers[index])
    
}

const names = ["Juan", "Ana", "Luis", "María", "Pedro", "Sofía", "Carlos", "Elena", "Jorge", "Laura"];
const salaries = [3000, 4500, 3200, 5000, 2800, 4700, 3500, 4000, 3800, 3600];


for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} tiene un salario de $${salaries[i]}`);
}