function sommaNumeriCompresi(n) {
    if (typeof n !== 'number' && !(/^\d+$/.test(n))) {
        console.error('Il parametro deve essere un numero intero positivo.');
        return;
    }

    n = parseInt(n);

    if (isNaN(n) || n < 0) {
        console.error('Il parametro deve essere un numero intero positivo.');
        return;
    }

    let somma = 0;
    for (let i = 0; i <= n; i++) {
        somma += i;
    }

    return somma;
}

const risultato1 = sommaNumeriCompresi(5);
console.log(`La somma dei numeri compresi tra 0 e 5 è: ${risultato1}`);

const risultato2 = sommaNumeriCompresi('8');
console.log(`La somma dei numeri compresi tra 0 e 8 è: ${risultato2}`);

const risultato3 = sommaNumeriCompresi(10);
console.log(`La somma dei numeri compresi tra 0 e 10 è: ${risultato3}`);
