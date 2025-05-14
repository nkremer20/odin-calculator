// Add query selectors for the calculator buttons and the display
const numButtons = document.querySelectorAll('#num');
const opButtons = document.querySelectorAll('#op');
const display = document.querySelector('.display');

let calcList = [];

function mathOperation(calcList) {
    switch(calcList[1]) {
            case '+':
                result = parseInt(calcList[0]) + parseInt(calcList[2]);
                return result;
            case '-':
                result = parseInt(calcList[0]) - parseInt(calcList[2])
                return result;
            case 'x':
                result = parseInt(calcList[0]) * parseInt(calcList[2]);
                return result;
            case '÷':
                result = parseInt(calcList[0]) / parseInt(calcList[2]);
                return result;
    }
};

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (calcList.length === 0) {
            calcList[0] = button.textContent;
            display.textContent = calcList[0];
        } else if (calcList.length === 1) {
            calcList[0] = calcList[0] + button.textContent;
            display.textContent = calcList[0];
        } else if (calcList.length === 2) {
            calcList[2] = button.textContent;
            display.textContent = calcList[2];
        } else if (calcList.length === 3) {
            calcList[2] = calcList[2] + button.textContent;
            display.textContent = calcList[2];
        }
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handles clearing the display
        if (button.textContent === 'AC') {
            calcList = [];
            display.textContent = 0;
        };

        // Handles addition input


        // Handles subtraction input


        // Handles multiplication input


        // Handles division input


        // Handles equals inputs

    })
})