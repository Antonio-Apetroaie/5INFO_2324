 
const rimuoviOccorrenza = (stringaOriginale, stringaDaRimuovere) => {
  if (typeof stringaOriginale !== 'string' || typeof stringaDaRimuovere !== 'string') {
    return "Input non valido. Inserire due stringhe.";
  }

  const indiceOccorrenza = stringaOriginale.indexOf(stringaDaRimuovere);

  if (indiceOccorrenza !== -1) {
    const parteIniziale = stringaOriginale.slice(0, indiceOccorrenza);
    const parteFinale = stringaOriginale.slice(indiceOccorrenza + stringaDaRimuovere.length);
    return parteIniziale + parteFinale;
  } else {
    return stringaOriginale;
};

const inputStringaOriginale = "La veloce volpe marrone salta sopra il cane pigro";
const inputStringaDaRimuovere = "il";

const risultato = rimuoviOccorrenza(inputStringaOriginale, inputStringaDaRimuovere);
console.log(risultato);
