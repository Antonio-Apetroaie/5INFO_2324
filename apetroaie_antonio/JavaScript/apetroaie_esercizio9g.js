function abbreviaNomeCognome(Stringa) {
    const [nome, cognome] = Stringa.split(' ');


    const primaLetteraCognome = cognome.charAt(0).toUpperCase();


    const abbreviazione = `${nome} ${primaLetteraCognome}.`;
    return abbreviazione;
}

const Stringa = "Davide Emanuel";
const risultato = abbreviaNomeCognome(Stringa);
console.log(risultato);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  