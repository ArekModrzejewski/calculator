const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const display_operation = document.querySelector('.operation')
const display_result = document.querySelector('.result')

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate(operator, a, b) {
    if (operator == '+') return add(a, b);
    if (operator == '-') return subtract(a, b);
    if (operator == '*') return multiply(a, b);
    if (operator == '/') return divide(a, b);
}

backspace.addEventListener('click', () => {
    if (display_result.innerText != 0) {
        display_result.innerText = display_result.innerText.slice(0, -1)
    }
    if (display_result.innerText == '') {display_result.innerText = 0}
})

clear.addEventListener('click', () => {
    display_operation.innerText = ''
    display_result.innerText = '0'
})

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (display_result.innerText == 0) { display_result.innerText = '' }
        display_result.innerText += number.innerText
    })
})
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        display_operation.innerText = display_result.innerText + ' ' + operator.innerText
        display_result.innerText = 0
    })
})