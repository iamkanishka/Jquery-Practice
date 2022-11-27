$(document).ready(function () {
  $("#animateBtn").click(function () {
    // $("#box").animate( { left: "200px", borderWidth: "5px" },  function () {
    //     console.log("animation");
    //   });
    $("#box").css({ background: "pink" }).slideUp(2000).slideDown(2000);
  });
});
