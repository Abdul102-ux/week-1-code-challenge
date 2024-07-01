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


