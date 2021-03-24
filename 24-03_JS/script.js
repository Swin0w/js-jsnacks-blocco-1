/* Creare un oggetto che descriva uno studente con le
  seguenti proprietà: nome, cognome e età. Stampare a
  schermo attraverso il for in tutte le proprietà. */

  function physics() {
    var student = {
      'name': 'Simone',
      'surname': 'Marzolla',
      'age': 21
    }
    console.log(student);
  }
physics();

function physicsArr() {
  var student = {
    [
      'nome': 'Giulio',
      'cognome': 'Di Napoli',
      'age': 22
    ]
    [
      'nome': 'Giorgia',
      'cognome': 'Finocchio',
      'age': 25
    ]
  }
  for (student in obj) {
    console.log(student)
  }
}
physicsArr();
