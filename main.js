const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const resetButton = document.getElementById('resetButton');
const messageDisplay = document.getElementById('message');
let pickedColor;
let colors = [];

// coded by mohit tiwari

function init() {
    setupSquares();
    reset();
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                changeColors(pickedColor);
            } else {
                this.style.backgroundColor = '#f8f9fa';
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.textContent = '';
}

resetButton.addEventListener('click', function() {
    reset();
});

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

init();
