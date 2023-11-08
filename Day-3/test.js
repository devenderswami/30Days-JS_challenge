// Write a JavaScript program to check whether two given integer values 
//are in the range 50..99 (inclusive). 
//Return true if either of them falls within the range.

function isInRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
  }
  
  // Example usage:
  const number1 = 45;
  const number2 = 75;
  
  if (isInRange(number1, number2)) {
    console.log("At least one number is in the range 50 to 99.");
  } else {
    console.log("Neither number is in the range 50 to 99.");
  }