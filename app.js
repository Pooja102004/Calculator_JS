// let currentInput = ""; // Current number being entered
// let previousInput = ""; // Previous number for the calculation
// let operator = null; // Operator for the calculation

// // Function to update the display
// function updateDisplay() {
//     const calculationText = document.getElementById("calculationText");
//     const resultText = document.getElementById("resultText");

//     // Show the ongoing calculation in the calculation text
//     calculationText.innerText = `${previousInput} ${operator || ""} ${currentInput}`;
//     resultText.innerText = currentInput || "0"; // Show current input in the result display
// }

// // Function to handle number and dot clicks
// function handleNumber(value) {
//     currentInput += value; // Append the number or dot to the current input
//     updateDisplay();
// }

// // Function to handle operator clicks
// function handleOperator(value) {
//     if (currentInput === "") return; // Ignore if no number has been entered

//     if (previousInput !== "" && currentInput !== "" && operator !== null) {
//         calculate(); // Perform the calculation if there is already an operator
//     }

//     operator = value; // Set the operator
//     previousInput = currentInput; // Move the current input to previous input
//     currentInput = ""; // Clear the current input for the next number
//     updateDisplay();
// }

// // Function to perform calculation
// function calculate() {
//     if (previousInput === "" || currentInput === "" || operator === null) return;

//     const prev = parseFloat(previousInput);
//     const current = parseFloat(currentInput);
//     let result = 0;

//     if (operator === "+") {
//         result = prev + current;
//     } else if (operator === "-") {
//         result = prev - current;
//     } else if (operator === "X") {
//         result = prev * current;
//     } else if (operator === "/") {
//         result = current !== 0 ? prev / current : "Error";
//     }

//     // Save the calculation to local storage
//     saveCalculation(`${previousInput} ${operator} ${currentInput} = ${result}`);

//     currentInput = result.toString(); // Show the result as the current input
//     previousInput = ""; // Clear previous input
//     operator = null; // Clear the operator
//     updateDisplay();
// }

// // Function to save calculation to local storage
// function saveCalculation(calculation) {
//     let calculations = JSON.parse(localStorage.getItem("calculations")) || [];
//     calculations.unshift(calculation); // Add the new calculation to the start
//     if (calculations.length > 3) {
//         calculations.pop(); // Keep only the latest 3 calculations
//     }
//     localStorage.setItem("calculations", JSON.stringify(calculations));
//     displayCalculations();
// }

// // Function to display the last 3 calculations
// function displayCalculations() {
//     const history = JSON.parse(localStorage.getItem("calculations")) || [];
//     const historyElement = document.getElementById("history");
//     historyElement.innerHTML = history.map(calc => `<p>${calc}</p>`).join("");
// }

// // Function to clear all inputs
// function clearAll() {
//     currentInput = "";
//     previousInput = "";
//     operator = null;
//     updateDisplay();
// }

// // Display calculations on page load
// displayCalculations();
let a=""
function Handle(event){
    if(event.target.id==="operand"){
        a+=event.target.innerText
    }
}
console.log(a)