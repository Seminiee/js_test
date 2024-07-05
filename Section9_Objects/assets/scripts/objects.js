/**
 * 객체는 키를 스트링으로 자동 변환하여 저장한다.
 */
const movieList = document.getElementById('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

const person = {
    'first name' :'Max',
    age: 30,
    hobbies: ['Sports','Cooking'],
    greet: function() {
        alert('Hi there!');
    }
};
console.log(person['first name'])
// ...
// 프로퍼티가 존재하든 존재하지 않든 추가할 수 있다.

// person.age = 31
// elete person.age; // 프로퍼티 삭제

/**
 * 객체에서 property 
 * -> undefined: 해당 프로퍼티 없음
 * -> null: 해당 프로퍼티는 존재, 그러나 값이 정해져 있지 않음(개발자가 설정한 것임) 
 * */ 

person.age = null;
person.isAdmin = true;
console.log(person.age);    

// person.greet();