"use strict";

/**
 * 1. Comptez le nombre de caractères de chaque mot.

2. Faites une fonction qui prend en argument une phrase et qui retourne dans un tableau le nombre de caractères de chaque mot. Vous ne compterez pas les espaces comme un caractère.

Indication : vous pouvez utiliser la méthode split pour transformer la chaîne de caractères en tableau.

 */

const sentence = "Bonjour tout le monde, vous aimez JS ?";

// split permet de transformer la chaîne de caractères en tableau de mot car le séparateur est l'espace, ce qui sépare les mots
for (const word of sentence.split(" ")) {
  console.log(word, word.length);
}

const countWord = (phrase) => {
  const res = [];

  // on remplace les caractères spéciaux par un chaîne de caractère vide
  const p = phrase.replace(/[$&+,:;=?@#|'<>.^*()%!-]/gi, "");

// console.table(p.split(" "));

  for (const word of p.split(" ")) {
    if (word === "") continue; // on compte pas le caractère vide.
    res.push({
      [word]: word.length,
    });
  }

  return res;
};

console.log(countWord(sentence));
