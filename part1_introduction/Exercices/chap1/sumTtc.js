

function sumTTC(p1, p2, p3, tva = .2) {

    p1 = parseFloat(p1);
    p2 = parseFloat(p2);
    p3 = parseFloat(p3);

    if (isNaN(p1) || isNaN(p1) || isNaN(p2) || isNaN(tva)) {

        console.error("Error de type avec une des variables");

        return "Not a number";
    }

    let total = (p1 + p2 + p3) * (1 + tva);

    return Math.floor(total * 100) / 100;
}

const prices = [100, 150, 20];

console.log( sumTTC( ...prices , .15) );



