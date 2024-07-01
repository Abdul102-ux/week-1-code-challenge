
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


const basicSalary = Number(prompt("Enter your basic salary: "));
const benefits = Number(prompt("Enter your benefits: "));

// Calculate net salary
const result = calculateNetSalary(basicSalary, benefits);

// Output the results
console.log("Gross Salary:", result.grossSalary);
console.log("NSSF Deduction:", result.nssfDeduction);
console.log("Net Salary:", result.netSalary);

