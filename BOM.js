console.log("-".repeat(20));
console.log("2- BOM");
console.log("-".repeat(20));

console.log("-- التكليفات --");
console.log("----------------------");

console.log("-- التكليف 01 --");
console.log("----------------------");

let newButt = document.createElement("button");
document.body.appendChild(newButt);
newButt.innerHTML = "Count";
    
newButt.addEventListener("click", function () {
    let msg = prompt("Print Number From – To", "5-20");

    let splitM = msg.split("-");

    let firstNumber = parseInt(splitM[0]);
    let secondNumber = parseInt(splitM[1]);

    let min = Math.min(firstNumber, secondNumber);

    let max = Math.max(firstNumber, secondNumber);

    for (let i = min; i <= max; i++) {

        let newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.innerHTML = i + "<br>";
        console.log(i);
    }
});

console.log("-- التكليف 02 --");
console.log("----------------------");




