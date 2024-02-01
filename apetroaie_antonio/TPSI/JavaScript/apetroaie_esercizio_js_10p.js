const troncaDopoNParole = (stringa, N) => {
  if (typeof stringa !== 'string' || typeof N !== 'number' || N <= 0) {
    return "Input non valido. Inserire una stringa e un numero positivo.";
  }

  const parole = stringa.split(' ');
  const stringaTroncata = parole.slice(0, N).join(' ');

  return stringaTroncata;
};

const inputStringa = "Facciamo tanti esercizi che ci fanno bene";
const inputN = 5;

const risultato = troncaDopoNParole(inputStringa, inputN);
console.log(risultato);

