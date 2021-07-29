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