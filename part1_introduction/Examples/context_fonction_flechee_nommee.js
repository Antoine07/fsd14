// "use strict";

const School = {
    name: "Alan",

    // une méthode de notre objet School, il est donc normal que cette méthode ait accès au contexte School.
    sayHello : function(){

        console.log(this); // le contexte School

        const that = this; // récupérer le contexte de l'objet on peut comme cela le passer à une fonction dans l'objet dans ce cas l'objet peut le récupérer

        // fonction qui permettrait de spliter une chaîne de caractères que l'on a définit dans la variable name
        // attention cette fonction va re-définir le contexte 
        function splitString(){
            this.name;

            // ici on a perdu le contexte 
            console.log(this.name);
            console.log(this); // ici soit JS récupère le contexte global c'est-à-dire window ou object global Node et mode strict il sera undefined

            console.log('School',School.name);

            console.log('that', that.name); // on se réfère au contexte de l'objet 
        }

        splitString(); // appel de la fonction
    },
    sayHelloArrowFunc : function(){

        // les fonctions fléchées ne re-définissent pas le contexte,
        const splitString = () => {
            console.log(this); // ici elle (arrow function splitString) récupère le contexte dans lequel elle a été définie : object School
        }

        splitString();
    }
  
};

// School.sayHello();
School.sayHelloArrowFunc();