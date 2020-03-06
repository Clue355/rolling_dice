



let result = ''

document.getElementById('button').onclick = function() {
    let n = document.getElementById("number").Value
    let resultOne
    let resultTwo
    for (let i = 0; i <= n; i++){
    min = Math.ceil(1);
    max = Math.floor(7);
    resultOne = Math.floor(Math.random() * (max - min)) + min;
    resultTwo = Math.floor(Math.random() * (max - min)) + min;
    result += resultOne + resultTwo
    }
    
    return result
  }
var t = document.createTextNode(result + '');
document.getElementById("output").innerHTML = t 
