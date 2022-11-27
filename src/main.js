$(document).ready(function () {
  $('#box').on("click", function(event){
    $('h3').html("Target Element "+event.target.innerHTML)
 
  });

 
});
