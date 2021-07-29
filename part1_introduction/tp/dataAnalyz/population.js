const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];

// Ordonner en fonction de la longueur des noms

populations.sort((p1, p2) => p1.name.length - p2.name.length);


// Ajoutez une clé lenName pour déterminer la longueur de chaque nom

for (const pop of populations) {
    pop.lenName = pop.name.length;
}

console.table(populations);

// Cette correction est importante à bien comprendre 
// regrouper les personnes par longueur de nom
// Première version scopé pour pouvoir ré-utiliser les mêmes noms de variable
(function () {
    const groupeNames = [];
    const testLen = []; // on mettra la longuer des noms et cela nous permettra de tester si on a déjà agrégé les éléments

    for (const pop of populations) {
        const len = pop.lenName;

        // on teste si on n'a pas déjà cette longueur de nom dans le tableau testLen si c'est le cas on ne regroupe pas
        if (testLen.includes(len) === false) {
            groupeNames.push(populations.filter(pop => pop.lenName === len));
        }

        testLen.push(len);
    }

    console.log(groupeNames);
})();

// Deuxième version intéressante avec le Set de JS, plus efficiente, plus rapide
(function () {
    const groupeNames = [];
    // longueur de nom récupéré qu'une seule fois, Set retire les doublons des longueurs de noms récupérées avec map
    const lenNames = new Set(populations.map(pop => pop.lenName));

    for (const len of lenNames) {
        groupeNames.push(populations.filter(pop => pop.lenName === len));
    }

    console.log(groupeNames);
})();

console.log('Relation --------------');

// 4 exercice très difficile attention !
/**
 * On décide de mettre les informations des personnes de la population dans cette correction dans le tableau relations. Plus simple à traiter.
 */
(function () {
    const relations = [
        { id: 0, relation: [1, 2, 4] },
        { id: 3, relation: [7, 8] },
        { id: 4, relation: [2, 7, 8, 11] },
        { id: 5, relation: [1, 2, 4] },
        { id: 7, relation: [2, 3, 5, 9] },
        { id: 9, relation: [1, 2, 4, 8, 11] },
        { id: 11, relation: [1, 2, 9, 10,] },
    ];

    // par décomposition on assigne les clés/valeurs directement dans le tableau relations
    for (const r of relations) {
        const person = populations.find(pop => pop.id === r.id);

        if (person) {
            r.populations = [];
            for(const id of r.relation){
                const p = populations.find(p => p.id === id );
                if(p)
                    r.populations.push(p);
            }
        }
    }

    console.log(relations);

})();