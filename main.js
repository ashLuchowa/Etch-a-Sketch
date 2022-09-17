let board = document.querySelector('.board');

//Create Grid
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';
board.style.border = '1px solid #000000';

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.border = '1px solid #000000';

    square.addEventListener('mouseover', ()=> {
        square.style.backgroundColor = 'black';
    });

    board.insertAdjacentElement('beforeend', square);
}