// Person Class
// class Person {
//     name = 'Max';

//     constructor() {
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

// Person Constructor Function with using "new" keyword -> class가 생성자 함수의 문법적 설탕이라고도 볼 수 있으나, 이면에서는 class가 더 많은 것을 한다
function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

const person = new Person();
person.greet();