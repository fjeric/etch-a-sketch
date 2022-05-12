const defaultSize = 16;
const defaultColor = '#000000';

var currentColor = defaultColor;
var currentSize = defaultSize;
var colorMode = 'black';

const grid = document.getElementById('grid');
const blackButton = document.getElementById('black');
const rgbButton = document.getElementById('rgb');
const resetButton = document.getElementById('reset');
const resizeButton = document.getElementById('resize');

blackButton.onclick = () => {colorMode = 'black';}
rgbButton.onclick = () => {colorMode = 'rgb'}
resetButton.onclick = () => resetGrid();

makeGrid(currentSize);

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add("grid-element")
        gridBox.addEventListener('mouseover', changeColor)
        grid.appendChild(gridBox);
    }
}

function changeColor(e) {
    if (colorMode === 'rgb') {
        //random red, green, blue values up to 256
        const r = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    else if (colorMode === 'black') {
    e.target.style.backgroundColor = currentColor;
    }
}

resizeButton.addEventListener('click', () => {
    var userSize = prompt('Choose canvas size (Max: 100)');
    if (userSize > 100) {makeGrid(100)};
    if (userSize < 0) {makeGrid(defaultSize)};
    currentSize = userSize;
    resetGrid();
});


function resetGrid() {
    grid.innerHTML = '';
    makeGrid(currentSize);
}
