function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function calcolaFibonacci(input) {
  const n = parseInt(input);

  if (isNaN(n) || n < 0) {
    return "Inserisci un numero intero positivo.";
  }

  const risultato = fibonacci(n);
  return `Il ${n} numero di Fibonacci è: ${risultato}`;
}

// Main
const input1 = 5;
const input2 = "8";
const input3 = 10;
const input4 = "15";
const input5 = 3;

console.log(calcolaFibonacci(input1));
console.log(calcolaFibonacci(input2));
console.log(calcolaFibonacci(input3));
console.log(calcolaFibonacci(input4));
console.log(calcolaFibonacci(input5));
