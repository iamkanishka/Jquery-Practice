$(document).ready(function () {
  $("#replaceBtn").click(function () {
   // $('#box p:nth-child(3)').replaceWith("Kanishka Naik")
   $('<h3>Kanishka Naik</h3>').replaceAll('#box p:first')
  });
});
