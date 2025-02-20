const container = document.querySelector(".container");
const square = document.createElement("div");
square.classList.add("gridSquare");

let i = 0;
container.addEventListener("mouseenter", (event) => {
    console.log(event.target)
    event.target.classList.add("hovered");
    console.log(++i);
})

const gridSize = 16 * 16;
for (let i = 0; i < gridSize; i++) {
    container.appendChild(square.cloneNode(true));
}