const numbers = [11, 18, 19, 20, 14];


Array.prototype.sum = function(){

    return this.reduce((acc, curr) => acc + curr);
}

console.log(numbers.sum());

// fonction anonyme pour définir un proto 
Array.prototype.average = function(prec = 100){

    const s = this.sum();

    if( this.length !== 0 ){

        return Math.floor( (s/this.length) * prec ) / prec;
    }
    
}

console.log(numbers.average(10));
