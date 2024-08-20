let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// function to generate a random integer between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
console.log(generateTarget());

// function to compare the user guess to the computer guess
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    // one version:
    /*
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
    */

    // condensed version:
    return humanDifference <= computerDifference;
}

// function to update the score
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore  += 1;;
    }
}

// function to update the round number
const advanceRound = () => {
    currentRoundNumber += 1;
}