"use strict";

// On ne peut plus faire référence à une variable non défini dans un même scope
// approche plus rigoureuse pour définir les variables
function tdz() {
    console.log(tdz_val);

    let tdz_val = "Temporal Dead Zone";
}

tdz();

// NE PLUS UTILISER
// Attention on n'utilise plus var car il est ambigu dans son approche de déclaration de variable, le code suivant ne fera pas "planter" l'exécution du script. JS dans le scope de la fonction connait cette variable à l'aide de var.
// function tdz_old() {
//     console.log(tdz_val);

//     var tdz_val = "Temporal Dead Zone";
// }

// tdz_old();