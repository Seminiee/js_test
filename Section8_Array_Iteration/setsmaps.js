// const ids = new Set(['Hi', 'from', 'set!']); // 인덱스로 접근하려하면 오류
// ids.add(2);
// //console.log(ids);
// ids.delete('Hi');

// for (const entry of ids.entries()) {
//     console.log(entry); // 왜 값이 2개 있는 배열을 리턴할까 -> Map()의 entries와 일치해야하기 때문에(Set을 Map으로 바꾸기 쉽게 하기 위해서);
// }
// // 대안으로, `entries()`대신에 `values()`를 사용하게 되면, 값이 한 번만 있는 iterable을 리턴
// for (const value of ids.values()) {
//     console.log(value);
// }

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// // const personData = new Map([['key', 'some value']]);
// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);
// console.log(personData);
// console.log(personData.get(person1));
// /** you DON'T have to do that:
//  * const person1 = {id: 'p1',...}
//  * const personData = {p1: [...]};
//  * console.log(personData[person.id]);
//  */

// for (const [key, value] of personData.entries()) { // key - value pair
//     console.log(key, value);
// }

// for (const key of personData.keys()) {
//     console.log(key);
// }

// for (const value of personData.values()) {
//     console.log(value);
// }

// console.log(personData.size); // size는 property

let person = {name: 'Max'};
const persons = new WeakSet() // WeakSet에는 객체는 지정 가능(배열 등 ok) 숫자나 문자열 X
persons.add(person);

// ... some operations
// person = null; // WeakSet: 이 객체를 지정해 놓은 위치를 전부 리셋하면 더 이상 Set도 해당 객체를 저장해 두지 않고 삭제, 사람이 그 시점을 예상할 수는 없다.

console.log(persons); // 사용하지 않는 데이터는 가비지 컬렉션으로 가야함

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null

console.log(personData)