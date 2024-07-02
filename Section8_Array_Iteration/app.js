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

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// console.log(testResults.slice()) // return new array -> good way to copy the array
// // const storedResults = testResults; // 두 포인터는 동일한 배열을 참조한
// const storedResults = testResults.slice(0,2); // [1, 5.3]

// testResults.push(5.91);
// console.log(storedResults, testResults);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5,  -5, 10];

// const storedResults = testResults.concat([3,99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5)); // find only first index , left to right
// console.log(testResults.lastIndexOf(1.5)); // right to left

// console.log(testResults.includes(10.99));
// // indexOf(), lastIndexOf() -> 원시 값에게만 작동, 참조 값은 작동X(-1 반납)

// const personData = [{name: 'Max'}, {name: 'Manuel'}];
// // console.log(personData.indexOf({name: 'Max'})); // return -1

// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// }); // find()는 복사를 생성하지 않는다.
// manuel.name = 'Anna';


// console.log(manuel, personData);
// // console.log(personData.find({name: 'Max'}));

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// 
// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjustedPrices: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// });

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjustedPrices: price * (1 + tax)};
    return priceObj;
}); // map() 메서드는 배열의 각 요소에 관해 전환 가능한 새 요소를 return해야 한다. 기존 배열은 그대로, 새로운 배열을 반환
// 매우 유용한 메서드. -> element를 변경하기 쉽고, 변경된 element를 기반으로 새로운 배열을 얻기도 매우 쉽기 때문.

console.log(taxAdjustedPrices);