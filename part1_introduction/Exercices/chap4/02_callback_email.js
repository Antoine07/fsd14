const login = (email, password, callback ) => {
    setTimeout(() => {
        callback(email);
    }, 1000);
}

// la logique sera implémenté dans les fonctions de callback
const callback = emailSend => {
    const email = emailSend ;

    console.log(email);
}


login('alan@alan.fr', '123', callback);