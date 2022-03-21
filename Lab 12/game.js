$(function(){
//jQuery code goes here
$("#up").click(function()
{
    $("#box").animate({top: "-=100px"}, "slow");
})

$("#down").click(function()
{
   $("#box").animate({top: "100px"}, "slow"); 
})

$("#left").click(function(){
    $("#box").animate({left: "150px"}, "slow");
  }); 
  
  $("#right").click(function(){
    $("#box").animate({right: "100px"}, "slow");
  });  

  $("#fadein").click(function(){
    $("#box").fadeIn("slow");
  });  

  $("#fadeout").click(function(){
    $("#box").fadeOut("slow");
  });  

  $("#blink").click(function(){
      setInterval(function(){
    $("#box").fadeOut(500)
    $("#box").fadeIn(500)} , 250);
  });  

  $("#reset").click(function()
  {
    $("#box").stop();
    $("#box").removeAttr('style');

  })

});