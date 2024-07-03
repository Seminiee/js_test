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

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// // const taxAdjustedPrices = [];

// // 
// // prices.forEach((price, idx, prices) => {
// //     const priceObj = {index: idx, taxAdjustedPrices: price * (1 + tax)};
// //     taxAdjustedPrices.push(priceObj);
// // });

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjustedPrices: price * (1 + tax)};
//     return priceObj;
// }); // map() 메서드는 배열의 각 요소에 관해 전환 가능한 새 요소를 return해야 한다. 기존 배열은 그대로, 새로운 배열을 반환
// // 매우 유용한 메서드. -> element를 변경하기 쉽고, 변경된 element를 기반으로 새로운 배열을 얻기도 매우 쉽기 때문.

// console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort(); // sort(): 문자열로 변환한 후에 sorting
// const sortedPrices = prices.sort((a,b) => { 
// // sort()는 자체 함수를 가짐 -> 두 개의 숫자를 취하는 비교(compare)함수, 2개의 요소 필요한 경우 이를 기반으로 두 값을 교환하고 다음 쌍으로 이동
// // 두 값 중 하나는 교환돼서 명령줄의 다음 값이 되는 것
// // a>b, a=== b, a < b 입력 가능
//     if(a > b) {
//         return 1; //양수 반환
//     } else if (a === b) {
//         return 0; //0 반환
//     } else {
//         return -1; //음수 반환
//     }
// });
// const sortedPrices2 = prices.sort((a,b) => a > b ? 1 : (a === b ? 0 : -1));
// console.log(sortedPrices); 
// console.log('sortedPrices2: ', sortedPrices2);
// console.log(sortedPrices.reverse()); // sort() 논리만 수정하면 내림차순도 가능하고 성능도 더 좋음


// const filteredArray = prices.filter((price, index, prices) => {
//     return price > 6; // return Boolean value
// }); // 새로운 배열 반환

// const filteredArray = prices.filter(price => price > 6);

// 화살표 함수는 코드를 더 줄일 수 있다.

// console.log(filteredArray);

//1번째, 2번째 인자가 매우 중요하다.
// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {

// }, 0); // 시작하려는 초깃값;
// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue + curValue;
// }, 0);
// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';'  ) // .split() -> 문자열을 조각조각 그리고 배열로 변환

// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' '); // join() 기본 구분자는 `,`
// console.log(name);

// // Spread Operator -> 꺼내서 저장을 하든 뭘하든 해야함, 배열을 복사할 수 있음

// const copiedNameFragments = [...nameFragments]; //새로운 배열 생성
// nameFragments.push('Mr');
// // 함수 모듈 : ... -> Rest 연산자, 배열에서는 -> 전개 연산자(Spread)
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{name: 'Max', age: 30}, { name: 'Manuel', age: 31}];
// //const copiedPresons = [...persons]; // 참조된 값들을 복사했기 때문에(주소값만 복사함) persons에서 수정한 사항이 반영
// const copiedPersons = [
//     ...persons.map(person => ({name: person.name, age: person.age}))
// ];

// persons.push({name: 'Anna', age: 29});
// persons[0].age = 31;
// console.log(persons, copiedPersons);

const nameData = ['Max', 'Schwarz', 'Mr', 30];
const [firstName, lastName, ...otherInformation] = nameData; //자바스크립트가 요소를 꺼내서 저장함
console.log(firstName, lastName, otherInformation);