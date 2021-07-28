const Student = {
  name: "",
  average: 17.5,
  situation: function () {
    console.log(`Name ${this.name} average : ${this.average}`);
  },
};

console.log(Student.__proto__);

function User(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

const u2 = new User("Sophie", "Turring");

User.prototype.fullName = function () {
  return this.name + " " + this.lastname;
};

const u1 = new User("Alan", "Turring");
console.log(u2.fullName());

console.log(u1.fullName());


// manière de définir un objet de type Array, il hérite de cet objet JS 
let a = [1, 2, 4];

Array.prototype.power2 = function(){
    for(let i= 0; i< this.length; i++){
        this[i] = this[i]**2;
    }

    return this;
}

console.log( a.power2() );
