const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice =  () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if (randomValue <0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

//const getWinner = function (cChoice, pChoice) {
const getWinner = (cChoice, pChoice) => 
    cChoice === pChoice 
        ? RESULT_DRAW 
        :   (cChoice === ROCK && pChoice === PAPER) || 
            (cChoice === PAPER && pChoice === SCISSORS) ||
            (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS 
        : RESULT_COMPUTER_WINS;
    // if(cChoice === pChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER || 
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }


// const start = function () {
//     console.log('Game is starting...');
// };

// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// 키나 객체에 연결된 함수: 메서드

// const person = {name: 'Max'};

// console.log(person.name);

startGameBtn.addEventListener('click',() => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,playerChoice);
    console.log(winner);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message += 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message += 'won. ';
    } else {
        message += 'lost. '
    } 
    alert(message);
    gameIsRunning = false;
}); //indirect execution
// 익명 함수에 이름을 지정하면 디버깅할 때 훨씬 편리하다.