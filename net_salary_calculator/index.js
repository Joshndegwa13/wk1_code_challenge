// Function to calculate net salary based on basic salary
function netSalaryCalculator() {
    
    let basicSalary = prompt("Enter your basic salary");

    
    basicSalary = Number(basicSalary);

    
    let paye = calculatePAYE(basicSalary);
    let nhifDeduction = calculateNHIF(basicSalary);
    let nssfContribution = calculateNSSF(basicSalary);

    
    let grossSalary = basicSalary - paye + nhifDeduction + nssfContribution;
    let netSalary = basicSalary - paye;

    
    console.log(`Basic Salary: ${basicSalary} Ksh`);
    console.log(`Gross Salary: ${grossSalary} Ksh`);
    console.log(`Net Salary: ${netSalary} Ksh`);
}
netSalaryCalculator()

