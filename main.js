const board = document.querySelector('.board');
const buttons = document.querySelectorAll('button');

//Create Grid
const gridSize = (gridColumns, gridRows) => {
    board.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
    board.style.border = '5px solid #000000';

    for (let i = 0; i < `${gridColumns*gridRows}`; i++) {
        const square = document.createElement('div');
        square.style.border = '1px solid #000000';


        buttons.forEach(() => {
            // Choose Black
            buttons[0].addEventListener('click', () => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'black';
                });
            })
            // Choose White
            buttons[1].addEventListener('click', () => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'white';
                });
            })
        })

        board.insertAdjacentElement('beforeend', square);
    }
}

//Grid Size Variable
gridSize(16, 16);