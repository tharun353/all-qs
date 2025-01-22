function factorial(number) {
    if (number < 0) {
      return "Factorial not defined for negative numbers.";
    }
    
    let result = 1;
    let i = number;
  
    while (i > 0) {
      result *= i;
      i--;
    }
  
    return result;
  }
  

  let num = 5; 
  console.log(`The factorial of ${num} is ${factorial(num)}`);
