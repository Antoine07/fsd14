class Rectangle {
    constructor(w, h) {
        this._w = w;
        this._h = h;
    }
    set w(w) {
        this._w = w;
    }

    set h(h) {
        this._h = h;
    }

    get w() {
        return this._w;
    }

    get h() {
        return this._h;
    }
}

class Square extends Rectangle {

    constructor(w) {
        // this.foo = 1;  // attention impossible dans l'héritage en JS
        super(w, w);
    }
}

const square = new Square(10);

console.table({
    w: square.w,
    h: square.h
});