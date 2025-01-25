function mergeAndRemoveDuplicates(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let uniqueArray = []; 

    for (let i = 0; i < mergedArray.length; i++) {
        if (uniqueArray.indexOf(mergedArray[i]) === -1) {
            uniqueArray.push(mergedArray[i]);
        }
    }
    
    return uniqueArray;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7, 8];
console.log("Merged array without duplicates: " + mergeAndRemoveDuplicates(array1, array2));
