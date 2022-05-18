const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const dot = document.querySelector('.dot')
const display_operation = document.querySelector('.operation')
const display_result = document.querySelector('.result')
let clear_result = true;

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
    if (display_result.innerText == '') { display_result.innerText = 0 }
})

clear.addEventListener('click', () => {
    display_operation.innerText = ''
    display_result.innerText = '0'
    clear_result = true
})

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (clear_result == true) { display_result.innerText = '' }
        display_result.innerText += number.innerText
        clear_result = false
    })
})
operators.forEach((button) => {
    button.addEventListener('click', () => {

        if (display_operation.innerText.slice(-1) == button.innerText) {          
            let a = Number(display_operation.innerText.slice(0, -2))
            let b = Number(display_result.innerText)
            let operator = display_operation.innerText.slice(-1)
            if (button.innerText == '/' && b == 0) {alert('You can\'t divide by zero')}
            else {
            display_result.innerText = operate(operator, a, b)
            display_operation.innerText = operate(operator, a, b) + ' ' + operator}
        }
        else if (display_operation.innerText == '') {
            display_operation.innerText = display_result.innerText + ' ' + button.innerText
        }
        else if (display_operation.innerText.slice(-1) == '=') {
            display_operation.innerText = display_result.innerText + ' ' + button.innerText
        }
        else {
            display_operation.innerText = display_operation.innerText.slice(0, -1) + button.innerText
        }
        clear_result = true
    })
})

equals.addEventListener('click', () => {
    if (display_operation.innerText != '' && display_operation.innerText.slice(-1) != '=') {
        let a = Number(display_operation.innerText.slice(0, -2))
        let b = Number(display_result.innerText)
        let operator = display_operation.innerText.slice(-1)
        if (operator == '/' && b == 0) {alert('You can\'t divide by zero')}
        else {
        display_operation.innerText = `${a} ${operator} ${b} = `
        display_result.innerText = operate(operator, a, b)}
    }

})