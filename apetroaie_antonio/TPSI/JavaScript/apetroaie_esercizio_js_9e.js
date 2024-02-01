function differenzaOrari(ora1, ora2) {
    const msOrario1 = ora1.h * 3600000 + ora1.m * 60000 + ora1.s * 1000;
    const msOrario2 = ora2.h * 3600000 + ora2.m * 60000 + ora2.s * 1000;

    const differenzaMs = Math.abs(msOrario1 - msOrario2);
    const differenzaSecondi = differenzaMs / 1000;
    const differenzaMinuti = differenzaMs / 60000;
    const differenzaOre = differenzaMs / 3600000;

    return {
        differenzaMs,
        differenzaSecondi,
        differenzaMinuti,
        differenzaOre
    };
}

const orario1 = { h: 10, m: 30, s: 45 };
const orario2 = { h: 12, m: 15, s: 20 };

const risultato = differenzaOrari(orario1, orario2);

console.log(`Differenza in millisecondi: ${risultato.differenzaMs} ms`);
console.log(`Differenza in secondi: ${risultato.differenzaSecondi} s`);
console.log(`Differenza in minuti: ${risultato.differenzaMinuti} min`);
console.log(`Differenza in ore: ${risultato.differenzaOre} h`);
