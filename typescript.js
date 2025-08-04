//1) Quali sono i tipi primitivi principali in TypeScript?
//number: per numeri interi e decimali.
//string: per testo e stringhe.
//boolean: per valori true o false.
//null e undefined: per valori nulli o non definiti.
//symbol: per valori univoci e immutabili.
//bigint: per numeri interi molto grandi.
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName;
myName = "Valerio";
var age;
age = 26;
var isStudyingTypeScript;
isStudyingTypeScript = true;
//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => { return a + b }
function sum(a, b) {
    return a + b;
}
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
function calcolaPrezzoConIVA(prezzo) {
    return prezzo * 1.22;
}
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
function concatenaELunghezza(str1, str2) {
    var stringaConcatenata = str1 + str2;
    return stringaConcatenata.length;
}
//7) Cos'è un Type Union e come si scrive?
// Un Type Union permette a una variabile di avere più tipi possibili, si scrive usando il simbolo |
var valore;
valore = "ciao"; // valido
valore = 42; // valido
//8) Crea una variabile che possa contenere un numero, null o undefined.
var numeroOpzionale;
numeroOpzionale = 10;
numeroOpzionale = null;
numeroOpzionale = undefined;
var oggi = "lunedì";
//10) Tipizza il seguente array di numeri nei due modi possibili:
//const numbers = [1, 2, 3]
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
var esempioDati = ["primo", "secondo", "terzo", 4, 5];
var studenti = [
    { nome: "Mario", voto: 8 },
    { nome: "Lucia", voto: 9 },
    { nome: "Giuseppe", voto: 7 },
];
//17) Crea un oggetto che implementi l'interfaccia Auto.
var miaAuto = {
    marca: "Toyota",
    modello: "Corolla",
    anno: 2023,
    numeroPorte: 4,
    tipoCarburante: "benzina",
};
var coppia = { primo: "ciao", secondo: 42 };
// Esempio di utilizzo dell'interfaccia generica
var rispostaUtente = {
    success: true,
    message: "Utente recuperato con successo",
    data: { email: "test@example.com", telefono: "123456789" },
    timestamp: new Date(),
};
// Codice aggiuntivo per interagire con la pagina HTML
// Funzione che viene eseguita quando la pagina è caricata
window.addEventListener("DOMContentLoaded", function () {
    // Ottiengo il riferimento al div content
    var contentDiv = document.getElementById("content");
    if (contentDiv) {
        // Crea contenuto dinamico usando le variabili TypeScript definite sopra
        var welcomeMessage = "Ciao ".concat(myName, "! Hai ").concat(age, " anni e stai studiando TypeScript: ").concat(isStudyingTypeScript ? "Sì" : "No");
        // Aggiungo il messaggio alla pagina con esempi delle nuove funzioni
        contentDiv.innerHTML = "\n            <h2>Informazioni dall'TypeScript:</h2>\n            <p>".concat(welcomeMessage, "</p>\n            <p>Risultato della funzione greet: ").concat(greet(myName), "</p>\n            <p>Somma di 10 + 15 = ").concat(sum(10, 15), "</p>\n            <h3>Esempi delle funzioni implementate:</h3>\n            <p>Prezzo con IVA (\u20AC100): \u20AC").concat(calcolaPrezzoConIVA(100).toFixed(2), "</p>\n            <p>Lunghezza concatenazione \"Hello\" + \"World\": ").concat(concatenaELunghezza("Hello", "World"), "</p>\n            <p>Giorno della settimana: ").concat(oggi, "</p>\n            <p>Studenti: ").concat(studenti
            .map(function (s) { return s.nome + " (voto: " + s.voto + ")"; })
            .join(", "), "</p>\n            <p>Auto: ").concat(miaAuto.marca, " ").concat(miaAuto.modello, " (").concat(miaAuto.anno, ")</p>\n        ");
        // Gli stili sono già definiti nel CSS, non serve aggiungere stili inline
        // Il contenuto sarà automaticamente stilizzato dal CSS della pagina
    }
});
