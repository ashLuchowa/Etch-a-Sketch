let board = document.querySelector('.board');

//Create Grid
const gridSize = (gridColumns, gridRows) => {
    board.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
    board.style.border = '5px solid #000000';

    for (let i = 0; i < `${gridColumns*gridRows}`; i++) {
        const square = document.createElement('div');
        square.style.border = '1px solid #000000';

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        board.insertAdjacentElement('beforeend', square);
    }
}

//Grid Size Variable
gridSize(16, 16);