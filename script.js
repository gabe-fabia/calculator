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
    if (b == 0) {
        alert("a snarky message, please clear");
    }
    else {
        return Math.round((a / b) * 100) / 100;
    }
    
};

let firstNum = 15;
let secondNum = 3;
// console.log(typeof(firstNum));
let operators = {
    "add" : "+",
    "subtract" : "-",
    "multiply" : "x",
    "divide" : "÷",
};

function operate(firstNum, operatorStr, secondNum) { // operator can be +, -, * or / 
    if (operatorStr == operators.add) {
        return add(firstNum, secondNum);
    }
    else if (operatorStr == operators.subtract) {
        return subtract(firstNum, secondNum);
    }
    else if (operatorStr == operators.multiply) {
        return multiply(firstNum, secondNum);
    }
    else if (operatorStr == operators.divide) {
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

let num1 = 0;
let operator = "";
let nextOperator = "";

const operateButtons = document.querySelectorAll('.operator');

operateButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent == '=' && operator == '') {
            display.textContent = display.textContent;
        }
        else if (operator == "") {
            num1 = parseInt(display.textContent); 
            operator = button.textContent;
            display.textContent = "";
            console.log(typeof(operator));
            console.log(typeof(num1));
        }
        else {
            let num2 = parseInt(display.textContent);
            let answer = operate(num1, operator, num2);
            display.textContent = answer;
            nextOperator = button.textContent;

            if (nextOperator == "=") {
                operator = "";
            }
            else {
                operator = button.textContent;
                num1 = answer;
                display.textContent = "";
            };
        };
    });
});

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    display.textContent = "";
    num1 = 0;
    operator = '';
    nextOperator = '';
});