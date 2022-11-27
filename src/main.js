$(document).ready(function () {
  $("#fadeOutBtn").click(function () {
    $("#box").fadeOut(3000, function(){
      console.log("Now It is FadeOut");
    });
  });
  $("#fadeInBtn").click(function () {
    $("#box").fadeIn(3000, function(){
      console.log("Now It is FadeIn");
    });
  });
  $("#fadeToggleBtn").click(function () {
    $("#box").fadeToggle(3000, function(){
      console.log("Now It is FadewithToggle");
    });
  });
  $("#fadeToBtn").click(function () {
    $("#box").fadeTo(3000, 0.5,function(){
      console.log("Now It is FadeTo");
    });
  });
});
