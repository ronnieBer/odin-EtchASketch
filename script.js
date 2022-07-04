const divContainer = document.getElementById('container');

function setupGrid() {
    divContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(16, 1fr)`;
    
    for (let i = 0; i < 16 * 16; i++) {
        const gridElement = document.createElement('div');
        
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', () => {
            gridElement.style.backgroundColor = '#525252';
        });
        divContainer.appendChild(gridElement);
    };
};

setupGrid()

const tools = document.querySelector('.tools-btn');
tools.addEventListener('click', (event) => {
    // Access the clicked element
    const target = event.target;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches('button')) {
        return
    }

    if (target.classList.contains('settings')) {
        console.log('settings', target.value);
        return;
    }
})