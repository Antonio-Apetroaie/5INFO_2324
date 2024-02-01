const concatenateN = (stringa, N) => {
  if (typeof stringa !== 'string' || typeof N !== 'number' || N <= 0) {
    return "Input non valido. Inserire una stringa e un numero positivo.";
  }

  let risultato = "";
  for (let i = 0; i < N; i++) {
    risultato += stringa;
  }

  return risultato;
};

const inputStringa = "ciao!";
const inputN = 4;

const risultato = concatenateN(inputStringa, inputN);
console.log(risultato);
