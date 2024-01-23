function capitalizeAll(inputString) {
    if (inputString.length === 0) {
      return inputString;
    }
  
    let words = inputString.split(' ');
  
    let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    return capitalizedWords.join(' ');
  }
  
  let inputString = "Questa stringa avrà la prima lettera di ogni parola maiuscola";
  let result = capitalizeAll(inputString);
  console.log(result);
  