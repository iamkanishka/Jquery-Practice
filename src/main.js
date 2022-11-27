$(document).ready(function () {

$(window).scroll(function(){
  $('#box').html("");
 
  $('#box').append("Top: "+ $(window).scrollTop());
  $('#box').append("<br>Left: "+ $(window).scrollLeft());

})
  $("#scrollTopBtn").click(function () {
    $(window).scrollTop(200)
  });
  $("#scrollLeftBtn").click(function () {
    $(window).scrollLeft(100)
  });

});
