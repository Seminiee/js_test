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