const divContainer = document.getElementById('container');

function setupGrid() {
    divContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(16, 1fr)`;

    for (let i = 0; i < 16 * 16; i++) {
        const gridElement = document.createElement('div');

        gridElement.classList.add('grid-element');
        divContainer.appendChild(gridElement);
    };
};

setupGrid()