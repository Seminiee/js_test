// // Person Class
// class AgedPerson {
//     printAge() {
//         console.log(this.age)
//     }
// }
// class Person extends AgedPerson{
//     name = 'Max';

//     constructor() {
//         super();
//         this.age = 30;
//     }

//     greet = () => {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

// // Person Constructor Function with using "new" keyword -> class가 생성자 함수의 문법적 설탕이라고도 볼 수 있으나, 이면에서는 더 많은 것을 한다
// // function Person() {
// //     this.age = 30;
// //     this.name = 'Max';
// //     this.greet = function() {
// //         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
// //     }
// // }

// // Person.prototype = {
// //     printAge() {
// //         console.log(this.age);
// //     }
// // }

// // Person.prototype.printAge = function () {
// //     console.log(this.age);
// // }

// // console.dir(Person);

// // const p = new Person();
// // p.greet();
// // p.printAge();
// // console.log(p.__proto__);
// // console.log(p.toString());
// // const p2 = new p.__proto__.constructor();
// // // console.log(person.toString()); // prototype을 기본 클래스 라고 생각해도 큰 차이가 없다.
// // console.log(p2); 

// // __: double underscore , dunder

// const p = new Person();
// const p2 = new Person();

// console.log(p);
// console.log('p.__proto__');
// console.log(p.__proto__)
// console.log('p.prototype');

// console.log(p.__proto__ === p2.__proto___);

// console.log(p.greet());

// // function checkPrototype(funcName) {
// //     this.funcName = funcName;
// // }

// // const cp = new checkPrototype('test');
// // console.log(cp.__proto__);
// // console.log('---------------------------------------------------------------------');
// // console.log(checkPrototype.prototype);  

const course = { // new Object()
    title: 'JavaScript - The Complete Guide',
    rating: 5
}; 

console.log(course.__proto__);

console.log(Object.getPrototypeOf(course,{
    ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
}));

const student = Object.create({
    printProgress: function() {
        console.log(this.progress);
    }
}); // {}

course.printRating();