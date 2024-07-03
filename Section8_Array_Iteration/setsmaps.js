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

const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};

// const personData = new Map([['key', 'some value']]);
const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks ago', price: 100}]);
console.log(personData);
console.log(personData.get(person1));
/** you DON'T have to do that:
 * const person1 = {id: 'p1',...}
 * const personData = {p1: [...]};
 * console.log(personData[person.id]);
 */

for (const [key, value] of personData.entries()) { // key - value pair
    console.log(key, value);
}

for (const key of personData.keys()) {
    console.log(key);
}

for (const value of personData.values()) {
    console.log(value);
}

console.log(personData.size); // size는 property