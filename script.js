// Default Value
const defaultGrid = 16;
const defaultCanvas = 500;
const defaultColor = '#525252';
const defaultBgFill = '#00E1FF';
const defaultMode = 'pencil';

// Current Value
let currentGrid = defaultGrid;

function toggleShow() {
    const settingsUi = document.getElementById('settings-ui');
    settingsUi.classList.toggle('show');
};

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
        console.log('pencil', target.value);
        return;
    };

    if (target.classList.contains('eraser')) {
        console.log('eraser', target.value);
        return;
    };

    if (target.classList.contains('bg-fill')) {
        console.log('bg-fill', target.value);
        return;
    };

    if (target.classList.contains('random')) {
        console.log('random', target.value);
        return;
    };
});

setupGrid(defaultGrid);