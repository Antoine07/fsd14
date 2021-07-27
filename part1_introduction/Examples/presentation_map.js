

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// La fonction map d'un tableau (objet) permet de parcourir un tableau en lui passant une fonction dite de callback. Cette fonction peut être une fonction fléchée. Attention la méthode map retourne un nouveau tableau mais ne modifie pas le tableau initial

const n = numbers.map( number => number - 1);

// inchangé
console.log(numbers);

// nouveau tableau
console.log(n);

// Attention pensez bien à retourner une valeur avec la fonction de callback, sinon vous aurez des valeurs undefined dans le tableau retourné. On notera que le tableau retourné est de même dimension que le tableau traité par map 
const n2 = numbers.map( number => {

    if(number > 5) 
        return -1;

    return number;
});

console.log(n2);
