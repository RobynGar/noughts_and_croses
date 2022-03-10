
//Create an empty 2D array
const gridEntries=Array(3)
for (i = 0; i < 3; i++){
    gridEntries[i] = Array(3)
}
 
//get the grid element
const gridElements = document.getElementsByClassName("box");


let currentPlayer= "X";

function checkWin(){
    
    if(document.getElementById("0,0").innerText==="X" && document.getElementById("0,1").innerText==="X" && document.getElementById("0,2").innerText==="X"||document.getElementById("0,0").innerText==="O" && document.getElementById("0,1").innerText==="O" && document.getElementById("0,2").innerText==="O"){
            console.log("U WIN");
            return true;
            }
    else if(document.getElementById("1,0").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("1,2").innerText==="X"||document.getElementById("1,0").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("1,2").innerText==="O"){
        console.log("u win")
        return true;
    }
    else if(document.getElementById("2,0").innerText==="X" && document.getElementById("2,1").innerText==="X" && document.getElementById("2,2").innerText==="X"||document.getElementById("2,0").innerText==="O" && document.getElementById("2,1").innerText==="O" && document.getElementById("2,2").innerText==="O"){
        console.log("u win")
        return true;
    }
    else if(document.getElementById("0,0").innerText==="X" && document.getElementById("1,0").innerText==="X" && document.getElementById("2,0").innerText==="X"||document.getElementById("0,0").innerText==="O" && document.getElementById("1,0").innerText==="O" && document.getElementById("2,0").innerText==="O"){
        console.log("u win")
        return true;
    }
    else if(document.getElementById("0,1").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("2,1").innerText==="X"||document.getElementById("0,1").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("2,1").innerText==="O"){
        console.log("u win")
        return true;
    }
    else if(document.getElementById("0,2").innerText==="X" && document.getElementById("1,2").innerText==="X" && document.getElementById("2,2").innerText==="X"||document.getElementById("0,2").innerText==="O" && document.getElementById("1,2").innerText==="O" && document.getElementById("2,2").innerText==="O"){
        console.log("u win")
        return true;
    }
    else if(document.getElementById("0,0").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("2,2").innerText==="X"||document.getElementById("0,0").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("2,2").innerText==="O"){
        console.log("u win")
        return true;
    }
    else if(document.getElementById("0,2").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("2,0").innerText==="X"||document.getElementById("0,2").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("2,0").innerText==="O"){
        console.log("u win")
        return true;
    }
    return false;
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
            }


            if(currentPlayer ==="X"){
                currentPlayer = "O"
                document.getElementById("turn").innerText ="O's";
                
            } else {
                currentPlayer ="X";
                document.getElementById("turn").innerText ="X's";
            }
    
        }
        //if the current player is X and change to an O else change currently current player to X.
        
    })
}
console.log(gridEntries)









   

