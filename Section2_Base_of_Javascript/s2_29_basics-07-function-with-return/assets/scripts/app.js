const defaultResult = 0;
let currentResult = defaultResult;
//let currentResult = 0;  // javascript에서 세미콜른은 보통 옵션, 해당 강의 에서는 ;사용 권장

/*
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2); //중괄호로 여러줄 있는 코드(ex. 함수 정의...)는 일반적으로 세미콜론 사용 X*/
// This is a function that extracts the user input from the input field. (too long)
// Gets input from input field.
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// Generates adnd writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //Text로 javascript로 실행되는 수학식이 아님
    outputResult(currentResult, calcDescription); // from vendor file <- in-line comment
}

function add() {
    const enteredNumber = getUserNumberInput(); //parseInt(userInput.value);
    const initialResult = currentResult;
    //const calcDescription = `${currentResult} + ${enteredNumber}` //`과 $를 사용 -> 암묵적으로 toString을 실행하는 것
    currentResult = currentResult +  enteredNumber; //현재는 userInput.value는 변수형이 string 상태
    createAndWriteOutput('+', initialResult, enteredNumber)
} // 전역변수만 조작하는 함수는 무언가를 return하기 시작하면 코드가 더더욱 복잡해진다.

function subtract() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult = currentResult - enteredNumber; 
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult = currentResult * enteredNumber; 
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult = currentResult / enteredNumber; 
    createAndWriteOutput('/', initialResult, enteredNumber);
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

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