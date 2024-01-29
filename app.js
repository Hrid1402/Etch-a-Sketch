console.log("working...");
const container = document.querySelector("#container");

const changeSizeBtn = document.querySelector("#changeSize");
const cleanButton = document.querySelector("#Clean");

const colors = ["skyblue","red", "green", "blue", "violet", "yellow", "indigo", "orange", "purple"];
let randomColors = false;

const rainbowBTN = document.querySelector("#rainbow");

const pbBTN = document.querySelector("#pb");
let progressiveDark = false;

const normalBTN = document.querySelector("#normal");
function normalDrawing(){
    progressiveDark = false;
    randomColors = false;
}

function createGrid(numberOfGrinds) {
    for (let i = 0; i < numberOfGrinds; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        //columns
        for (let i = 0; i < numberOfGrinds; i++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.backgroundColor = "rgb(255, 255, 255)";
            grid.style.height = ((725/numberOfGrinds)-2).toString() + "px";
            grid.style.width = ((725/numberOfGrinds)-2).toString() + "px";
            grid.addEventListener("mouseover", () => {
                console.log(progressiveDark + " status pd");
                console.log(randomColors + " rainbow");
                console.log("actualcolor: " + grid.style.backgroundColor);
                if(progressiveDark){
                    if(colors.includes(grid.style.backgroundColor)){
                        console.log("---------------------");
                    }
                    else{
                        let darkPorcentage = 25.5;
                        let text = grid.style.backgroundColor;
                        console.log(text);
                        let newColor = text.match(/\d+/g)[0] - darkPorcentage;
                        grid.style.backgroundColor = "rgb(" + newColor + "," + newColor + "," + newColor + ")";
                    }
                    
                }
                else if (grid.style.backgroundColor == "rgb(255, 255, 255)"){
                    if(randomColors){
                        grid.style.backgroundColor = colors[(Math.floor(Math.random() * colors.length))];
                    }
                    else{
                        grid.style.backgroundColor = "rgb(0,0,0)";
                    }
                }
            });
            column.appendChild(grid);
            } 
        container.appendChild(column);
        } 
}
createGrid(10);
changeSizeBtn.addEventListener("click", () => {
    allColumns = document.querySelectorAll(".column");
    allColumns.forEach(element => {
        element.remove();
    });
    let numberOfGrinds = prompt("Please enter number of grinds for side: ");
    while (+numberOfGrinds <= 0 || +numberOfGrinds > 100){
        alert("Max range is 1 - 100");
        numberOfGrinds = prompt("Please enter number of grinds for side: ");
    }
    createGrid(numberOfGrinds);
});

pbBTN.addEventListener("click", () => {
    console.log("pb pressed");
    progressiveDark = true;
    randomColors = false;
});

cleanButton.addEventListener("click", () => {
    normalDrawing();
    randomColors = false;
    allGrids = document.querySelectorAll(".grid");
    allGrids.forEach(element => {
        element.style.backgroundColor = "rgb(255, 255, 255)";
    });
});

rainbowBTN.addEventListener("click", () => {
    console.log("rainbow pressed");
    randomColors = true;
    progressiveDark = false;
});

normalBTN.addEventListener("click", () => {
    normalDrawing();
});






