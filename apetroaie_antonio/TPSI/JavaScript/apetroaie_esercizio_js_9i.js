 
function trovaMaggiore(num1, num2, num3) {
  const maggiore = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
  return maggiore;
}

// Main
const risultato1 = trovaMaggiore(10, 5, 8);
console.log("Il maggiore tra 10, 5 e 8 è:", risultato1);

const risultato2 = trovaMaggiore(-3, 8, 2);
console.log("Il maggiore tra -3, 8 e 2 è:", risultato2);

const risultato3 = trovaMaggiore(15, 15, 20);
console.log("Il maggiore tra 15, 15 e 20 è:", risultato3);
