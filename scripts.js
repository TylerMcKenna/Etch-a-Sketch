document.addEventListener("DOMContentLoaded", initialize());

function createGrid(sideLength) {   
    container = document.querySelector(".container");
    container.innerHTML = "";

    const square = document.createElement("div");
    square.style.padding = `${100/(2 * sideLength)}%`;
    square.classList.add("gridSquare");

    const gridSize = sideLength * sideLength;
    for (let i = 0; i < gridSize; i++) {
        container.appendChild(square.cloneNode(true));
    }

    container.addEventListener("mouseover", (event) => {
        const target = event.target;
        target.classList.add("hovered");
    })
}

function initialize() {
    createGrid(16);
    
    const sizeButton = document.querySelector(".sizeButton");
    sizeButton.addEventListener("click", promptNewSize); 
}

function promptNewSize() {
    let input = parseInt(prompt("Please enter the new size for the grid's side length."));
    while(isNaN(input) || input > 99 || input < 1) {
        input = parseInt(prompt("Please make sure to input a number, less than 100."));
    }
    createGrid(input);
}