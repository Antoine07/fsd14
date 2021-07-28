
// j est définie dans le scope de la boucle
for (let j = 0; j < 10; j++) {}

// dans le script courant le j n'est pas défini donc JS lève une erreur de type 
// ReferenceError: j is not defined
console.log(j);