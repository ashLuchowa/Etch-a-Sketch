const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

//Create a default 16x16 grid
function defaultGrid() {
    makeRows(16);
    makeColumn(16);
}

//Create Rows
function makeRows(rowNum) {

    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

//Create Columns
function makeColumn(cellNum) {

    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}

defaultGrid();