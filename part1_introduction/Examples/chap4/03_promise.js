
// En soit une promesse n'est pas aysnchrone
const promise = new Promise((resolve, reject) => {
    // mais vous pouvez mettre ici du code asynchrone

    // deux cas possibles soit elle est résolue => resolve
    // soit elle échoue et dans ce cas reject on pourra alors catch l'erreur
})

// Dans l'exemple qui suit vous avez une promesse qui gère un code asynchrone
const p = number => (new Promise((resolve, reject) => {
    setTimeout(() => {
        if (number > 100) {
            reject("To big"); // la méthode .catch qui récupère ça
            return;
        }
        resolve(number); // la méthode then qui récupère
    }, 300);
})
);

// p au départ est mode pending
// p(1) est exécuté et en attente de la réponse asynchrone
// Vous pouvez parfaitement chaîner les méthodes Promesses
p(1)
    .then(num => p(num + 2))
    .then(num => p(num + 3))
    .then(console.log)
    .catch(err => console.error(err))