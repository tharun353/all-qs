function reverseNumber(number) {
    // Check if the number is negative
    const isNegative = number < 0;
    // Convert the number to a positive string, reverse it, and convert it back to a number
    const reversedNumber = parseInt(Math.abs(number).toString().split('').reverse().join(''));
    // Restore the negative sign if the number was negative
    return isNegative ? -reversedNumber : reversedNumber;
}

// Example usage
const number = parseInt(prompt("Enter a number to reverse:"));
const reversedNum = reverseNumber(number);
console.log(`Reversed number: ${reversedNum}`);