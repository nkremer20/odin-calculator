// Add query selectors for the calculator buttons and the display
const numButtons = document.querySelectorAll('#num');
const opButtons = document.querySelectorAll('#op');
const display = document.querySelector('.display');

let calcList = [];

function mathOperation(calcList) {
    switch(calcList[1]) {
            case '+':
                result = parseFloat(calcList[0]) + parseFloat(calcList[2]);
                return result;
            case '-':
                result = parseFloat(calcList[0]) - parseFloat(calcList[2])
                return result;
            case 'x':
                result = parseFloat(calcList[0]) * parseFloat(calcList[2]);
                return result;
            case '÷':
                if (calcList[2] === '0'){
                    result = 'ERROR'
                } else {
                    result = parseFloat(calcList[0]) / parseFloat(calcList[2]);
                }
                // return result;
                return +(Math.round(result + "e+2")  + "e-2");
    }
};

function addDecimal(button, num) {
    if (button.textContent === '.' && num.includes('.')) {
        return false
    } else {
        return true
    }
};

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (addDecimal(button, display.textContent)){
            if (calcList.length === 0) {
                if (button.textContent === '.') {
                    calcList[0] = '0.';
                    display.textContent = calcList[0];
                } else {
                    calcList[0] = button.textContent;
                    display.textContent = calcList[0];
                };
                
            } else if (calcList.length === 1) {
                if (calcList[0] === '=') {
                    calcList[0] = button.textContent;
                    display.textContent = calcList[0];
                } else {
                    calcList[0] = calcList[0] + button.textContent;
                    display.textContent = calcList[0];
                };
                
            } else if (calcList.length === 2) {
                calcList[2] = button.textContent;
                display.textContent = calcList[2];
            } else if (calcList.length === 3) {
                calcList[2] = calcList[2] + button.textContent;
                display.textContent = calcList[2];
            }
        }

    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handles clearing the display
        if (button.textContent === 'AC') {
            calcList = [];
            display.textContent = 0;
        } else if (button.textContent === '=') {
            if (calcList.length === 3) {
                display.textContent = mathOperation(calcList);
                calcList = ['='];
            }
        } else {
            // Handles math operation input
            if (calcList.length === 1 || calcList.length === 2) {
                if (calcList[0] === '=') {
                    calcList[0] = display.textContent;
                }
                calcList[1] = button.textContent;
            } else if (calcList.length === 3) {
                display.textContent = mathOperation(calcList);
                calcList = [];
                calcList[0] = display.textContent;
                calcList[1] = button.textContent;
            }
        }

        if (display.textContent === 'ERROR') {
            calcList = [];
        }
    })
});