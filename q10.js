function factorial(n) {
    let result = 1;
    let i = n;
    while (i > 1) {
        result *= i;
        i--;
    }
    return result;
}

// Get user input
let userInput = prompt("Enter a number to calculate its factorial:");
let number = parseInt(userInput);

if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative number.");
} else {
    console.log(The factorial of ${number} is ${factorial(number)});
}