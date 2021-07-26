
function connect({ login, pass }) {

    // si on met === trois égales alors JS vérifie le type en plus de l'égalité
    if (login == "Alan" && pass == "123") {
        console.log("Connected ");

        return "Disconnect";
    }

    console.log("Error connexion");


    return "Connected";
}
console.log(connect({ login : "Alan", pass : "123"}));

console.log(connect({ pass : "123", login : "Alan"}));

console.log(connect({ login : "Alan", pass : "1234"}));


