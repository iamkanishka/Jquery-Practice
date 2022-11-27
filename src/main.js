$(document).ready(function () {
  $('#result').click(function(event){
    event.preventDefault();
    var a = event.isDefaultPrevented();
    console.log(a);
   });

 
});
