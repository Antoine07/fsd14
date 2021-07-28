# TP Chifoumi

## Partie 1

Vous allez coder ou implémenter (ce dernier terme est plus approprié) le jeu tour par tour du Chifoumi.

Créez une classe ou une fonction constructeur Chifoumi. Utilisez les notions que l'on a vues en cours.

Lancez le jeu à l'aide de la ligne de commande node habituel dans la console. 

Le jeu fonctionnera tout seul et s'arrêtera au bout d'un certain nombre de tours. Il fera jouer deux joueurs, on comptera les points des joueurs.

Le jeu se lancera à l'aide d'une méthode spéciale **run** dans Chifoumi.

Pour mieux comprendre la logique du jeu à developper voyez l'exemple ci-après :

```js
// on crée une instance du jeu en passant les paramètres suivants dans un littéral:
// les deux noms des joueurs et le nombre de tours 
const chifoumi = new Chifoumi({ player1 : "Antoine", player2 : "Mag", turn : 10 });

// lancement du jeu
chifoumi.run();

// On affichera dans un console.table ou .log les informations de fin de partie :
// Le gagnant et les points remportés par chaque joueur
chifoumi.info();
```

## Partie 2 facultative

Imaginez une amélioration possible du jeu.