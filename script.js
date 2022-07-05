// Default Value
const defaultGrid = 16;
const defaultCanvas = 500;
const defaultColor = '#525252';
const defaultBgFill = '#00E1FF';
const defaultMode = 'pencil';

// Current Value
let currentGrid = defaultGrid;
let currentCanvas = defaultCanvas;
let currentColor = defaultColor;
let currentBgFill = defaultBgFill;
let currentMode = defaultMode;

// Change Current Value to a New Value Function
function changeCurrentGrid(newGrid) {
    currentGrid = newGrid;
}

function changeCurrentCanvas(newCanvas) {
    currentCanvas = newCanvas;
}

function changeCurrentColor(newColor) {
    currentColor = newColor;
}

function changeCurrentBgFill(newBgFill) {
    currentBgFill = newBgFill;
}

function changeCurrentMode(newMode) {
    currentMode = newMode;
}

// Mouse Down Event
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const divContainer = document.getElementById('container');
function setupGrid(count) {
    divContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${count}, 1fr)`;
    
    for (let i = 0; i < count * count; i++) {
        const gridElement = document.createElement('div');
        
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        divContainer.appendChild(gridElement);
    };
};

// Function to show settings UI
function toggleShow() {
    const settingsUi = document.getElementById('settings-ui');
    settingsUi.classList.toggle('show');
    settingsUi.classList.toggle('active')
};

// Function to clear grid
function clearGrid() {
    divContainer.innerHTML = '';
};

function changeColor(event) {
    if (!mouseDown && event.type === 'mouseover') return;
    if (currentMode === 'pencil') {
        event.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        event.target.style.backgroundColor = '';
    } else if (currentMode === 'bgFill') {
        event.target.style.backgroundColor = currentBgFill;
    } else if (currentMode === 'random') {
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}

const tools = document.querySelector('.tools-btn');
tools.addEventListener('click', (event) => {
    // Access the clicked element
    const target = event.target;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches('button')) {
        return
    };

    if (target.classList.contains('settings')) {
        toggleShow()
        return;
    };
    
    if (target.classList.contains('pencil')) {
        // console.log('pencil', target.value);
        setActiveButton(target.value)
        changeCurrentMode(target.value)
        return;
    };

    if (target.classList.contains('eraser')) {
        // console.log('eraser', target.value);
        setActiveButton(target.value)
        changeCurrentMode(target.value)
        return;
    };

    if (target.classList.contains('bg-fill')) {
        // console.log('bg-fill', target.value);
        setActiveButton(target.value)
        changeCurrentMode(target.value)
        return;
    };

    if (target.classList.contains('random')) {
        // console.log('random', target.value);
        setActiveButton(target.value)
        changeCurrentMode(target.value)
        return;
    };
});

const buttons = tools.querySelectorAll('button');
function setActiveButton(newMode) {
    if (currentMode === 'pencil') {
        buttons[2].classList.remove('active');
    } else if (currentMode === 'eraser') {
        buttons[3].classList.remove('active');
    } else if (currentMode === 'bgFill') {
        buttons[4].classList.remove('active');
    } else if (currentMode === 'random') {
        buttons[5].classList.remove('active');
    };

    if (newMode === 'pencil') {
        buttons[2].classList.add('active');
    } else if (newMode === 'eraser') {
        buttons[3].classList.add('active');
    } else if (newMode === 'bgFill') {
        buttons[4].classList.add('active');
    } else if (newMode === 'random') {
        buttons[5].classList.add('active');
    };
};

window.onload = () => {
    setupGrid(defaultGrid);
    setActiveButton(defaultMode);
};