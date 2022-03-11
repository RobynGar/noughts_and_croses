
const gridEntries=Array(3)
    for (i = 0; i < 3; i++){
        gridEntries[i] = Array(3)
    }
    //get the grid element
    const gridElements = document.getElementsByClassName("box");

function start(){
    
    let currentPlayer= "X";
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
                    h3id.innerHTML= `Game over- ${playerName} won`
                } else {
                    if (checkDraw()) {
                        console.log("stalemate")
                        const h3id= document.getElementById("h3id"); 
                        h3id.innerHTML= `Stalemate`;
                    };
                }
    
    
                if(currentPlayer ==="X" || playerName === document.getElementById("PlayerOneName").value){
                    currentPlayer = "O"
                    playerName=document.getElementById("PlayerTwoName").value;
                    document.getElementById("turn").innerText = playerName;
                    
                } else {
                    currentPlayer ="X";
                    playerName = document.getElementById("PlayerOneName").value
                    document.getElementById("turn").innerText = playerName;
                }
        
            }
            //if the current player is X and change to an O else change currently current player to X.
            
        })
    
    }
}



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


// console.log(gridEntries)


function Player(){
    
    const playerOne = document.getElementById("PlayerOneName").value;
    document.getElementById("turn").innerText=playerOne;
   
    const playerTwo = document.getElementById("PlayerTwoName").value;
    console.log(playerOne);
    console.log(playerTwo);
    start()

    // if (playerName === document.getElementById("PlayerOneName").value ){
    //     playerName=document.getElementById("PlayerTwoName").value;
    //     document.getElementById("turn").innerText = playerName;
    // }else {
    //     playerName = document.getElementById("PlayerOneName").value
    //     document.getElementById("turn").innerText = playerName;
    // }
}


function restart(){
    start();
    
}






   

