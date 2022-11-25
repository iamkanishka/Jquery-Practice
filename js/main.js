$(document).ready(function () {
  $("#wrapallBtn").click(function () {
     $('p').wrapAll('<div id="box"></div>')
  });
  $("#wrapInnerBtn").click(function () {
    $('h4').wrapInner('<span class="red"></span>')
 
   });
});
