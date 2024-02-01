 
function trovaMaggiore(num1, num2) {
  const maggiore = num1 > num2 ? num1 : num2;
  return maggiore;
}

// Main
const risultato1 = trovaMaggiore(10, 5);
console.log("Il maggiore tra 10 e 5 è:", risultato1);

const risultato2 = trovaMaggiore(-3, 8);
console.log("Il maggiore tra -3 e 8 è:", risultato2);

const risultato3 = trovaMaggiore(15, 15);
console.log("Il maggiore tra 15 e 15 è:", risultato3);
