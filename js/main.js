$(document).ready(function () {
  $("#hasClassBtn").click(function () {
      console.log( $('#box').hasClass('test'));
     if($('#box').hasClass('test')){
       console.log('Class Exist'); 
     }else{
      console.log('Class Dosent Exist'); 

     }

  });

});
