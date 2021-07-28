const students = [ "Alan", "Philippe", "Tony", "Geraldine", "Michelle", "Phi" ];

// attention la méthode sort modifie par référence les données du tableau

// 1
students.sort();

// 2 
students.sort( (n1, n2) => n1.length - n2.length);
console.table(students);

// 3 

const message ="Bonjour tout le monde";

const reverseMessage = [ ...message ].reverse().join("");

console.table(reverseMessage);
