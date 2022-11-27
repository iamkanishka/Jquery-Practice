$(document).ready(function () {
  $('#eventbox').on(" mouseover mouseout mousedown", function(event){
    $('h2').html("Event "+event.which)
 
  });
  $('#inputbox').on("keydown", function(event){
    $('h2').html(event.type + " : "+event.which)
 
  })
 
});
