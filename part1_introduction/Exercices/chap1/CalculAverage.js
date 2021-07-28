/**
 * 

Sujet

Créez une fonction constructeur CalculAverage, elle permettra de calculer la moyenne des étudiants. Utilisez les données suivantes pour effectuer ces moyennes.

Si vous le souhaitez, vous pouvez utiliser la notion de classe. Sinon faites une fonction comme on l'a vu en cours pour l'instant.

Créez également une fonction dans votre classe ou fonction constructeur afin d'ordonner les étudiants en fonction de leur moyenne (ordre croissant).

 */

const students = [
  { name: "Alan", notes: [11, 18, 10, 9] },
  { name: "Sophie", notes: [10, 8, 17, 10.5] },
  { name: "Bernard", notes: [20, 20, 11, 18] },
];

function CalculAverage(students) {
  this.students = students; // attention là on fait une copie par référence donc les choses sont liées
  this.results = [];
  this.precision = 100;

  this.average = function () {
    // Vous pouvez définir plusieurs variables avec le let en utilisant la virgule pour séparer les noms
    let sum = 0,
      nb = 0,
      average = "Pas de note";
    for (const student of this.students) {
      // assignation par décomposition dans les accolades on met le nom des clés du littéral, rappel un littéral est simplement un objet { } avec des accolades
      const { name, notes } = student;

      // console.log(name, notes)

      sum = this.sum(student.notes); // on utilise une fonction définie dans la fonction constructeur
      nb = student.notes.length;

      if (nb !== 0)
        average = Math.floor((sum / nb) * this.precision) / this.precision;

      this.results.push({ name, notes, average });
    }

    // return this.results;
  };

  this.sum = function (notes) {
    let sum = 0;
    for (const note of notes) {
      sum += note;
    }

    return sum;
  };

  this.sort = function () {
    this.results.sort(function (s1, s2) {
      return s1.average - s2.average;
    });
  };
}

// création d'une instance de la fonction constructeur
const calculate = new CalculAverage(students);
calculate.precision = 10;

calculate.average();
calculate.sort();

console.table(calculate.results);