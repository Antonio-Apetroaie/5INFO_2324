function untokenize(inputString) {
    return inputString.replace(/ /g, '-');
  }
  
  let inputString = "ciao Luca abbassati i pantaloni";
  let result = untokenize(inputString);
  console.log(result);
  