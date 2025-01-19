function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

let num1 = 10, num2 = 20, num3 = 15;
let largest = findLargest(num1, num2, num3);
console.log("The largest number is: " + largest);