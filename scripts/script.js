/* -------------- Function Declarations ----------*/

function createGrid(gridContainer, cellsPerSide = 32) {
  let cellContainer;
  let cell;

  for(let i=0; i < cellsPerSide; i++) {
    cellContainer = document.createElement('div');
    cellContainer.classList.add('cell-container');
    gridContainer.appendChild(cellContainer);
    for(let j=0; j < cellsPerSide; j++) {
      cell = document.createElement('div');
      cell.classList.add('cell');
      cellContainer.appendChild(cell);
    }
  }
}

/* --------------- Main Program ----------------- */

const gridContainer = document.querySelector('.grid-container');

createGrid(gridContainer, 32);

const cells = document.querySelectorAll('.cell');

gridContainer.addEventListener('mousedown', () => {
  cells.forEach(cell => cell.addEventListener('mouseover', (e) => {
    e.target.style = 'background-color: black';
  }))
})