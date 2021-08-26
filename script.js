// 1. creo un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 2. chiedo l'utente il cognome
// 3. aggiungo il cognome nell'array
// 4. stampo la lista ordinata alfabeticamente
// 5. segno il nemero vero della posizione del cognome

var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var cognomeUtente = prompt("Inserisci il tuo cognome").toLowerCase();
console.log(cognomeUtente);

cognomeUtente = cognomeUtente.charAt(0).toUpperCase()+cognomeUtente.slice(1);
console.log(cognomeUtente);
listaCognomi.push(cognomeUtente);
listaCognomi.sort();

for (var i=0; i<listaCognomi.length; i++){
    console.log(i + 1 + " " + ( listaCognomi[i]))
}

console.log(listaCognomi.indexOf(cognomeUtente) + 1);

