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

const button = document.querySelectorAll('button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        console.log(button[i].innerText)
    })
}