const add = (number, callback, error) => {

    if (isNaN(parseFloat(number))) {
        error(number);
    } else {
        setTimeout(() => {
            callback(number);
        }, 500);
    }
};

const error = (num) => console.error("Error", num);

add(1, (num) => {
    let s = num;
    add("Bonjour", (num) => {
        s += num;
    }, error)
}, error);

