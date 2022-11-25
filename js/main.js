$(document).ready(function () {
  $("#clickbutton").click(function () {
    $("#box h2").text("Hello World from <b>Kanishka</b> ");
    $("#box p").html("Hello World from <b> Kanishka </b> ");
    $("#box h2").attr("class", "red");

  });
  
  $('#sname').val("Kanishka naik")
  $('#sclass').val("BTech")

});
