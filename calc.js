// Add query selectors for the calculator buttons and the display
const numButtons = document.querySelectorAll('#num');
const opButtons = document.querySelectorAll('#num');
const display = document.querySelector('.display');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
    })
})