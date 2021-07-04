

// Create body variable to control body element
let body = document.body;
let rows = document.getElementsByClassName('gridRow');
const container = document.getElementById("container");

// Create button
const btn = document.getElementById('myBtn');
btn.addEventListener('click', resetGrid); // Add event listener to button

let gridSize = 16; // Set initial gridSize
createGrid(16); // Create initial grid

// Function to create initial grid
function createGrid(gridSize) {
    makeRows(gridSize);
    makeCells(gridSize);

}

// Function to create the rows for the grid
function makeRows(rowNum) {

    for (r = 0; r < rowNum; r++) {

        let row = document.createElement("div");
        container.appendChild(row);

        row.classList.add('gridRow'); // Set class for all rows
        row.setAttribute('id', r); // Set id in order to delete grid
    }

}

// Function to add cells to the rows
function makeCells(cellNum) {

    for (c = 0; c < rows.length; c++) {
        for (j = 0; j < cellNum; j++) {

            let cells = document.createElement("div"); // create column
            rows[j].appendChild(cells); // append column to row[j]

            cells.classList.add('cells'); // Set class for all cells
            cells.style.width = 600 / cellNum; // Set cell width
            cells.style.height = 600 / cellNum; // Set cell height
            cells.addEventListener('mouseenter', function () { hoverFunction(cells) }); // Add event listener to a hover funtion
            cells.style.backgroundColor = 'darkslategrey';


        }
    }
}
// Create hover function for cells to change color
function hoverFunction(cells) {

    if (cells.style.backgroundColor == 'darkslategrey') {
        cells.style.backgroundColor = 'cadetblue';
    }
}



// Function to reset/create a new grid based on user input for grid size
function resetGrid() {
    for (let i = 0; i <= gridSize - 1; i++) {
        container.removeChild(document.getElementById(i))
    }
    gridSize = window.prompt("Please enter the grid size.")
    if (gridSize > 100) {
        gridSize = 100;
        window.alert("Maximum grid size is 100.")
    }

    else if (gridSize < 2) {
        gridSize = 2;
        window.alert("Minimum grid size is 2.")
    }

    createGrid(gridSize)
}




