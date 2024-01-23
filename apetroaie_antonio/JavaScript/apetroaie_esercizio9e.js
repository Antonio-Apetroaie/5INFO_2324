function calcolaDifferenzaOrari(orario1, orario2) {

  const { h: h1, m: m1, s: s1 } = orario1;
  const { h: h2, m: m2, s: s2 } = orario2;

  const orario1InMillisecondi = h1 * 3600000 + m1 * 60000 + s1 * 1000;
  const orario2InMillisecondi = h2 * 3600000 + m2 * 60000 + s2 * 1000;

  const differenzaInMillisecondi = Math.abs(orario1InMillisecondi - orario2InMillisecondi);

  return differenzaInMillisecondi;
}

const orario1 = { h: 10, m: 30, s: 0 };
const orario2 = { h: 12, m: 45, s: 30 };

const differenza = calcolaDifferenzaOrari(orario1, orario2);

console.log(`La differenza tra gli orari è di ${differenza} millisecondi.`);




























