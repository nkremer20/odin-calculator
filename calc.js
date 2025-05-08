// Add query selectors for the calculator buttons and the display
const numButtons = document.querySelectorAll('#num');
const opButtons = document.querySelectorAll('#op');
const display = document.querySelector('.display');

let result = '0';

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        if (display.textContent === result){
            display.textContent = button.textContent;
        } else {
            display.textContent = display.textContent + button.textContent;
        }
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Handles deleting last entered digit from display
        if( button.getElementsByTagName('img').length > 0) {
            display.textContent = display.textContent.slice(0, -1);
            if (display.textContent.length === 0) {
                display.textContent = '0'
            }
        }
        
        // Handles clearing display


        // Handles addition input


        // Handles substraction input

        
        // Handles multiplication input


        // Handles division input


        // Handles equals input


    })
}
)