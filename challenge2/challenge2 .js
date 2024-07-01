// Import the prompt-sync library
const Prompt = require('prompt-sync')();

// Function to detect speed violations
function speedDetector() {
    // Prompt the user to enter the speed
    const speed = Number(prompt("Enter the speed of the car: "));

const SpeedLimit = 70;
const KmPerPoint = 5;

if (speed <= SpeedLimit) {
    console.log("Ok");
} else {
    const points = Math.floor((speed - SpeedLimit) / KmPerPoint);
    if (points >= 12) {
        console.log(`Points: ${points}. License suspended.`);
    } else {
        console.log(`Points: ${points}`);
    }
}
}

// Call the function
speedDetector();

kan Labaad wyeh

// Import the prompt-sync library
const prompt = require("prompt-sync")();

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // Constants for tax rates (use actual values from provided links)
  const taxRate = 0.3;
  const nhifRate = 0.05;
  const nssfRate = 0.1;

  // Calculations
  const grossSalary = basicSalary + benefits;
  const tax = grossSalary * taxRate;
  const nhifDeduction = grossSalary * nhifRate;
  const nssfDeduction = grossSalary * nssfRate;
  const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

  return {
    grossSalary,
    tax,
    nhifDeduction,
    nssfDeduction,
    netSalary,
  };
}

// Prompt the user for input
const basicSalary = Number(prompt("Enter your basic salary: "));
const benefits = Number(prompt("Enter your benefits: "));

// Calculate net salary
const result = calculateNetSalary(basicSalary, benefits);

// Output the results
console.log("Gross Salary:", result.grossSalary);
console.log("NSSF Deduction:", result.nssfDeduction);
console.log("Net Salary:", result.netSalary);

