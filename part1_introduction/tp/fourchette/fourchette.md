# TP fourchette

1. Créez un jeu tour par tour, l'ordinateur doit deviner un nombre compris entre 1 et 200 que vous caché. Vous lui indiquerez lorsqu'il proposera un nombre si ce dernier est plus grand ou plus petit que le nombre que vous avez choisi. Vous limiterez le nombre d'essai pour trouver le nombre à 10.

Remarque : essayez de penser à un algorithme pertinent pour que l'ordinateur trouve ce nombre rapidement.

- Pendant le jeu affichez les informations suivantes

```text

- Choix programme : 78        <-- c'est le programme 

[Plus grand] [Plus petit]     <-- vous connaissez le nombre à trouver donc c'est vous qui réponder.

```

Indication : pour écouter l'événement "click" sur les boutons "Plus grand" et "Plus petit" reportez-vous à la documentation officielle suivante :

https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener

- Une fois le jeu terminé affichez les résultats suivants, dans la même page sans afficher ce qui précède :

```text

nombre d'essais possibles : 10
nombre à trouver : 13
nombre de coup(s) : 8
status : gagné !

```

2. Ajoutez maintenant un compteur au jeu, il s'affichera pendant la recherhce du nombre à trouver.

Bon développement.