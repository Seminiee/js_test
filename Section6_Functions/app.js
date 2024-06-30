const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}

// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// 키나 객체에 연결된 함수: 메서드

// const person = {name: 'Max'};

// console.log(person.name);

startGameBtn.addEventListener('click',startGame); //indirect execution