$(document).ready(function () {
  $("#hideBtn").click(function () {
    $("#box p").hide(2000, function () {
      console.log("Hide activated");
    });
  });
  $("#showBtn").click(function () {
    $("#box p").show("slow", function () {
      console.log("Show activated");
    });
  });
  $("#toggleBtn").click(function () {
    $("#box").toggle(1000, function () {
      console.log("Toggle activated");
    });
  });
});
