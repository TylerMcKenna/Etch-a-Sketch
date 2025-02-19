const container = document.querySelector(".container");
const square = document.createElement("div");
square.classList.add("gridSquare");

const gridSize = 16 * 16;
for (let i = 0; i < gridSize; i++) {
    container.appendChild(square.cloneNode(true));
}