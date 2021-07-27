const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 somme avec reduce

// On crée une fonction sum permettant de faire la somme avec reduce sur un tableau
const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr);

// On peut créer également une fonction fléchée pour faire la moyenne
const average = (numbers, prec = 100) =>
  numbers.length > 0
    ? Math.floor((sum(numbers) / numbers.length) * prec) / prec
    : "Pas note";

/*
// deuxième manière de corrigé
const total = numbers.reduce((acc, curr) => acc + curr );
const len = numbers.length; // attention il faut pas que len soit égale à 0 ...
const averageNumbers = Math.floor((sum(numbers)/len )*100)/100;
*/

console.log(average(numbers));
// 2 Maitenant on souhaite faire la somme

// on ne garde que les nombres impairs 0 <=> faux et 1 <=> c'est vrai et même tout ce qui est != de 0 est vrai
// filter retourne un tableau et le reduce sur un tableau permet de faire la somme
const sumOdd = numbers.filter(num => num % 2).reduce((acc, curr) => acc + curr);

console.log(sumOdd);

// soit on ajoute curr à acc si le nombre est impair soit on ajoute 0 à acc si le nombre est pair.
const sumOddBis = numbers.reduce((acc, curr) => curr % 2 ? curr + acc : acc );
console.log(sumOddBis);
