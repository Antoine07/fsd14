// crée un espace clos
(function () {
  let a = 1,
    b = 2;

  [a, b] = [b, a];

  console.table({
    a: a,
    b: b,
  });
})();

// meme syntaxe que ci-dessous
const scope1 = function () {
  let a = 1;
};

scope1();

// Meme syntaxe noté que l'on appelle la fonction en la mettant dans des parenthèses
(function () {
  let a = 1,
    b = 2,
    c = 3;

  [a, b, c] = [b, c, a];

  console.table({
    a: a,
    b: b,
    c: c,
  });
})();
