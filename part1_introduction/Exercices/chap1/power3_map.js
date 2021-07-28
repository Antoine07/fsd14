/**
 * 
Créez une fonction flèchée pour répondre aux questions suivantes. Utilisez les fonctions map et sort vues en cours.

1. Soit numbers une liste de nombres entiers, élevez uniquement à la puissance 3 les nombres pairs.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

*Indications : pour calculer une puissance utilisez l'opérateur suivant*

```js
// opérateur puissance
2**3 // 8
```

2. Ordonnez la liste des nombres par ordre croissant puis par ordre décroissant

3. Trouvez une astuce pour rendre plus dynamique l'ordre des nombres à l'aide d'une fonction fléchée.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersPower3 = numbers.map((number) => {
  // vous pouvez jouer sur la notion de ce qui est faux pour JS et prendre l'opposé à l'aide de l'opérateur !
  // if( ! (number % 2) ){

  // }
  if (number % 2 === 0) {
    return number ** 3;
  }

  return number;
});

console.table(numbersPower3);

const numberPower3Bis = numbers.map((number) =>
  number % 2 ? number : number ** 3
);

console.table(numberPower3Bis);

// Ordonner par ordre croissant ou décroissant
numberPower3Bis.sort((a, b) => a - b);
console.table(numberPower3Bis);

numberPower3Bis.sort((a, b) => b - a);
console.table(numberPower3Bis);

// 3

// function order(numbers, order = 1) {
//   return numbers.sort((a, b) => order * (a - b));
// }

// ici on n'est pas obligé de retourner quelque chose car la fonction sort modifie par référence les positions des valeurs dans le tableau
const order = (numbers, order = 1) => numbers.sort((a, b) => order * (a - b)) ;

order(numberPower3Bis, 1);

console.table(numberPower3Bis);

order(numberPower3Bis, -1);

console.table(numberPower3Bis);
