const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //Array
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
    return parseInt(userInput.value);
}

// Generates adnd writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //Text로 javascript로 실행되는 수학식이 아님
    outputResult(currentResult, calcDescription); // from vendor file <- in-line comment
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// function add() {
//     const enteredNumber = getUserNumberInput(); //parseInt(userInput.value);
//     const initialResult = currentResult;
//     //const calcDescription = `${currentResult} + ${enteredNumber}` //`과 $를 사용 -> 암묵적으로 toString을 실행하는 것
//     currentResult += enteredNumber; //현재는 userInput.value는 변수형이 string 상태
//     createAndWriteOutput('+', initialResult, enteredNumber);
//     writeToLog('ADD', initialResult, enteredNumber, currentResult);
//     /*
//     const logEntry = {
//         operation: 'ADD',
//         prevResult: initialResult,
//         number: enteredNumber,
//         result: currentResult
//     }; //빈 객체는 전혀 유용하지 않다 -> key-value 쌍으로 값 추가
//     logEntries.push(logEntry);
//     //logEntries.push(enteredNumber);
//     console.log(logEntries.operation); //객체 데이터는 .으로 접근할 수 있다.
//     console.log(logEntries); //웹 콘솔에서 logEntries(Array)를 확인하겠다.(직접 관찰하겠다.)
//     //console.log(logEntries[0]); -> index로 배열 접근하여 값 확인 */
// } // 전역변수만 조작하는 함수는 무언가를 return하기 시작하면 코드가 더더욱 복잡해진다.

// function subtract() {
//     const enteredNumber = getUserNumberInput(); 
//     const initialResult = currentResult; 
//     currentResult -= enteredNumber; 
//     createAndWriteOutput('-', initialResult, enteredNumber);
//     writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
// }

// function multiply() {
//     const enteredNumber = getUserNumberInput(); 
//     const initialResult = currentResult; 
//     currentResult *= enteredNumber; 
//     createAndWriteOutput('*', initialResult, enteredNumber);
//     writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
// }

// function divide() {
//     const enteredNumber = getUserNumberInput(); 
//     const initialResult = currentResult; 
//     currentResult /= enteredNumber; 
//     createAndWriteOutput('/', initialResult, enteredNumber);
//     writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
// }

function calculate(operation) {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    let operator;
    if(operation === 'ADD') {
        currentResult += enteredNumber; 
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber; 
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber; 
        operator = '*';
    } else {
        currentResult /= enteredNumber; 
        operator = '/';
    }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click',calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click',calculate.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener('click',calculate.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click',calculate.bind(this,'DIVIDE'));

// addBtn.addEventListener('click',add);
// subtractBtn.addEventListener('click',subtract);
// multiplyBtn.addEventListener('click',multiply);
// divideBtn.addEventListener('click',divide);

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

//addBtn.addEventListener('click',add);

//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

//outputResult(currentResult, calculationDescription);