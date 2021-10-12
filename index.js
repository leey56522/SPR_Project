const computerPlay = () => {
    let computerHand = ""
    let randomNum = Math.floor(Math.random()*3);
    if(randomNum === 0) {
        computerHand = 'Rock'
    } else if (randomNum === 1) {
        computerHand = 'Paper'
    } else {
        computerHand = 'Scissors'
    }
    return computerHand
};


const playTime = (computer, human) => {
    let humanHand = human[0].toUpperCase() + human.slice(1).toLowerCase();
    if (humanHand !== 'Rock' && humanHand !== 'Paper' && humanHand !== 'Scissors') {
        return window.prompt('Pls pick between Rock, Paper, and Scissors')
    }
    let compHand = computer();

    if (humanHand === compHand) {
        return 'Tie';
    } else if (humanHand === 'Rock' && compHand === 'Paper') {
        return 'Paper beats Rock! Computer wins';
    } else if (humanHand === 'Rock' && compHand === 'Scissors') {
        return 'Rock beats Scissors! Player wins';
    } else if (humanHand === 'Paper' && compHand === 'Scissors') {
        return 'Scissors beats Paper! Computer wins';
    } else if (humanHand === 'Paper' && compHand === 'Rock') {
        return 'Paper beats Rock! Player wins';
    } else if (humanHand === 'Scissors' && compHand === 'Rock') {
        return 'Rock beats Scissors! Computer wins';
    } else if (humanHand === 'Scissors' && compHand === 'Paper') {
        return 'Scissors beats Paper! Player wins';
    }
};


const game = () => {
    let playerScore = 0;
    let compScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerChoice = window.prompt('Pls pick between Rock, Paper, and Scissors') 
        let result = playTime(computerPlay, playerChoice);
        if (result.includes('Player wins')) {
            playerScore++
        } else if (result.includes('Computer wins')) {
            compScore++
        } else if (result.includes('Tie')) {
            playerScore++
            compScore++
        }
    }

    if (playerScore > compScore) {
        return `Player wins! Your score is ${playerScore} and the computer score is ${compScore}`;
    } else if (compScore > playerScore) {
        return `Computer wins! Your score is ${playerScore} and the computer score is ${compScore}`;
    } else {
        return `It's a Tie! Your score is ${playerScore} and the computer score is ${compScore}`;
    }
}

console.log(game())