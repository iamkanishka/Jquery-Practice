$(document).ready(function () {
  $("#widthBtn").click(function () {
   console.log('width',$('#box').width())
   console.log('innerwidth',$('#box').innerWidth())
   console.log('outerwidth',$('#box').outerWidth())
   console.log('outweWidth with true',$('#box').outerWidth(true))

  });
  $("#heightBtn").click(function () {
   console.log('height',$('#box').height())
   console.log('innerHeight',$('#box').innerHeight())
   console.log('outerheight',$('#box').outerHeight())
   console.log('outerheight with true',$('#box').outerHeight(true))
   });
});
