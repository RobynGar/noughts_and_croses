
//Create an empty 2D array
const gridEntries=Array(3)
for (i = 0; i < 3; i++){
    gridEntries[i] = Array(3)
}
 
//get the grid element
const gridElements = document.getElementsByClassName("box");


let currentPlayer= "X";
let bot = "O";

function checkWin(){
    
    if(document.getElementById("0,0").innerText==="X" && document.getElementById("0,1").innerText==="X" && document.getElementById("0,2").innerText==="X"||document.getElementById("0,0").innerText==="O" && document.getElementById("0,1").innerText==="O" && document.getElementById("0,2").innerText==="O"){
            console.log("U WIN");
            // Change colour to indicate win
            document.getElementById("0,0").style.backgroundColor = "#e8630a";
            document.getElementById("0,1").style.backgroundColor = "#e8630a";
            document.getElementById("0,2").style.backgroundColor = "#e8630a";
            return true;
            }
    else if(document.getElementById("1,0").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("1,2").innerText==="X"||document.getElementById("1,0").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("1,2").innerText==="O"){
        console.log("u win")
        // Change colour to indicate win
        document.getElementById("1,0").style.backgroundColor = "#e8630a";
        document.getElementById("1,1").style.backgroundColor = "#e8630a";
        document.getElementById("1,2").style.backgroundColor = "#e8630a";
        return true;
    }
    else if(document.getElementById("2,0").innerText==="X" && document.getElementById("2,1").innerText==="X" && document.getElementById("2,2").innerText==="X"||document.getElementById("2,0").innerText==="O" && document.getElementById("2,1").innerText==="O" && document.getElementById("2,2").innerText==="O"){
        console.log("u win")
        // Change colour to indicate win
        document.getElementById("2,0").style.backgroundColor = "#e8630a";
        document.getElementById("2,1").style.backgroundColor = "#e8630a";
        document.getElementById("2,2").style.backgroundColor = "#e8630a";
        return true;
    }
    else if(document.getElementById("0,0").innerText==="X" && document.getElementById("1,0").innerText==="X" && document.getElementById("2,0").innerText==="X"||document.getElementById("0,0").innerText==="O" && document.getElementById("1,0").innerText==="O" && document.getElementById("2,0").innerText==="O"){
        console.log("u win")
        // Change colour to indicate win
        document.getElementById("0,0").style.backgroundColor = "#e8630a";
        document.getElementById("1,0").style.backgroundColor = "#e8630a";
        document.getElementById("2,0").style.backgroundColor = "#e8630a";
        return true;
    }
    else if(document.getElementById("0,1").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("2,1").innerText==="X"||document.getElementById("0,1").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("2,1").innerText==="O"){
        console.log("u win")
        document.getElementById("0,1").style.backgroundColor = "#e8630a";
        document.getElementById("1,1").style.backgroundColor = "#e8630a";
        document.getElementById("2,1").style.backgroundColor = "#e8630a";
        return true;
    }
    else if(document.getElementById("0,2").innerText==="X" && document.getElementById("1,2").innerText==="X" && document.getElementById("2,2").innerText==="X"||document.getElementById("0,2").innerText==="O" && document.getElementById("1,2").innerText==="O" && document.getElementById("2,2").innerText==="O"){
        console.log("u win")
        document.getElementById("0,2").style.backgroundColor = "#e8630a";
        document.getElementById("1,2").style.backgroundColor = "#e8630a";
        document.getElementById("2,2").style.backgroundColor = "#e8630a";
        return true;
    }
    else if(document.getElementById("0,0").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("2,2").innerText==="X"||document.getElementById("0,0").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("2,2").innerText==="O"){
        console.log("u win")
        document.getElementById("0,0").style.backgroundColor = "#e8630a";
        document.getElementById("1,1").style.backgroundColor = "#e8630a";
        document.getElementById("2,2").style.backgroundColor = "#e8630a";
        return true;
    }
    else if(document.getElementById("0,2").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("2,0").innerText==="X"||document.getElementById("0,2").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("2,0").innerText==="O"){
        console.log("u win")
        document.getElementById("0,2").style.backgroundColor = "#e8630a";
        document.getElementById("1,1").style.backgroundColor = "#e8630a";
        document.getElementById("2,0").style.backgroundColor = "#e8630a";
        return true;
    }
    return false;
}

const checkDraw = function(){
    // Placeholder 
    let result = true;
    // Loop over grid array
    for (i = 0; i < gridEntries.length; i++){
        for (j = 0; j < gridEntries.length; j++){
            if (gridEntries[i][j] === undefined){
                result = false;
            }
        }
    }
    return result;
}

const botTurn = function(){

    



    // Variable to determine whether bot is "thinking"
    let deciding = true;
    // Indices for bot choice
    let choice = [0, 0];
    let choiceString = "";
    // Loop runs while bot is deciding
    while(deciding){
        // Generate random indices from 0-2
        choice[0] = Math.floor(Math.random() * 3);
        choice[1] = Math.floor(Math.random() * 3);
        console.log(choice);
        console.log(gridEntries);
        // Check if option grid entry is empty
        if (gridEntries[choice[0]][choice[1]] === undefined){
            // Convert choice to string id
            choiceString = String(choice[0]) + "," + String(choice[1]);
            // Assign grid entry
            document.getElementById(choiceString).innerText = bot;
            gridEntries[choice[0]][choice[1]] = bot;
            console.log(gridEntries[choice[0]][choice[1]]);
            // No longer deciding
            deciding = false;
        }
    }
    if(checkWin()){
        const h3id= document.getElementById("h3id"); 
        h3id.innerHTML= `Game over- Player ${bot} won`
    } else if (checkDraw()) {
            console.log("stalemate")
            const h3id= document.getElementById("h3id"); 
            h3id.innerHTML= `Stalemate`;
    }else{
        document.getElementById("turn").innerText ="X's";

    }

}

//loop through each box, avoid writing out each box
for (i = 0; i < gridElements.length; i++){
    //each box is the element in the array
   let box = gridElements[i];
   //event listener is listening out for the user to click on each box and 
    box.addEventListener("click", event => {
        //reassign the text inside each element in the grid to currentPlayer

        if(event.target.innerText!="O" && event.target.innerText!="X"){
            event.target.innerText=currentPlayer;
            let index = event.target.id.split(",")  //Obtains index from the html id 
            gridEntries[parseInt(index[0])][parseInt(index[1])]= currentPlayer

            //This calls the function to check whether the user won 
            if(checkWin()){
                const h3id= document.getElementById("h3id"); 
                h3id.innerHTML= `Game over- Player ${currentPlayer} won`
            } else if (checkDraw()) {
                    console.log("stalemate")
                    const h3id= document.getElementById("h3id"); 
                    h3id.innerHTML= `Stalemate`;
            }else{
                document.getElementById("turn").innerText ="O's";
                setTimeout(botTurn, 1e3)
            }


            // if(currentPlayer ==="X"){
            //     currentPlayer = "O"
            //     document.getElementById("turn").innerText ="O's";
                
            // } else {
            //     currentPlayer ="X";
            //     document.getElementById("turn").innerText ="X's";
            // }
    
        }
        //if the current player is X and change to an O else change currently current player to X.
        
    })
}
console.log(gridEntries)

//Extentions: 
//1) Change the message 








   

