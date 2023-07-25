function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstNum = 15;
let secondNum = 3;
let operator = {
    "add" : "+",
    "subtract" : "-",
    "multiply" : "*",
    "divide" : "/",
};

function operate(firstNum, operatorStr, secondNum) { // operator can be +, -, * or / 
    if (operatorStr == operator.add) {
        return add(firstNum, secondNum);
    }
    else if (operatorStr == operator.subtract) {
        return subtract(firstNum, secondNum);
    }
    else if (operatorStr == operator.multiply) {
        return multiply(firstNum, secondNum);
    }
    else if (operatorStr == operator.divide) {
        return divide(firstNum, secondNum);
    };
};

// console.log(operate(firstNum, "+", secondNum));
// console.log(operate(firstNum, "-", secondNum));
// console.log(operate(firstNum, "*", secondNum));
// console.log(operate(firstNum, "/", secondNum));

firstNum = 30;
// console.log(operate(firstNum, "/", secondNum));

const display = document.querySelector('#display');


const numbers = document.querySelectorAll('.number');
// console.log(numbers);

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
        console.log(display.textContent);
    });
});

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    display.textContent = "";
});

const operators = document.querySelectorAll('.operator');
let operation = '';

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (typeof num1 == 'undefined') { 
            let num1 = display.textContent;
            operation = button.textContent;
        }
        else {
            let num2 = display.textContent;
            display.textContent = operate(parseInt(num1), operation, parseInt(num2));
        }
    });
});


