$(document).ready(function () {
  $("#animateBtn").click(function () {
    $("#box").animate( { left: "200px", borderWidth: "5px" },  function () {
        console.log("animation");
      });
      $("#box").animate( {  fontSize: "25px", },);
  });
  $("#stopAnimateBtn").click(function () {
    $("#box").stop(true, true);
  });
});
