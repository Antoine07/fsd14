

/**
 * La fonction sort qui s'applique sur les tableaux n'ordonne que les chaînes de caractères
 * 
 * La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.

 */


 const data = [1, 30, 4, 21, 100000];
 data.sort();
 console.log(data);

 // On peut quand même ordonnées des valeurs numériques mais il faut selon la doc passer une fonction à la méthode sort pour préciser l'ordre dans lequel on doit ordonner les nombres

 function compare(a, b){

    // return b - a ; // décroissant
    return a -b ; // croissant
 }

 // En js on peut passer une fonction qui admet deux paramères attendues sort appelera la fonction en lui passant les paramètres
 data.sort(compare);

 console.log(data);