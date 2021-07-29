const login = (email, password ) => {
     setTimeout(() => {
        return { email };
    }, 1000);

    // pas return dans une fonction elle retourne par défaut undefined
}

const email = login('alan@alan.fr', 1234567890);
console.log(email);