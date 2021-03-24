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
/* Creare un array di oggetti di studenti. Ciclare su tutti gli
   studenti e stampare per ognuno nome e cognome */
function physicsArr() {
  var students = [
    {
      'nome': 'Giulio',
      'cognome': 'Di Napoli',
      'age': 22
    },
    {
      'nome': 'Giorgia',
      'cognome': 'Finocchio',
      'age': 25
    }
  ]
  for (const i in students) {
    console.log(students[i]);
  }
  return students;
}
var students = physicsArr();
/* Dare la possibilità all'utente attraverso 3 prompt di
   aggiungere un nuovo oggetto studente inserendo
   nell'ordine: nome, cognome e età.*/
function physicsArrchoice() {

  var student = {
      'nome': "",
      'cognome': "",
      'age': 0
    }
    // Aggiunta utente tramite click del pulsante

    var name = prompt("Inserisci il tuo nome:");
    var surname = prompt("Inserisci il tuo cognome:");
    var age = parseInt(prompt("Inserisci la tua età:"));
    student['nome'] = name;
    student['cognome'] = surname;
    student['age'] = age;

    students.push(student);
    console.log(students);
 }
$("#add").click(physicsArrchoice);
$("#del").click(function(){
     students.pop();
     console.log(students);
   })
