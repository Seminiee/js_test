const numbers = [1, 2, 3, ]; // 틀리는 경우가 없어서 권장되는 방법
console.log(numbers);

// const moreNumbers = new Array(); // []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li'); // NodeList
console.log(listItems);

const newArray = Array.from('Hi!');
console.log(newArray);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);