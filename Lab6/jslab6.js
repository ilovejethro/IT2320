/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)
function createLink()
{
var parent = document.getElementById("parentLink");
var child = document.createElement("a");

parent.appendChild(child);
child.innerHTML="Tri-C Website";
child.title="Tri-C Website";
child.href="http:www.tri-c.edu";
}

function removeLink()
{
    var parent = document.getElementById("parentLink");
    var child = parent.lastElementChild;
    parent.removeChild(child);
}

function changeColor()
{
    var x = document.getElementById("inputColor").value;
    var box = document.getElementById("box");
    box.style.backgroundColor=x;
}

function changeSquares()
{
    var square1=document.getElementsByClassName("square1");
    var square2=document.getElementsByClassName("square2");
    for (i = 0; i < square1.length; i++) {
     
       square1[i].style.backgroundColor="black";
    }
    for (i = 0; i < square2.length; i++) {
     
        square2[i].style.backgroundColor="white";
     }
}

function changeShape()
{
   
    var square1=document.getElementsByClassName("square1");
   for (i = 0; i < square1.length; i++) {
    
      square1[i].style.borderRadius=document.getElementById("inputRadius").value;
   }
}