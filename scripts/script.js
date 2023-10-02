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


