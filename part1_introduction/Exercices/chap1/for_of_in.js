



const STUDENTS = ["Alan", "Bernard", "Jean"];

// permet d'afficher les valeurs du tableau
for(const student of STUDENTS){
    console.log(student);
  }
  
  // for in permet d'afficher les indices du tableau
  for(const indice in STUDENTS){
    console.log(STUDENTS[indice], 'indice', indice);
  }

  console.table(STUDENTS);