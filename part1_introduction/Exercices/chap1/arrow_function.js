
const power2 = (x) => {
    return x ** 2 ;
  };

  // Calculez la puissance de 2 du nombre 4

  console.log(power2(4));

  // Vous pouvez utiliser la syntaxe suivante pour définir une fonction flèchée qui ne retourne qu'une seule chose 

  const power2bis = (x) => x ** 2 ;
  
  console.log(power2bis(4));


  /**
   * Soit la fonction show suivante elle prend deux paramètres a et b numérique et retourne un objet du type { power2 : a**2, power3 : b**3}
   */


  // arrow fonction
 
  // SYNTAXE COURTE POUR UN RETURN AVEC ARROW FUNCTION

  // On peut retourner qu'une seule chose comme un littérale mais alors attention au accolade dans la syntaxe courte il faudra utiliser les parenthèses pour forcer JS à retourner le littéral. Sinon il pensera que c'est le corps d'une fonction
 const show = (a, b)  => ( { power2 : a**2, power3 : b**3} );
    
 ;


 show(2, 3) ; // { power2 : 4, power3 : 27 }