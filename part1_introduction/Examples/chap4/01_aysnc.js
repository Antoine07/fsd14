const asyn = () => {
    console.log('Hello');

    setTimeout(() => {
        console.log('t1');
    }, 500);

    console.log('End');
}

const synchroneFunc = () => {
    console.log("Start function");
}

console.log("Start");
synchroneFunc();
console.log("End");

asyn();

// l'API gérer de manière asynchrone prendra 500ms à répondre dans l'exemple
const getApi = (keyAPI, callback) => {

    // 500 ms de réponse
    setTimeout(() => {
        callback(keyAPI);
    }, 500);
};

const callback = (keyAPI) =>{

    // On récupère des users et ajoute à un div dans la page
}