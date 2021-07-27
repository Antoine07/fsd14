bar();

// bar est compilée en premier 
function bar(){
  console.log("bar");
}


// Par contre les expressions de fonctions sont compilées après donc on ne peut pas les appeler avant
myFunc(); 

const myFunc = function(){
    console.log("Expression");
}