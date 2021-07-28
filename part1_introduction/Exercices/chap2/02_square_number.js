"use strict";

const A = [8.3, 7.5];
const positions = [[1,1], [2, 2], [3, 4.5], [0, 9]];
const distances = [];


/**
 * 
1. Soit le point A suivant, calculez la distance de ce point à l'ensemble des points de la liste positions. Vous donnerez les résultats dans un nouveau tableau distances.
 */

const distance = (x,y) => Math.floor( Math.sqrt( (x[0] - y[0] )**2 + (x[1] - y[1] )**2 ) * 100) / 100 ;

for(const y of positions){
    distances.push({
        A ,       // permet de récupérer la valeur de A et créer également la clé portant ce nom
        d : distance(A, y)
    });
}

distances.sort((d1, d2) => d2.d - d1.d)

console.table(distances);

// Question si on cherche le point le plus éloigné c'est le premier de ce tableau