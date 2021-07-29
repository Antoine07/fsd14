const add = (number, callback) => {
    setTimeout(() => {
        callback(number); // Task Queue
    }, 500);
}

add(1, (num) => {
    let sum = num ;

    add(2, num => {
        sum += num;
        add(3, num => {
            sum += num;
            console.log(sum);
        })
    })
} );

console.log("Autre chose");