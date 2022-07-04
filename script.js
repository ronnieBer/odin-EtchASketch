// Default Value
const defaultGrid = 16;
const defaultColor = '#525252';

// Current Value
let currentGrid = defaultGrid;

const divContainer = document.getElementById('container');
function setupGrid(count) {
    divContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${count}, 1fr)`;
    
    for (let i = 0; i < count * count; i++) {
        const gridElement = document.createElement('div');
        
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', () => {
            gridElement.style.backgroundColor = defaultColor;
        });
        divContainer.appendChild(gridElement);
    };
};

// Function to clear grid
function clearGrid() {
    divContainer.innerHTML = '';
};

// Function to set new Current value
function newCurrentGrid(newGrid) {
    currentGrid = newGrid;

    clearGrid()
    setupGrid(currentGrid);
};

// Function to change Grid value
function changeGrid() {
    let value = prompt('Please enter a new grid value');

    newCurrentGrid(value);
};

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
        changeGrid();
        return;
    };
});

setupGrid(defaultGrid);