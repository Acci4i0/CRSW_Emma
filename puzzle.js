// ============================================================================
//  PUZZLE.JS — L'UNICO FILE DA MODIFICARE PER CREARE UN CRUCIVERBA
// ============================================================================
//
//  Per fare il cruciverba di una nuova persona, cambia solo i valori qui sotto
//  e ricarica la pagina: la griglia (portrait + landscape) e il footer con gli
//  indizi si rigenerano da soli, in automatico.
//
//  Regole per le risposte (answer):
//   - una sola parola, senza spazi
//   - vengono messe in MAIUSCOLO in automatico; le lettere accentate vengono
//     tolte, non convertite: scrivi "BONARIETA", non "BONARIETÀ"
//   - le parole devono CONDIVIDERE QUALCHE LETTERA tra loro, altrimenti il
//     cruciverba non puo incrociarsi (in locale, con ?dev, vedrai un avviso)
//
//  Numero di indizi: libero (il footer si divide da solo in due colonne).
//
//  Avatar (facoltativi): immagini in assets/avatars/. Con piu' di un avatar
//  compaiono le frecce per sceglierlo; la scelta resta salvata nel browser.
//  Una voce puo' essere il percorso di un'immagine ("assets/avatars/x.webp")
//  oppure un'animazione a sprite sheet ({ sprite, frames, frameMs }).
// ============================================================================

const PUZZLE = {
  // Titolo della scheda del browser.
  title: "Emma",

  // Gli indizi e le risposte. clue = la domanda mostrata sotto "INFO".
  clues: [
    { number: 1, clue: "Il mio nome",                 answer: "EMMA" },
    { number: 2, clue: "Il mio soprannome",           answer: "LALUPA" },
    { number: 3, clue: "Cosa faccio principalmente?", answer: "LAVORO" },
    { number: 4, clue: "Settore?",                    answer: "MODA" },
    { number: 5, clue: "La mia passione è la",        answer: "DANZA" },
    { number: 6, clue: "Ma anche i",                  answer: "RUGBYSTI" },
    { number: 7, clue: "Invece il mio hobby sono le", answer: "ESCURSIONI" },
    { number: 8, clue: "Dove? In...",                 answer: "MONTAGNA" },
  ],

  // Contatti mostrati sotto "CONTACT".
  contact: {
    mail: "emma.bizzotto@gmail.com",
    tel: "+393333622209", // usato nel link "chiama"
    telDisplay: "+39 3333622209", // come viene mostrato
    instagram: "emma_bizzotto",
    instagramUrl: "https://instagram.com/emma_bizzotto",
    year: 2026,
  },

  // Avatar in alto a sinistra: [] = nessun avatar.
  avatars: [
    "assets/avatars/sorriso.webp",
    "assets/avatars/berretto-e-rosa.webp",
    "assets/avatars/laurea-occhiali-verdi.webp",
    "assets/avatars/bacio-alla-bottiglia.webp",
    "assets/avatars/pelliccia-e-pasticcini.webp",
    "assets/avatars/palestra.webp",
  ],
};
