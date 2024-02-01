function invertCase(inputString) {
    let risultato = '';
  
    for (let i = 0; i < inputString.length; i++) {
        const carattereCorrente = inputString.charAt(i);
      
        if (carattereCorrente === carattereCorrente.toLowerCase()) {
            risultato += carattereCorrente.toUpperCase();
        } else {
            risultato += carattereCorrente.toLowerCase();
        }
    }
  
    return risultato;
}


const stringaInput = "CiAo SceMOOOO ";
const risultato = invertCase(stringaInput);
console.log(risultato);
