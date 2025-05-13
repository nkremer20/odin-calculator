// Add query selectors for the calculator buttons and the display
const numButtons = document.querySelectorAll('#num');
const opButtons = document.querySelectorAll('#op');
const display = document.querySelector('.display');

let result = '0';
let op;

function mathOperation(num1, num2, op) {
    switch (op) {
        case '+':
            op = undefined;
            return num1 + num2;
        case '-':
            op = undefined;
            return num1 - num2;
        case 'x':
            op = undefined;
            return num1 * num2;
        case '÷':
            op = undefined;
            return num1/num2;
    };
};

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        if (display.textContent === '0'){
            display.textContent = button.textContent;
        } else if (op !== undefined){
            if (display.textContent === '0') {
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
            display.textContent = result;
        };

        // Handles addition input
        if (button.textContent === "+") {
            result = display.textContent;
            op = '+';
        }


        // Handles substraction input


        // Handles multiplication input


        // Handles division input


        // Handles equals input


    })
}
)