$(document).ready(function () {
  $(document).mousemove(function (event) {
    var x =  event.pageX;
    var y =  event.pageY;
     $('#mousebox').offset({top:y, left:x})
    $('#result').text(`PageX:- ${x},PageY:- ${y}`)

  })
});
