// Add query selectors for the calculator buttons and the display
const numButtons = document.querySelectorAll('#num');
const opButtons = document.querySelectorAll('#op');
const display = document.querySelector('.display');

let result = '0';
let op;

function mathOperation(num1, num2, op) {
    switch (op) {
        case '+':
            result = parseInt(num1) + parseInt(num2);
            return result;
        case '-':
            result = num1 - num2;
            return result;
        case 'x':
            result = num1 * num2;
            return result;
        case '÷':
            result = num1/num2;
            return result;
    };
};

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        if (display.textContent === '0'){
            display.textContent = button.textContent;
        } else if (op !== undefined){
            if (display.textContent === result) {
                display.textContent = button.textContent;
            } else {
                display.textContent = display.textContent + button.textContent;
            }
        } else {
            display.textContent = display.textContent + button.textContent;
        };
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handles deleting last entered digit from display
        if( button.getElementsByTagName('img').length > 0) {
            display.textContent = display.textContent.slice(0, -1);
            if (display.textContent.length === 0) {
                display.textContent = '0'
            };
        };
        
        // Handles clearing display
        if (button.textContent === 'AC') {
            result = '0'
            op = undefined;
            display.textContent = result;
        };

        // Handles addition input
        if (button.textContent === "+") {
            if (op === undefined) {
                result = display.textContent;
                op = '+';
            } else {
                console.log(result);
                display.textContent = mathOperation(result, display.textContent, op);
                op = undefined;
            }
        }

        // Handles substraction input
        if (button.textContent === "-") {
            if (op === undefined) {
                result = display.textContent;
                op = '-';
            } else {
                console.log(result);
                display.textContent = mathOperation(result, display.textContent, op);
                op = undefined;
            }
        }

        // Handles multiplication input
        if (button.textContent === "x") {
            if (op === undefined) {
                result = display.textContent;
                op = 'x';
            } else {
                console.log(result);
                display.textContent = mathOperation(result, display.textContent, op);
                op = undefined;
            }
        }

        // Handles division input
        if (button.textContent === "÷") {
            if (op === undefined) {
                result = display.textContent;
                op = '÷';
            } else {
                console.log(result);
                display.textContent = mathOperation(result, display.textContent, op);
                op = undefined;
            }
        }

        // Handles equals input
        if (button.textContent === '=') {
            if (op === undefined) {
                // do nothing
            } else {
                display.textContent = mathOperation(result, display.textContent, op);
                op = undefined;
            }
        }


    })
}
)