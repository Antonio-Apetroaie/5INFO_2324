function capitalize(inputString) {
    if (inputString.length === 0) {
      return inputString;
    }
  
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  
  let inputString = "mi sono innamorato";
  let result = capitalize(inputString);
  console.log(result); 
  