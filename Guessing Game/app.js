let max = parseInt(prompt("Enter the maximum number..."));
while (!max) {
    max = parseInt(prompt("Enter a valid number..."));
}

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your first guess... (Type 'q' to quit the game.)");
let attempts = 1; 

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess...");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess...");
        attemps++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit the game.");
    }
}

if (guess === "q") {
    console.log("No worries. Exiting the guessing game. Ciao!")
} else {
    console.log(`You nailed it!`);
    console.log(`It took you ${attempts} guesses.`);
}

