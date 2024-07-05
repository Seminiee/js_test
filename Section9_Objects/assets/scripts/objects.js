/**
 * 객체는 키를 스트링으로 자동 변환하여 저장한다.
 */
const movieList = document.getElementById('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block'
// 숫자형으로만 키를 가지는 객체는 키에 해당하는 숫자의 오름차 순으로 객체가 정렬됨.

const userChosenKeyName = 'level';

const person = {
    'first name' :'Max',
    age: 30,
    hobbies: ['Sports','Cooking'],
    [userChosenKeyName]: '...', // dynamically set to the Object
    greet: function() {
        alert('Hi there!');
    },
    1.5 : 'hello' // 숫자형 키는 string으로 강제 변환, 음수는 사용 불가
};
// console.log(person['first name'])
console.log(person[1.5]); // 자주 발생하지는 않는다.

const keyName = 'first name';
// console.log(person[keyName]); // dynamically access to the Object
// ...
// 프로퍼티가 존재하든 존재하지 않든 추가할 수 있다.

// person.age = 31
// delete person.age; // 프로퍼티 삭제 ->더 이상 해당 프로퍼티를 사용하지 않겠다.

/**
 * 객체에서 property 
 * -> undefined: 해당 프로퍼티 없음
 * -> null: 해당 프로퍼티는 존재, 그러나 값이 정해져 있지 않음(개발자가 설정한 것임) 
 * */ 

person.age = null;
person.isAdmin = true;
console.log(person.age);    

// person.greet();