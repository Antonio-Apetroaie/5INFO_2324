function censuraCognome(email) {
    const [nome, dominio] = email.split('@');
    const [cognome] = nome.split('.');
  
    const cognomeCensurato = '*'.repeat(cognome.length);
  
    const emailCensurata = `${nome.replace(cognome, cognomeCensurato)}@${dominio}`;
  
    return emailCensurata;
  }
  
  const emailOriginale = "mario.rossi@istitutoagnelli.it";
  const emailCensurata = censuraCognome(emailOriginale);
  console.log(emailCensurata);
  
  
  
  
  
  
  
  
  