// solutions for challenge3.js
function calculateNetSalary(basicSalary, benefits) {
    const kraTaxRate = 0.3;
    const nhifRate = 0.05;
    const nssfRate = 0.06;

    let grossSalary = basicSalary + benefits;
    let payee = grossSalary * kraTaxRate;
    let nhifDeduction = grossSalary * nhifRate;
    let nssfDeduction = grossSalary * nssfRate;
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
}