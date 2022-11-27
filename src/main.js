$(document).ready(function () {
  $("#animateBtn").click(function () {
    $("#box").animate({
      left:'150px', 
      // width:'200px',
      // fontSize:'25px',
      // borderWidth:'5px'
    });
    $("#box").animate({ top:'150px', fontSize:'25px', borderWidth:'5px' },3000, function(){
      console.log('animation');
    });
    $("#box").animate({ width:'250px',  });

  });


});
