const addizione = (a, b) => a + b;

const sottrazione = (a, b) => a - b;

const moltiplicazione = (a, b) => a * b;

const divisione = (a, b) => (b !== 0 ? a / b : "Impossibile dividere per zero");


const main = () => {
  console.log("Addizione: " + addizione(5, 3));
  console.log("Sottrazione: " + sottrazione(8, 4));
  console.log("Moltiplicazione: " + moltiplicazione(6, 2));
  console.log("Divisione: " + divisione(10, 2));

  console.log("Addizione: " + addizione(10, -3));
  console.log("Sottrazione: " + sottrazione(15, 7));
  console.log("Moltiplicazione: " + moltiplicazione(-4, 3));
  console.log("Divisione: " + divisione(20, 4));
};

main();
