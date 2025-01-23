function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
        return "Length and width must be positive numbers.";
    }
    return length * width;
}

const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);
console.log(`The area of the rectangle is: ${area}`);
