 
function confrontaOrari(orario1, orario2, orario3) {
  const tempo1 = orario1.h * 3600 + orario1.m * 60 + orario1.s;
  const tempo2 = orario2.h * 3600 + orario2.m * 60 + orario2.s;
  const tempo3 = orario3.h * 3600 + orario3.m * 60 + orario3.s;

  if (tempo1 <= tempo2 && tempo1 <= tempo3) {
    return orario1;
  } else if (tempo2 <= tempo1 && tempo2 <= tempo3) {
    return orario2;
  } else {
    return orario3;
  }
}

// Main
const orario1 = { h: 10, m: 30, s: 15 };
const orario2 = { h: 9, m: 45, s: 30 };
const orario3 = { h: 11, m: 15, s: 5 };

const risultato1 = confrontaOrari(orario1, orario2, orario3);
console.log("Il minore orario tra i tre è:", risultato1);

const orario4 = { h: 8, m: 0, s: 45 };
const orario5 = { h: 7, m: 30, s: 20 };
const orario6 = { h: 9, m: 15, s: 10 };

const risultato2 = confrontaOrari(orario4, orario5, orario6);
console.log("Il minore orario tra i tre è:", risultato2);
