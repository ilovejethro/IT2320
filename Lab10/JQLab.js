
$(function(){    

   $("#btn1").on("click", function()
   {
    $(".wrapperDiv").hide();
   }); 
    
   $("#btn2").on("click", function()
   {
       $(".wrapperDiv").show();
    }); 

    $("#btn3").on("click", function()
    {
        $("#1").css({"background-color":"black", "color": "white"});
        $("#3").css({"background-color":"black", "color": "white"});
        $("#2").css({"background-color":"white", "color": "black"});
        $("#4").css({"background-color":"white", "color": "black"});
        $("#1").html("One");
        $("#2").html("Two");
        $("#3").html("Three");
        $("#4").html("Four");

    });

    $(".wrapperDiv").hover(function(){
        $(this).css({"background-color":"lightgrey", "color": "black"});
        }, function(){
        $(this).css({"background-color":"lightgrey", "color": "black"});
      });

})


