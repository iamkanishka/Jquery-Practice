$(document).ready(function () {
  $("#slideUpBtn").click(function () {
    $("#box").slideUp(
      3000, function(){
      console.log("Now It is FadeOut");
    }
    );
  });
  $("#slideDownBtn").click(function () {
     $("#box").slideDown(
      3000, function(){
      console.log("Now It is FadeIn");
    }
    );
  });
  $("#slideToggleBtn").click(function () {
    $("#box").slideToggle(
      3000, function(){
      console.log("Now It is FadewithToggle");
    }
    );
  });

});
