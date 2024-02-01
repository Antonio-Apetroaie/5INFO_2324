function stampaAttributi(obj) {
  for (const attributo in obj) {
    console.log("Nome dell'attributo:", attributo);
    console.log("Tipo dell'attributo:", typeof obj[attributo]);

    if (typeof obj[attributo] === 'string') {
      console.log("Valore dell'attributo (minuscolo):", obj[attributo].toLowerCase());
    } else {
      console.log("Valore dell'attributo:", obj[attributo]);
    }

    console.log("\n---\n");
  }
}

// Main
const oggetto1 = {
  finestre: 4,
  radice: true,
  dispositivi: ['PC', 'Smartphone'],
  temperatura: 25,
  luogo: 'Casa'
};

console.log("Stampa attributi dell'oggetto 1:");
stampaAttributi(oggetto1);

const oggetto2 = {
  finestre: 8,
  radice: false,
  dispositivi: ['Laptop', 'Tablet'],
  temperatura: 30,
  luogo: 'Ufficio'
};

console.log("Stampa attributi dell'oggetto 2:");
stampaAttributi(oggetto2);
