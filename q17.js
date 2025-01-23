function findLargestNumber(array) {
    if (array.length === 0) {
        return "The array is empty.";
    }

   
    let largest = array[0];

    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]; 
        }
    }

    return largest;
}

const numbers = [10, 45, 67, 2, 89, 23];
const largestNumber = findLargestNumber(numbers);
console.log(`The largest number in the array is: ${largestNumber}`);
