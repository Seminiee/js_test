// const numbers = [1, 2, 3, ]; // 틀리는 경우가 없어서 권장되는 방법
// console.log(numbers);

// const moreNumbers = new Array(); // []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li'); // NodeList
// console.log(listItems);

// const newArray = Array.from('Hi!');
// console.log(newArray);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}]; // 여러 자료구조를 가질 수 있다.

// const analyticsData = [[1, 1.6], [-5.4, 2.1]]; //다차원 배열

// for (const data of analyticsData) {
//     for(const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

const hobbies = ['Sports', 'Cooking', ];
hobbies.push('Reading'); //O(1)
hobbies.unshift('Coding'); // O(n)
const poppedValue = hobbies.pop(); // O(1)
hobbies.shift(); // O(n)
console.log(hobbies);

hobbies[1] ='Coding';
hobbies[5] = 'Reading'; // rarely used
console.log(hobbies);
