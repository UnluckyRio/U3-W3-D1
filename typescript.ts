//1) Quali sono i tipi primitivi principali in TypeScript?

//number: per numeri interi e decimali.
//string: per testo e stringhe.
//boolean: per valori true o false.
//null e undefined: per valori nulli o non definiti.
//symbol: per valori univoci e immutabili.
//bigint: per numeri interi molto grandi.

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

let myName: string;
myName = "Valerio";
let age: number;
age = 26;
let isStudyingTypeScript: boolean;
isStudyingTypeScript = true;

//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => { return "Ciao " + name }

const greet = (name: string): string => {
  return "Ciao " + name;
};

//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => { return a + b }

function sum(a: number, b: number): number {
  return a + b;
}

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
function calcolaPrezzoConIVA(prezzo: number): number {
  return prezzo * 1.22;
}

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
function concatenaELunghezza(str1: string, str2: string): number {
  const stringaConcatenata: string = str1 + str2;
  return stringaConcatenata.length;
}

//7) Cos'è un Type Union e come si scrive?
// Un Type Union permette a una variabile di avere più tipi possibili, si scrive usando il simbolo |

let valore: string | number;
valore = "ciao"; // valido
valore = 42; // valido

//8) Crea una variabile che possa contenere un numero, null o undefined.

let numeroOpzionale: number | null | undefined;
numeroOpzionale = 10;
numeroOpzionale = null;
numeroOpzionale = undefined;

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type GiornoSettimana =
  | "lunedì"
  | "martedì"
  | "mercoledì"
  | "giovedì"
  | "venerdì"
  | "sabato"
  | "domenica";
let oggi: GiornoSettimana = "lunedì";

//10) Tipizza il seguente array di numeri nei due modi possibili:
//const numbers = [1, 2, 3]

const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

type MiaTupla = [string, string, string, number, number];
const esempioDati: MiaTupla = ["primo", "secondo", "terzo", 4, 5];

//12) Qual è la differenza tra type e interface?

// - 'type' può definire union types, primitive, e tipi complessi
// - 'interface' è specifico per oggetti e può essere esteso
// - 'interface' supporta declaration merging, 'type' no
// - 'interface' è più performante per oggetti complessi

//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}

//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface Utente {
  email: string;
  telefono?: string; // Il ? indica che è opzionale
}

//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studente {
  nome: string;
  voto: number;
}
const studenti: Studente[] = [
  { nome: "Mario", voto: 8 },
  { nome: "Lucia", voto: 9 },
  { nome: "Giuseppe", voto: 7 },
];

//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
}

interface Auto extends Veicolo {
  numeroPorte: number;
  tipoCarburante: string;
}

//17) Crea un oggetto che implementi l'interfaccia Auto.
const miaAuto: Auto = {
  marca: "Toyota",
  modello: "Corolla",
  anno: 2023,
  numeroPorte: 4,
  tipoCarburante: "benzina",
};

//18) Cosa sono i Generics in TypeScript?

// I Generics permettono di creare componenti riutilizzabili che funzionano con diversi tipi
// mantenendo la type safety. Si definiscono usando <T> dove T è un placeholder per il tipo.

//19) È possibile avere più tipi generici in un'interfaccia?

// Sì, è possibile. Esempio:
interface CoppiaGenerica<T, U> {
  primo: T;
  secondo: U;
}
const coppia: CoppiaGenerica<string, number> = { primo: "ciao", secondo: 42 };

//20) Crea un'interfaccia generica per una risposta API.
interface RispostaAPI<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: Date;
}

// Esempio di utilizzo dell'interfaccia generica
const rispostaUtente: RispostaAPI<Utente> = {
  success: true,
  message: "Utente recuperato con successo",
  data: { email: "test@example.com", telefono: "123456789" },
  timestamp: new Date(),
};

// Codice aggiuntivo per interagire con la pagina HTML
// Funzione che viene eseguita quando la pagina è caricata
window.addEventListener("DOMContentLoaded", () => {
  // Ottiengo il riferimento al div content
  const contentDiv = document.getElementById("content") as HTMLDivElement;

  if (contentDiv) {
    // Crea contenuto dinamico usando le variabili TypeScript definite sopra
    const welcomeMessage: string = `Ciao ${myName}! Hai ${age} anni e stai studiando TypeScript: ${
      isStudyingTypeScript ? "Sì" : "No"
    }`;

    // Aggiungo il messaggio alla pagina con esempi delle nuove funzioni
    contentDiv.innerHTML = `
            <h2>Informazioni dall'TypeScript:</h2>
            <p>${welcomeMessage}</p>
            <p>Risultato della funzione greet: ${greet(myName)}</p>
            <p>Somma di 10 + 15 = ${sum(10, 15)}</p>
            <h3>Esempi delle funzioni implementate:</h3>
            <p>Prezzo con IVA (€100): €${calcolaPrezzoConIVA(100).toFixed(
              2
            )}</p>
            <p>Lunghezza concatenazione "Hello" + "World": ${concatenaELunghezza(
              "Hello",
              "World"
            )}</p>
            <p>Giorno della settimana: ${oggi}</p>
            <p>Studenti: ${studenti
              .map((s) => s.nome + " (voto: " + s.voto + ")")
              .join(", ")}</p>
            <p>Auto: ${miaAuto.marca} ${miaAuto.modello} (${miaAuto.anno})</p>
        `;

    // Aggiungo uno stile per rendere il contenuto più visibile
    contentDiv.style.backgroundColor = "#f0f0f0";
    contentDiv.style.padding = "20px";
    contentDiv.style.borderRadius = "8px";
    contentDiv.style.marginTop = "20px";
  }
});
