$(document).ready(function () {
  $('#appendBtn').click(function(){
    $("<h2>Hi this is kanishk AppendTo</h2>").appendTo('#box');
  
  });
  
  $('#prependBtn').click(function(){
    $("<h2>Hi this is kanishk PrependTo</h2>").prependTo('#box');

  
  })

  });