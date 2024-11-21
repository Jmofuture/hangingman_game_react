/*
Realiza un prgrama que muestra las notas 
de lso alumnas como     A, B, C, D

A >= 90 
B >= 80
C >= 70
D >= 60
f < 60
*/

let grade: number = 35

if (grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
} else if (grade >= 60) {
    console.log('D');
} else {
    console.log('F');
}