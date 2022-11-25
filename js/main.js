$(document).ready(function () {
// $('#appendBtn').click(function(){
//   $('#box').append("<h2>Hi this is kanishk Append</h2>")

// });

// $('#prependBtn').click(function(){
//   $('#box').prepend("<h2>Hi this is kanishk Prepend</h2>")

// })

$('#appendBtn').click(function(){
  $('ol').append("<li>List New</li>")

});

$('#prependBtn').click(function(){
  $('ol').prepend("<li>List old</li>")

});


});
