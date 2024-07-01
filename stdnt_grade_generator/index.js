// function that calculates the student grade
function calculateGrade() {
let marks = prompt("Enter marks 0 to 100"); // declairing variable.. prompts user to input student marks
marks = Number(marks);

//conditional statements 
    if (marks >= 80 && marks <= 100) {
        console.log("Your grade is: A");

    } else if (marks >= 60 && marks < 80) {
        console.log("Your grade is: B");

    } else if (marks >= 50 && marks < 60) {
        console.log("Your grade is: C");

    } else if (marks >= 40 && marks < 50) {
        console.log("Your grade is: D");

    } else if (marks >= 0 && marks < 40) {
        console.log("Your grade is: E");


    }
}
calculateGrade();

