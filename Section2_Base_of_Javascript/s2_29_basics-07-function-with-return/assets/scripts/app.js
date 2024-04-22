const defaultResult = 0;
let currentResult = defaultResult;
//let currentResult = 0;  // javascript에서 세미콜른은 보통 옵션, 해당 강의 에서는 ;사용 권장

/*
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2); //중괄호로 여러줄 있는 코드(ex. 함수 정의...)는 일반적으로 세미콜론 사용 X*/

function add() {
    currentResult = currentResult + parseInt(userInput.value); //현재는 userInput.value는 변수형이 string 상태
    outputResult(currentResult, '');
} // 전역변수만 조작하는 함수는 무언가를 return하기 시작하면 코드가 더더욱 복잡해진다.

/*
function add (num1, num2) {
    const result = num1 + num2;
    return result;
    //alert('The result is ' + result); // 내장함수, 
}  */

/*const additionResult = add(1,2);
//currentResult = add(1,2);
add(5,5) */

//currentResult = (currentResult + 10) * 3 / 2 - 1;

//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1` //Template Literal
//let errorMessage = 'An error \n' + 'occurred'

addBtn.addEventListener('click',add);

//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

//outputResult(currentResult, calculationDescription);