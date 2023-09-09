// Prompt the user for the operation choice
const operation = prompt("What would you like to do? (divide, multiply, add, subtract)");

// Convert the user input to lowercase for case insensitivity
const operationLowerCase = operation.toLowerCase();

// Prompt the user for two numbers
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Check the user's choice and perform the operation
let result;

switch (operationLowerCase) {
    case "divide":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Division by zero is not allowed.";
        }
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    default:
        result = "Invalid operation choice.";
}

// Display the result
console.log(`Result: ${result}`);
