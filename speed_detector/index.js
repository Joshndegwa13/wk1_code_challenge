// function to calculate anf detect speed
function speedDetector() {
    let speedInput = prompt("Enter speed of car in km/hr");
    let speed = Number(speedInput); //converts the inputed speed into number

    let demeritPoints = calculateDemeritPoints(speed); // calculating demeritpoints 
    if (demeritPoints > 12 ) {
        return "lisence suspended"
        
    } else {

        return `Points: ${demeritPoints}`;

    }

    function calculateDemeritPoints(speed) {
        if (speed > 70) {
            return(speed - 70)/5  ; 
        } else {
            return 0; 
        }
    }

    function main() {
        let result = speedDetector();
        console.log(result);
    }

}
speedDetector();