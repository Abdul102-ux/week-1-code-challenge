
const readline = require("readline");

// Create an interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateGrade() {
  rl.question("Enter student marks (0-100): ", function (marks) {
    // Convert the input to a number
    marks = Number(marks);

// Variable to hold the grade
let grade;

// Determine the grade based on marks
if (marks > 79) {
  grade = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "E";
}

// Output the grade
console.log(`The grade is: ${grade}`);

// Close the readline interface
rl.close();
  });
}

// Call the function
generateGrade();

