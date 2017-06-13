jQuery(document).ready(function(){
   $('h1').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
      var freddy = $("#freddy")[0];
      var buzzer = $("#buzzer")[0];
    buzzer.play();
    

$("#reset").hide();
    
  var count = parseInt($("#num").html());
  var breakCount = parseInt($("#breakNum").html());
  
  $("#reset").hide();
    
  $("#start").click(function(){
    var counter = setInterval(timer, 1000);
    function timer(){
        
        $("#start, #subtract5Clock, #add5Clock, #subtract5Break, #add5Break, #title1, #title2").css('visibility','hidden');
        $("#breakNum").hide();
    $("#timeType").html("Work Time Remaining:");
      $("#num").css('padding-left', '190px');
      count -= 1;
      if (count === 0){
        freddy.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();  
      }
      $("#num").html(count); 
        
        
 function breakTimer(){
    $("#timeType").html("Break Time Remaining:");
    $("#breakNum").show();
    breakCount -= 1;
    if (breakCount === 0){
        clearInterval(startBreak);
    }
}
    }
  });
    
    
    
 $("#subtract5Clock").click(function(){
     if (count > 5){
   count -= 1;
   $("#num").html(count);
   console.log(count);
     }
    });
    
$("#add5Clock").click(function(){
    count += 1;
    $("#num").html(count);
   console.log(count); 
});
    
 $("#subtract5Break").click(function(){
     if (breakCount > 1){
   breakCount -= 1;
   $("#breakNum").html(breakCount);
   console.log(breakCount);
     }
    });
    
$("#add5Break").click(function(){
   breakCount += 1;
   $("#breakNum").html(breakCount);
   console.log(breakCount);
    });
});