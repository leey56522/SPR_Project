const body = document.querySelector('body');
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const playerPick = document.getElementById('player');
const computerPick = document.getElementById('computer');
const playerOutput = document.getElementById('playerOutput');
const computerOutput = document.getElementById('computerOutput');
const roundsLeft = document.getElementById('roundsLeft');
const roundResult = document.getElementById('roundResult');

var x = 0;
var y = 5;
playerOutput.innerHTML = x;
computerOutput.innerHTML = x;
roundsLeft.innerHTML = y;

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
    return computerHand;
};

const playTime = (human) => {
    let humanHand = human;
    let compHand = computerPlay();

    playerPick.textContent = `Player picks: ${humanHand}`;
    computerPick.textContent = `Computer picks: ${compHand}`;

    if (humanHand === compHand) {
        roundsLeft.innerHTML = --y;
        roundResult.innerHTML = 'Tie';
    } else if (humanHand === 'Rock' && compHand === 'Paper') {
        computerOutput.innerHTML = ++x;
        roundsLeft.innerHTML = --y;
        roundResult.innerHTML = 'Computer wins this round';
    } else if (humanHand === 'Rock' && compHand === 'Scissors') {
        playerOutput.innerHTML = ++x;
        roundsLeft.innerHTML = --y;
        roundResult.innerHTML = 'Player wins this round';
    } else if (humanHand === 'Paper' && compHand === 'Scissors') {
        computerOutput.innerHTML = ++x;
        roundsLeft.innerHTML = --y;
        roundResult.innerHTML = 'Computer wins this round';
    } else if (humanHand === 'Paper' && compHand === 'Rock') {
        playerOutput.innerHTML = ++x;
        roundsLeft.innerHTML = --y;
        roundResult.innerHTML = 'Player wins this round';
    } else if (humanHand === 'Scissors' && compHand === 'Rock') {
        computerOutput.innerHTML = ++x;
        roundsLeft.innerHTML = --y;
        roundResult.innerHTML = 'Computer wins this round';
    } else if (humanHand === 'Scissors' && compHand === 'Paper') {
        playerOutput.innerHTML = ++x;
        roundsLeft.innerHTML = --y;
        roundResult.innerHTML = 'Player wins this round';
    }

    if (roundsLeft.innerHTML < 0 && playerOutput.innerHTML > computerOutput.innerHTML) {
        alert('Congratulation! You beat the computer!!')
        location.reload();
    } else if (roundsLeft.innerHTML < 0 && playerOutput.innerHTML < computerOutput.innerHTML) {
        alert('Oh no, the computer wins!')
        location.reload();
    } else if (roundsLeft.innerHTML < 0 && playerOutput.innerHTML === computerOutput.innerHTML) {
        alert('Tie! Try again')
        location.reload();
    }
};

rock.addEventListener('click', function() {
    playTime('Rock');
});
paper.addEventListener('click', function() {
    playTime('Paper');
});
scissors.addEventListener('click', function() {
    playTime('Scissors');
});