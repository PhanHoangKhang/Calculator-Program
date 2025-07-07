const Display = document.querySelector('.display');
const operators = ['+', '-', '*', '/'];

function append(value) {
    if (operators.includes(value)) {
        // Remove all trailing operators before adding the new one
        while (operators.includes(Display.value.slice(-1))) {
            Display.value = Display.value.slice(0, -1);
        }
        Display.value += value;
    } 
    else {
        Display.value += value;
    }
}

function clearDisplay() {
    Display.value = ``;
}

function calculate() {
    try {
        Display.value = eval(Display.value);
    } catch(error) {
        Display.value = 'Error';
    }
}

function Delete() {
    Display.value = Display.value.slice(0, -1);
}

function convert() {
    let expr = Display.value;
    // Match the last number in the expression (may include - or decimal)
    const match = expr.match(/([-]?\d*\.?\d+)$|([-])(\d*\.?\d+)$/);
    if (!match) return;
    const lastNumber = match[0];
    const startIndex = expr.lastIndexOf(lastNumber);
    // Toggle the sign
    const toggled = lastNumber.startsWith('-') ? lastNumber.slice(1) : '-' + lastNumber;
    // Replace last number with toggled version
    Display.value = expr.slice(0, startIndex) + toggled;
}