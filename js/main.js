$(document).ready(function () {
  $("#positionBtn").click(function () {
   var x =$('#box h2').position();
   console.log('position Top'+ x.top,'position Left'+ x.left)

  });
  $("#OffsetBtn").click(function () {
  $('#box').offset({top:100, left:100});
   
   });
});
