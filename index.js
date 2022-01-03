
//defines variables for the buttons
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let violetButton = document.getElementById("violet");
let currentColor = document.getElementById("currentColor");
let start = document.getElementById("start");
let clearCell = document.getElementById("clearCell");
let clearBoard = document.getElementById("clearBoard");

//using a variable select color for a "state" of the color
//selection.  There are five colors so initially setting at 
//an arbitrary high value of 10
let selectColor = 10

//event listeners for each of the color selector buttons
//also changes the color selector state
redButton.addEventListener("click", () => {
  currentColor.textContent = "Red";
  selectColor = 1
});
blueButton.addEventListener("click", () => {
  currentColor.textContent = "Blue";
  selectColor = 2
});
greenButton.addEventListener("click", () => {
  currentColor.textContent = "Green";
  selectColor = 3
});
yellowButton.addEventListener("click", () => {
  currentColor.textContent = "Yellow";
  selectColor = 4
});
violetButton.addEventListener("click", () => {
  currentColor.textContent = "Violet";
  selectColor = 5
});

//creates an array of all items in the class .cell
let cells = document.querySelectorAll(".cell")

//creates an array of all color buttons
let colorButtons = document.querySelectorAll(".colorButton")

//event listener for the start button that, when selected 
//changes the color selection state to black and enables all
//of the color buttons by looping through the color button 
//array
start.addEventListener("click", ()=>{
  selectColor = 0;
  for (let i = 0; i < colorButtons.length; i++){
    colorButtons[i].disabled = false;
  }
});

//event listener for the clear board button that displays
//a confirmation prompt and if the user selects OK, loops 
//through the cell array changing them all to light grey
clearBoard.addEventListener("click", ()=>{
  if (confirm("Are you sure?") == true) {
  for (let i = 0; i < cells.length; i++){
    cells[i].style.backgroundColor = "lightgrey";
  }
} else {
}});

//initializing lastCell variable for clear cell function
let lastCell = 0;

//loops through the cells with an event listener and calls 
//changeColor function when a cell is clicked
for (let i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", changeColor);
  }

//change color function that includes an event listener for 
//the clear cell button to change the last-clicked cell to 
//light grey and a series of if statements to change the
//cell color according to the color selector state (0-5)
function changeColor(selectedCell) {
  
  lastCell = event.target;
  console.log("last cell is "+ lastCell)
  clearCell.addEventListener("click", ()=>{
    lastCell.style.backgroundColor = "lightgrey";
})

  if (selectColor === 0){
  selectedCell.target.style.backgroundColor = "black";
  }
  else if(selectColor === 1){
    selectedCell.target.style.backgroundColor = "red";
    }
    else if(selectColor === 2){
      selectedCell.target.style.backgroundColor = "blue";
      }
      else if(selectColor === 3){
        selectedCell.target.style.backgroundColor = "green";
        }
        else if(selectColor === 4){
          selectedCell.target.style.backgroundColor = "yellow";
          }
          else if(selectColor === 5){
            selectedCell.target.style.backgroundColor = "violet";
            }
            
  }

