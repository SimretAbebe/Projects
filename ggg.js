let Cinput = '';
let Pinput = '';
let operator = '';
let expression = '';


const displayElement = document.querySelector('.display');

if (!displayElement) {
    console.error("Display element not found!");
} else {
    function updateDisplay() {
        if (expression === '') {
            displayElement.textContent = '0';
        }
        else {
            displayElement.textContent = expression;
        }

    }
}

function appendNumber(number) {
    if (Cinput === '0') {
        Cinput = number;
    } else {
        Cinput += number;
    }
    updateExpression();
}

function appendDot() {
    if (!Cinput.includes('.')) {
        Cinput += '.';
    }
    updateExpression();
}

function appendOperator(op) {
    if (Cinput === '') return;
    if (Pinput !== '') {
        calculateResult();
    }
    operator = op;
    Pinput = Cinput;
    Cinput = '';
    updateExpression();
}

function calculateResult() {
    let result;
    const prev = parseFloat(Pinput);
    const current = parseFloat(Cinput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    Cinput = result.toString();
    operator = '';
    Pinput = '';
    updateExpression();
}

function clearDisplay() {
    Cinput = '';
    Pinput = '';
    operator = '';
    expression = '';
    updateDisplay();
}

function deleteLast() {
    if (Cinput.length > 0) {
        Cinput = Cinput.slice(0, -1);
    }
    updateExpression();
}
function updateExpression() {
    if (Pinput && operator) {
        expression = `${Pinput} ${operator} ${Cinput}`;
    } else if (Cinput) {
        expression = Cinput;
    } else {
        expression = '';
    }
    updateDisplay();
}


updateDisplay();
