//Global area
var winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
window.onload=function() {
    //Try and use classname to get a group of divs instead of getting them one by one by id
    //if you are writing the same type of code multiple times, you are doing it incorrect
    
    //Attach events using eventlistener here
    var squares = document.getElementsByClassName("col");
    for(i=0; i<squares.length; i++)
    {
    squares[i].addEventListener("click", function(){
            userTurn(this);
            
        })
    }
    var reset=document.getElementById("reset");
    reset.addEventListener("click", function()
    {
        ResetGameBoard(this);
    })
    }
   
    /************** Function area *******************/
    
    //function provided. Add parameter(s) if needed
    function userTurn(sqObj)
    {
        sqObj.innerHTML="X";
        sqObj.style.backgroundColor="slateblue";
        sqObj.style.color="white";
        sqObj.style.textAlign="center";
        if(DetermineWinner("X"))
        {
            document.getElementById("message").innerHTML="User is the winner!"
        }
        else {
        computerTurn();
        }
    }
    
    //function provided. Add parameter(s) if needed
    function computerTurn(nextObject)
    {
        nextObject=document.getElementsByClassName("col");
        for(var i=0; i<nextObject.length; i++)
        {
            
            if((nextObject[i].innerHTML!="X")&&(nextObject[i].innerHTML!="O"))
            {
                nextObject[i].innerHTML="O";
                if (DetermineWinner("O"))
                {
                    document.getElementById("message").innerHTML="Computer is the winner";
                }
                break;
               
            }
                
    }
   
    }
    
    function DetermineWinner(elem)
    {
        var wonObject=document.getElementsByClassName("col");
        for (i=0; i<winningPositions.length; i++)
        {
            if (wonObject[winningPositions[i][0]].innerHTML==elem &&
                wonObject[winningPositions[i][1]].innerHTML==elem &&
                wonObject[winningPositions[i][2]].innerHTML==elem)
                {
                    document.getElementById("status").innerHTML="Game Over";
                    return true;
                }
        }
            return false;
    }

    function ResetGameBoard(resetObject)
    {
        resetObject=document.getElementsByClassName("col");
        for(var i=0; i<resetObject.length; i++)
        {
            resetObject[i].innerHTML="";
            resetObject[i].style.backgroundColor="white";
        }
        document.getElementById("status").innerHTML="This is a new game";
        document.getElementById("message").innerHTML="Welcome to the game of tic tac toe. Click on any cell to begin the game!";

    }
