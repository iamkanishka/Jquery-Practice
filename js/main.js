$(document).ready(function () {
 $('#addButton').click(function(){
  $('#box, h4').addClass('red')
 });

 $('#removebutton').click(function(){
  $('#box').removeClass('red')
 })

 $('#togglebutton').click(function(){
  $('#box').toggleClass('red')
 })

});
