



let result = ''
// function dice(n){
document.getElementById('button').onclick = function() {
    let n = document.getElementById("number").value
    let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for (let i = 1; i <= n; i++){
    // diceOne = Math.ceil(Math.random() * 6)
    // diceTwo = Math.ceil(Math.random() * 6)
    min = Math.ceil(1);
    max = Math.floor(7);
    resultOne = Math.floor(Math.random() * (max - min)) + min;
    resultTwo = Math.floor(Math.random() * (max - min)) + min;
    result = resultOne + resultTwo
    // result = diceOne + diceTwo
    count[result] = count[result] + 1
    }
    for(let i = 0; i < count.length; i++) {
        let element = document.createElement("div")
        element.className = "bar"
        element.style.width = count[i] * 2 + "px"
        document.getElementById("rectangle").appendChild(element)
    }
    // return (document.getElementById("output").textContent =  count)
    document.getElementById("output").textContent = count
}
// console.log(dice(10))