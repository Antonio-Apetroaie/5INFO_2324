const tronca = (stringa, N) => {
  if (typeof stringa !== 'string' || typeof N !== 'number' || N <= 0) {
    return "Input non valido. Inserire una stringa e un numero positivo.";
  }

  if (stringa.length <= N) {
    return stringa;
  } else {
    return stringa.slice(0, N) + "...";
  }
};

const inputStringa = "Facciamo tanti esercizi che ci fanno bene";
const inputN = 4;

const risultato = tronca(inputStringa, inputN);
console.log(risultato);

