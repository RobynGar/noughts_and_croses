
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
            }
    else if(document.getElementById("1,0").innerText==="X" && document.getElementById("1,1").innerText==="X" && document.getElementById("1,2").innerText==="X"||document.getElementById("1,0").innerText==="O" && document.getElementById("1,1").innerText==="O" && document.getElementById("1,2").innerText==="O"){
        console.log("u win")
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









    //Method 1 
    //Create an empty array 
    //For loop 
    //add the index into the empty array 
    //To win, the array need 3 of either X or O 

    //Method 2 - 2D array 
    //for loop within a for loop 
    //An array that contains 3 other array 
    //each array represent 






// //A function that checks if the player won 
// function checkWin(){
//     //Loop through gridEntries array 
//     for(i=0;i<gridEntries.length;i++){
//         //looping through column 
//         let firstEntry=gridEntries[i][0]
//         // console.log(firstEntry)
//         for(j=0;j<gridEntries.length;j++){
//             if(gridEntries[i][j]==="X" ||gridEntries[i][j]==="O"){
//             if(gridEntries[i][j]===firstEntry){
//                 if(j===gridEntries.length-1){
//                     console.log("win")
//                     return true;
//                 }
//                 continue;
//             }else{
//                 break;
//             }
//         }
//     }
// }
// }

// function checkColumn(){
//  for(i=0;i<gridEntries.length;i++){
//         //looping through column 
//         console.log(firstEntry)
//         for(j=0;j<gridEntries.length;j++){
//             let firstEntry=gridEntries[0][j]
//             if(gridEntries[i][j]==="X" ||gridEntries[i][j]==="O"){
//             if(gridEntries[i][j]===firstEntry){
//                 if(j===gridEntries.length-1){
//                     console.log("win2")
//                     return true;
//                 }
//                 continue;
//             }else{
//                 break;
//             }
//         }
//     }

// }
// }

            // console.log(gridEntries[i][j])
            
            // if(gridEntries[i][j]==="X" ||gridEntries[i][j]==="O"){

            // if(j===0){

            //     lastElement = gridEntries[i][j];
            //     // console.log(lastElement)

            // }else{

            //     if(lastElement===gridEntries[i][j]){

            //         lastElement=gridEntries[i][j];

            //         if(j===gridEntries[i].length-1){
            //             console.log("win")
            //             return true
            //         }

            //     }else{

            //         if(j===gridEntries[i].length-1){
            //             break;
            //         }
            //     }

 
        
    // }

// }



