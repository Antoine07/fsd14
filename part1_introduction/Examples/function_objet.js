function show( message ){

    return message;
  }
  
  // avec les objets on peut faire ce genre d'assignation sans que le script ne marche
  // plus
  const s = show ;

  console.log(s);
  console.log(s("Hello les Dev"));
