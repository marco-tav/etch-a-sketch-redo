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

function randomHexValue() {
  const hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

  let randomIndex = Math.floor((Math.random()*16));

  return hexArray[randomIndex];
}

function randomHexCode() {
  let hexCode = "";

  for (let i = 1; i <= 6; i++) {
    hexCode += randomHexValue();
  }

  return hexCode;
}

function blackBackground(e) {
  e.target.style = 'background-color: black';
}

function randomHexBackground(e) {
  e.target.style = `background-color: #${randomHexCode()}`;
}

function whiteBackground(e) {
  e.target.style = 'background-color: white';
}

function clearGrid(gridContainer) {
  const cellContainers = document.querySelectorAll('.cell-container');

  cellContainers.forEach(cellContainer => cellContainer.remove());

  let gridSize = prompt('Enter a grid size: ');

  createGrid(gridContainer, gridSize);
}





/* --------------- Main Program ----------------- */

const gridContainer = document.querySelector('.grid-container');
const standardModeBtn = document.getElementById('standard-mode');
const fiestaModeBtn = document.getElementById('fiesta-mode');
const grayScaleModeBtn = document.getElementById('grayscale-mode');
const eraserModeBtn = document.getElementById('eraser-mode');
const resetBtn = document.getElementById('clear-grid');
const modeIndicator = document.getElementById('mode-indicator');

createGrid(gridContainer, 32);

standardModeBtn.addEventListener('click', (e) => {
  const cells = document.querySelectorAll('.cell');
  modeIndicator.innerText = `${e.target.innerText} mode`;

  gridContainer.addEventListener('mousedown', () => {
    cells.forEach(cell => cell.removeEventListener('mouseover', randomHexBackground));
    cells.forEach(cell => cell.removeEventListener('mouseover', whiteBackground));
    cells.forEach(cell => cell.addEventListener('mouseover', blackBackground));
  })

  gridContainer.addEventListener('mouseup', () => {
    cells.forEach(cell => cell.removeEventListener('mouseover', blackBackground));
  })
})

fiestaModeBtn.addEventListener('click', (e) => {
  const cells = document.querySelectorAll('.cell');
  modeIndicator.innerText = `${e.target.innerText} mode`;

  gridContainer.addEventListener('mousedown', () => {
    cells.forEach(cell => cell.removeEventListener('mouseover', blackBackground));
    cells.forEach(cell => cell.removeEventListener('mouseover', whiteBackground));
    cells.forEach(cell => cell.addEventListener('mouseover', randomHexBackground));
  })

  gridContainer.addEventListener('mouseup',() => {
    cells.forEach(cell => cell.removeEventListener('mouseover', randomHexBackground));
  })
})

eraserModeBtn.addEventListener('click', (e) => {
  const cells = document.querySelectorAll('.cell');
  modeIndicator.innerText = `${e.target.innerText} mode`;

  gridContainer.addEventListener('mousedown', () => {
    cells.forEach(cell => cell.removeEventListener('mouseover', randomHexBackground));
    cells.forEach(cell => cell.removeEventListener('mouseover', blackBackground));
    cells.forEach(cell => cell.addEventListener('mouseover', whiteBackground));
  })

  gridContainer.addEventListener('mouseup', () => {
    cells.forEach(cell => cell.removeEventListener('mouseover', whiteBackground));
  })
})

resetBtn.addEventListener('click', () => {
  clearGrid(gridContainer);
})
