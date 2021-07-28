
// 0.2 <=> .2  
/*
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/
function ttc(ht, tva = .2) {

    ht = parseFloat(ht);
    tva = parseFloat(tva);

    if (isNaN(ht) || isNaN(tva)) {

        // ht et tva qui posent pb ou c'est le ht tout seul ou tout seul la tva
        ( isNaN(ht) && isNaN(tva) ) ?
            console.error(`Attention le ht & tva posent problèmes`) :
            (isNaN(ht) ? console.error(`Attention le ht pose problème`) : console.error(`Attention la tva pose pb`))
            ;


        return "Not a number";
    }

    return Math.floor(ht * (1 + tva) * 100) / 100;
}

ttc(100);

const prices = [
    120, 19, 25.95, 200, 20, "Bonjour", "18.90", "", null, false
];

const ttcPrices = [];

for (const price of prices) {
    ttcPrices.push(ttc(price));
}

console.table(ttcPrices);

// test pour la tva 

ttc(19.5, "Bonjour");
ttc("bonjour");
ttc("bonjour", "Bonjour");
