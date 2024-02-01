 
const insert = (stringa1, stringa2, N) => {
  if (typeof stringa1 !== 'string' || typeof stringa2 !== 'string' || typeof N !== 'number' || N < 0 || N > stringa1.length) {
    return "Input non valido. Inserire due stringhe e un numero compreso tra 0 e la lunghezza della prima stringa inclusa.";
  }

  const parteIniziale = stringa1.slice(0, N);
  const parteFinale = stringa1.slice(N);

  return parteIniziale + stringa2 + parteFinale;
};

const stringa1 = "Facciamo tanti esercizi che ci fanno bene";
const stringa2 = "JavaScript";
const posizioneN = 23;

const risultato = insert(stringa1, stringa2, posizioneN);
console.log(risultato);
