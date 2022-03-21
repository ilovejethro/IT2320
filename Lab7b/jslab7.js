/*********************************************************************/
//Global Area
window.onload=function()
{
    var squares = document.getElementsByClassName("square3");
    for(i=0; i<squares.length; i++)
    {
        squares[i].addEventListener("click", function(){
            ChangeButtonText(this);
        })
    }

    var buttons = document.getElementsByClassName("btnOrig");
    for (i=0; i<buttons.length; i++)
    {
        buttons[i].addEventListener("click", function()
        {
           ChangeSquare(this); 
         
        })
    }


}
/***************** Function definition area *************/
function ChangeButtonText(btnObj)
{
    btnObj.innerHTML="Active";
}

function ChangeSquare(sqObj)
{
    sqObj.style.backgroundColor="green";
}