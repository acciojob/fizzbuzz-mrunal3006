//your JS code here. If required.
// Function to check if a number is a multiple of 3
function isMultipleOfThree(num) {
  return num % 3 === 0;
}

// Function to check if a number is a multiple of 5
function isMultipleOfFive(num) {
  return num % 5 === 0;
}

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // Check for multiples of both 3 and 5
  if (isMultipleOfThree(i) && isMultipleOfFive(i)) {
    alert("FizzBuzz");
  }
  // Check for multiples of 3
  else if (isMultipleOfThree(i)) {
    alert("Fizz");
  }
  // Check for multiples of 5
  else if (isMultipleOfFive(i)) {
    alert("Buzz");
  }
  // For numbers that are not multiples of 3 or 5
  else {
    alert(i.toString());
  }
}