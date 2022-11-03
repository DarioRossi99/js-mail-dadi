let number1 = Math.floor(Math.random() *6 + 1);
console.log (number1)

let number2 = Math.floor(Math.random() *6 + 1);
console.log (number2)

if (number1 > number2){
    alert("number1 ha vinto")
}else if (number2 > number1){
    alert("number2 ha vinto")
}else {
    alert("pareggio")
}