

// Create body variable to control body element
let body = document.body;
let rows = document.getElementsByClassName('gridRow');
let boxes = document.getElementsByClassName('cell');
const container = document.getElementById("container");


let userInput = window.prompt("Please enter the grid size.")


function defaultGrid(userInput) {
    makeRows(userInput);
    makeColumns(userInput);
    console.log("defaultGridFunction")
}


function makeRows(rowNum) {

    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        row.classList.add('gridItem')
        console.log("makeRowsFunction")
        row.setAttribute('id', r);
    }

}

function makeColumns(cellNum) {

    for (c = 0; c < rows.length; c++) {
        for (j = 0; j < cellNum; j++) {
            let column = document.createElement("div");
            rows[j].appendChild(column).className = "boxes"

            //Adjust size of squares based on how many their are
            column.classList.add('gridItem')
            column.style.width = 800 / cellNum;
            column.style.height = 800 / cellNum;
            column.addEventListener('mouseenter', hoverFunction);

            function hoverFunction() {
                column.style.backgroundColor = 'cadetblue';
            }
        }

        console.log("makeColumnsFunction")

    }

}

function createGrid() {
    
    console.log("createGridFunction")
    defaultGrid(userInput)
}

document.getElementById("myBtn").addEventListener("click", resetGrid);

function resetGrid() {
    for (let i = 0; i <= userInput-1; i++) {
        container.removeChild(document.getElementById(i))
        }
        userInput = window.prompt("Please enter the grid size.")
        defaultGrid(userInput)
}

createGrid()