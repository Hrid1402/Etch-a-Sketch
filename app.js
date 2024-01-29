console.log("working...");
const container = document.querySelector("#container");
let numberOfGrinds = ""
const changeSizeBtn = document.querySelector("#changeSize");
function createGrid(numberOfGrinds) {
    for (let i = 0; i < numberOfGrinds; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        //columns
        for (let i = 0; i < numberOfGrinds; i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.height = ((725/numberOfGrinds)-2).toString() + "px";
            grid.style.width = ((725/numberOfGrinds)-2).toString() + "px";
            grid.addEventListener("mouseover", (event) => {
                grid.style.backgroundColor = "black";
            });
            column.appendChild(grid);
            } 
        container.appendChild(column);
        } 
}
createGrid(10);
changeSizeBtn.addEventListener("click", (event) => {
    allColumns = document.querySelectorAll(".column");
    allColumns.forEach(element => {
        element.remove();
    });

    createGrid(prompt("Please enter number of grinds for side: "));

});





