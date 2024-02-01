function abbreviaNomeCognome(inputString) {
    const [nome, cognome] = inputString.split(' ');

    const primaLetteraCognome = cognome.charAt(0).toUpperCase();

    const abbreviazione = `${nome} ${primaLetteraCognome}.`;
    return abbreviazione;
}

const inputString = "Antonio Ape";
const risultato = abbreviaNomeCognome(inputString);
console.log(risultato); 
