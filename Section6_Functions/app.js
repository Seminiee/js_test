const startGameBtn = document.getElementById('start-game-btn');

const start = function () {
    console.log('Game is starting...');
};

// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// 키나 객체에 연결된 함수: 메서드

// const person = {name: 'Max'};

// console.log(person.name);

startGameBtn.addEventListener('click',start); //indirect execution