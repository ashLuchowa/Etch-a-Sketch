const board = document.querySelector('.board');
const blackButton = document.querySelector('#black-btn');
const whiteButton = document.querySelector('#white-btn');

//Create Grid
const gridSize = (gridColumns, gridRows) => {
    board.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
    board.style.border = '5px solid #000000';

    for (let i = 0; i < `${gridColumns*gridRows}`; i++) {
        const square = document.createElement('div');
        square.style.border = '1px solid #000000';

        //Hover and color change event
        blackButton.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });
        });
        //Hover and color change event
        whiteButton.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'white';
            });
        });

        board.insertAdjacentElement('beforeend', square);
    }
}

//Grid Size Variable
gridSize(16, 16);