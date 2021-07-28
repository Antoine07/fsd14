function bar() {
    let x = 10; // portée dans le bloc 
    if (true) {
      let x = 2;  // on définit un autre symbole ou variable
      console.log(x);  // 2
    }
    console.log(x);  // 10
  }
  bar(); //  2 10