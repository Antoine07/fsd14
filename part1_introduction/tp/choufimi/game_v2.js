class Chifoumi {
  constructor(init) {
    this.tour = init.tour;
    this.counter = 0;
    this.results = [
      { name: init.player1, score: 0, position: "looser" },
      { name: init.player2, score: 0, position: "looser" },
    ];

    this.choices = ["pierre", "feuille", "ciseau"];
  }

  // la méthode permettant de lancer le jeu
  run() {
    while(this.results[0].score === this.results[1].score){
      // soit on a commencé à compter et donc this.counter > 0 soit on commence le jeu et this.tour est égal à 10 valeur dans init.tour
      this.tour = this.counter > 0 ? 1 : this.tour ;
      while (this.tour > 0) {
        // initialisation des choix
        let choice1 = this.getChoice();
        let choice2 = this.getChoice();
  
        // pour choisir des valeurs distincts, on vérifie qu'elles ne sont pas égales
        // on ne compte pas un tour si on a égalité
        while (choice1 === choice2) {
          choice1 = this.getChoice();
          choice2 = this.getChoice();
        }
  
        // qui gagne ?
        // choice1 pierre
        if (choice1 === this.choices[0]) {
          // pierre gagne contre ciseau
          if(choice2 === this.choices[2]){
            // le premier joueur gagne
            this.results[0].score++;
          }else{
            // le deuxième joueur gagne
            this.results[1].score++;
          }
        }
        // choice1 feuille
        if (choice1 === this.choices[1]) {
          // feuille gagne contre pierre
          if(choice2 === this.choices[0]){
              // le premier joueur gagne
            this.results[0].score++;
          }else{
            // le deuxième joueur gagne
            this.results[1].score++;
          }
        }
  
        // choice1 ciseau
        if (choice1 === this.choices[2]) {
          // ciseau gagne contre feuille
          if(choice2 === this.choices[1]){
             // le premier joueur gagne
            this.results[0].score++;
          }else{
             // le deuxième joueur gagne
            this.results[1].score++;
          }
        }
        this.counter++;
        this.tour--;
      }
    }
    
  }

  // méthode permettant de faire un lancer pierre, feuille, ciseau
  getChoice() {
    const r = Math.random(); // un nombre qui est pris entre 0 et 1
    //
    if (r < 1 / 3) {
      return this.choices[0];
    } else if (r < 2 / 3) {
      return this.choices[1];
    } else {
      return this.choices[2];
    }
  }

  // on récupère les informations du jeu
  info() {
    // on ordonne les scores par ordre décroissant
    this.results.sort((p1, p2) => p2.score - p1.score);
    
    this.results[0].position = `Winner, tour ${this.counter}`;

    return this.results;
  }
}

const chifoumi = new Chifoumi({player1 : "Alan", player2 : "Sophie", tour : 10});

// on lance le jeu
chifoumi.run();

console.table(chifoumi.info());

