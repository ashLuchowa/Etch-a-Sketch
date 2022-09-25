let color = 'black';
const buttons = document.querySelectorAll('button');
const blackBtn = document.getElementById('color-black');
const colorRemoveBtn = document.getElementById('color-remove');
const colorRainbowBtn = document.getElementById('color-rainbow');
const colorResetBtn = document.getElementById('color-reset');
const setSizeButton = document.querySelector('#set-size-btn');


//Default Grid
function gridSize(setSize) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${setSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${setSize}, 1fr)`;
    board.style.border = '5px solid #000000';

    for (let i = 0; i < setSize * setSize; i++) {
        let square = document.createElement('div');
        square.style.border = '1px solid #000000';

        square.addEventListener('mouseover', colorSquare);
        board.insertAdjacentElement('beforeend', square);

        //Reset Btn
        colorResetBtn.addEventListener('click', () => {
            square.style.backgroundColor = '';
        });

    }
}

//Default GridSize
gridSize(16);

//Change Grid Size Btn
setSizeButton.addEventListener('click', () => {
    let sizePrompt = prompt("Type your grid size", "2-100");
    //set limit range (2-100)
    if (sizePrompt > 1 && sizePrompt <= 100) {
        gridSize(sizePrompt);
    } else {
        gridSize(16);
    }
})

//colorSquare Function
function colorSquare() {
    this.style.backgroundColor = color;
}

//Buttons
//Choose Black
blackBtn.addEventListener('click', () => {
    color = 'black';
});
//Choose Eraser
colorRemoveBtn.addEventListener('click', () => {
    color = '';
});
//Choose Rainbow
colorRainbowBtn.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    color = 'rgb(' + x + ',' + y + ',' + z + ')';
});