let n = 1

let result
function getRandomInt(n) {
    let resultOne
    let resultTwo
    for (let i = 0; i <= n; i++){
    min = Math.ceil(1);
    max = Math.floor(7);
    resultOne = Math.floor(Math.random() * (max - min)) + min;
    resultTwo = Math.floor(Math.random() * (max - min)) + min;
    
    }
    result = resultOne + resultTwo
    return result
  }
  
  var text = document.createTextNode(result);
  let output = document.getElementsByClassName("output")
  output.appendChild(text);