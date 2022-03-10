

let currentPlayer= "X";



//get the grid element
const gridElements = document.getElementsByClassName("box");

//loop through each box, avoid writing out each box
for (i = 0; i < gridElements.length; i++){
    //each box is the element in the array
   let box = gridElements[i];
   //event listener is listening out for the user to click on each box and 
    box.addEventListener("click", event => {
        //reassign the text inside each element in the grid to currentPlayer
        event.target.innerText=currentPlayer;
        //if the current player is X and change to an O else change currently current player to X.
        if(currentPlayer ==="X"){
            currentPlayer = "O"
            document.getElementById("turn").innerText ="O's";
        } else {
            currentPlayer ="X";
            document.getElementById("turn").innerText ="X's";
        }
    })

}





