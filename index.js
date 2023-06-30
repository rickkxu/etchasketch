const board = document.querySelector(".board");
const slider = document.querySelector(".slider");
const clearBtn = document.querySelector(".clear");
const sliderOutput = document.querySelector("h3");
const eraseBtn = document.querySelector(".erase");
const rainbowBtn = document.querySelector(".rainbow");
let boardSize = 16;
let brushStatus = "Regular";
let rainbowArray = ["Yellow", "Green", "Red", "Blue", "Orange", "Purple"];

setBoard();

slider.oninput = () => {
    boardSize = slider.value;
    removeBoard();
    setBoard();
    sliderOutput.textContent = `${slider.value} x ${slider.value}`;
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
        square.setAttribute("style", `box-sizing: border-box; border-width: 1px; border-style: solid; border-color: black; width: ${(600/Math.abs(boardSize))}px; height: ${(600/Math.abs(boardSize))}px;`)
        square.setAttribute("class","square");
        square.onmouseover = () => {
            if (brushStatus == "Regular"){
                square.style.backgroundColor = "Black";
            } else if (brushStatus == "Erase"){
                square.style.backgroundColor = "#FFFFF0";
            } else if (brushStatus == "Rainbow"){
                square.style.backgroundColor = rainbowArray[Math.round(Math.random()*rainbowArray.length)];
            }
        }
        board.appendChild(square);
    }
}

eraseBtn.onclick = () => {
    brushStatus != "Erase" ? brushStatus = "Erase" : brushStatus = "Regular";
}

rainbowBtn.onclick = () => {
    brushStatus != "Rainbow" ? brushStatus = "Rainbow" : brushStatus = "Regular";
}