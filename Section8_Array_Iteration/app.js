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

// const hobbies = ['Sports', 'Cooking', ];
// hobbies.push('Reading'); //O(1)
// hobbies.unshift('Coding'); // O(n)
// const poppedValue = hobbies.pop(); // O(1)
// hobbies.shift(); // O(n)
// console.log(hobbies);

// hobbies[1] ='Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies);


// hobbies.splice(1, 0, 'Good Food'); // only array
// console.log(hobbies);

// // hobbies.splice(0, 1);
// // console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

console.log(testResults.slice()) // return new array -> good way to copy the array
// const storedResults = testResults; // 두 포인터는 동일한 배열을 참조한
const storedResults = testResults.slice(0,2); // [1, 5.3]

testResults.push(5.91);
console.log(storedResults, testResults);