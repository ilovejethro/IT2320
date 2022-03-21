//Global area

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
    }
    
    /************** Function area *******************/
    
    //function provided. Add parameter(s) if needed
    function userTurn(sqObj)
    {
        sqObj.innerHTML="X";
        sqObj.style.backgroundColor="slateblue";
        sqObj.style.color="white";
        sqObj.style.textAlign="center";
        computerTurn();
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
                break;
               
            }
                
    }
   
    }
    
    