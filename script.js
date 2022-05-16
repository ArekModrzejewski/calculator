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
const clear = document.querySelector('.clear')
const number = document.querySelectorAll('.number')
const display_operation = document.querySelector('.operation')
const display_result = document.querySelector('.result')

clear.addEventListener('click', () => {
    display_operation.innerText = ''
    display_result.innerText = ''
})

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
        let display_value = number[i].innerText
        display_operation.innerText += display_value
    })
}