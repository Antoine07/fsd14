let fruits =  ['Apple', 'Orange'];

let newFruits = fruits; // ne fait pas de copie

newFruits.push('Banana')

// Même référence d'objet donc les objets sont égaux.
console.log(newFruits.length === fruits.length);

// copie peu profonde de l'objet fruits.
const newFruitsBis = [ ...fruits ];

console.log(newFruitsBis.length === fruits.length); // différent car pas la même référence d'objet => il y a copie
