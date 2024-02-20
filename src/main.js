$(document).ready(function () {
  $('#box').click(function(event){
   alert('The Div Element was clicked')
   });

   $('h2').click(function(event){
    alert('The h2 Element was clicked')

  });

  $('p').click(function(event){
    event.stopPropogation()
    alert('The p Element was clicked')

  });

  $('button').click(function(event){
    alert('The button Element was clicked')

  });

 
});
