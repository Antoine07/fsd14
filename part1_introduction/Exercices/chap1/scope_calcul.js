"use strict";

let a = 1;

function calcul() {
// ici on peut se référer à la variable "a" qui est définie à l'extérieur de la fonction calcul pour JS cette variable est donc globale au script.
  a = 2 + a;

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();