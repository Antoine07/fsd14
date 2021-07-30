/*
 Cela ne doit pas vous choquez, mais la recherche dictomique que l'on fait ici ne teste pas si le nombre est égale au nombre que l'on cherche. En effet à force de diviser par deux l'intervalle on tombe nécessairement sur le nombre que le programme doit trouver.

 Attention il n'y a pas de nombre à enregistrer car c'est le programme qui doit devinier le nombre que vous avez en tête.
*/

// Constantes du jeu et variables
const choice = document.querySelector("#choice > span");
const btnPlus = document.querySelector("#btnPlus");
const btnMoins = document.querySelector("#btnMoins");
const btnBravo = document.querySelector("#btnBravo");

// number est le nombre à deviner
let minBoundary, maxBoundary, tour, proposition, container, number = 78;

// Fonctions utiles au jeu
const choiceComputer = function (min, max) {
    return Math.floor((max + min) / 2); // nombre exactement au milieu de l'intervalle
}

const init = () => {
    // afficher les informations du jeu une fois la partie terminée
    if(container){
        container.innerHTML = ""; // re-initialise les informations si on souhaite rejouer
    }
    minBoundary = 1;
    maxBoundary = 200;
    tour = 0;
    proposition = choiceComputer(minBoundary, maxBoundary);
    choice.innerHTML = proposition;
}

// Recherche par dico et logique du jeu
const searchDico = (answer) => {

    switch (answer) {
        case '+':
        case 'plus':
            minBoundary = proposition;
            proposition = choiceComputer(minBoundary, maxBoundary);
            // on écrit la nouvelle proposition
            choice.innerHTML = `Proposition computer : ${proposition} alors ?`;
            tour++;
            break;
        case '-':
        case 'moins':
            // on actualise la limite haute
            maxBoundary = proposition;
            // on cherche une nouvelle proposition
            proposition = choiceComputer(minBoundary, maxBoundary);
            // on écrit la nouvelle proposition
            choice.innerHTML = `Proposition computer : ${proposition} alors ?`;
            tour++;
            break;
        case '=':
        case 'bravo':
            // on se la pête un peu !
            choice.innerHTML = `Bravo j'ai gagné `;
            // on lance la méthode show pour afficher les informations
            show({
                tour,
                number // à la réinitialisation vous devez faire quelque chose ici si vous pensez à un autre nombre.
            });
            break;
        default:
            // on écrit la première proposition au début en lançant le jeu
            choice.innerHTML = `je dois trouvé un nombre compris entre ${minBoundary} et ${maxBoundary} en ${tour} disons :${proposition}`;
            break;
    }
}

// attention si vous devez passer une fonction à l'événement avec des paramètres 
// créez une fonction fléchée qui sera appelée. Si vous ne le faites pas alors la fonction
// sera appelée tout le temps searchDico("plus")

btnPlus.addEventListener("click", () => searchDico("plus"), false);
btnMoins.addEventListener("click", () => searchDico("moins"), false);
btnBravo.addEventListener("click", () => searchDico("bravo"), false);

const show = ({ tour, number }) => {
    container = document.getElementById('info');

    let liTour = document.createElement('li');
    liTour.innerHTML = `Nombre de tour : ${tour} `;
    container.appendChild(liTour);

    let liNumber = document.createElement('li');
    liNumber.innerHTML = `Nombre de tour : ${number} `;
    container.appendChild(liNumber);

    let btnInit = document.createElement('button');
    btnInit.innerHTML = `Relancer le jeu ? `;
    container.appendChild(btnInit);
    btnInit.addEventListener("click", init, false);
}

// Lancement du jeu

init();