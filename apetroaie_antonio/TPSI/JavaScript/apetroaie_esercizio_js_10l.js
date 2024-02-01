 
const scambiaPrimiDueCaratteri = (stringa1, stringa2) => {
  if (stringa1.length === 1 || stringa2.length === 1) {
    return "Inserire stringhe valide con almeno due caratteri.";
  }

  const nuovaStringa1 = stringa2.slice(0, 2) + stringa1.slice(2);
  const nuovaStringa2 = stringa1.slice(0, 2) + stringa2.slice(2);

  return nuovaStringa1 + nuovaStringa2;
};

const parola1 = "ciao";
const parola2 = "mondo";

const risultato = scambiaPrimiDueCaratteri(parola1, parola2);
console.log(risultato);
