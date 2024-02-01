function eseguiOperazione(num1, num2, callback) {
  return callback(num1, num2);
}

// Callback per la somma
function somma(a, b) {
  return a + b;
}

// Callback per il prodotto
function prodotto(a, b) {
  return a * b;
}

// Callback per l'elevamento a potenza
function elevamentoAPotenza(a, b) {
  return Math.pow(a, b);
}

// Main
const numero1 = 5;
const numero2 = 3;

// Callback: Somma
const risultatoSomma = eseguiOperazione(numero1, numero2, somma);
console.log(`Somma di ${numero1} e ${numero2}: ${risultatoSomma}`);

// Callback: Prodotto
const risultatoProdotto = eseguiOperazione(numero1, numero2, prodotto);
console.log(`Prodotto di ${numero1} e ${numero2}: ${risultatoProdotto}`);

// Callback: Elevamento a potenza
const risultatoPotenza = eseguiOperazione(numero1, numero2, elevamentoAPotenza);
console.log(`${numero1} elevato a ${numero2}: ${risultatoPotenza}`);
