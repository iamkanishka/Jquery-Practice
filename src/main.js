$(document).ready(function () {
  $('#eventbox').on("click dbclick mouseover mouseout", function(event){
    $('h2').html("Event "+event.type)
 
  })
});
