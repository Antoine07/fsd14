# TP Fect users

- Créez une fonction avec une promesse qui récupère les users et affiche les noms (clé name) dans la liste ul/li ci-dessus.


```js
/* request HTTP asynchrone */
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) // récupère les données dans un JSON
    .then(res => console.log(res));

```