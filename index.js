const board = document.querySelector(".board");
const selectBtn = document.querySelector(".select");
const clearBtn = document.querySelector(".clear");

let boardSize = 5;

setBoard();

selectBtn.onclick = () => {
    boardSize = prompt("Enter the desired number of squares per side:");
    removeBoard();
    setBoard();
}

clearBtn.onclick = () => {
    removeBoard();
    setBoard();
}

function removeBoard(){
    const oldSquares = document.querySelectorAll(".square");
    oldSquares.forEach(e => e.remove());
}

function setBoard() {
    for (let i = 0; i < boardSize*boardSize; i++) {
        const square = document.createElement('div');
        square.setAttribute("style", `box-sizing: border-box; border-width: 1px; border-style: solid; border-color: black; width: ${(1000/Math.abs(boardSize))}px; height: ${(1000/Math.abs(boardSize))}px;`)
        square.setAttribute("class","square");
        square.onmouseover = () => square.style.backgroundColor = "Black";
        board.appendChild(square);
    }
}




