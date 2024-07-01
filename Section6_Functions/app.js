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
        return;// return undefined
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
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => // javascript는 누락된 인수의 값을 undefined로 변환해서 함수를 실행한다., 기본 인수를 갖는 매개변수는 뒤쪽에 와야 함.
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

//콜백 함수: 무언가에 의해 불러와지기 때문에, 함수를 원하는 시점에 실행할 수 있는게 아니라, 함수나 포인터를 실행하도록 권한을 넘김(함수를 인자에 대한 값으로 취급)
startGameBtn.addEventListener('click',() => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice(); // might be undefined
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice,playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
    //console.log(winner);
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
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