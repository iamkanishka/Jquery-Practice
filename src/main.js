$(document).ready(function () {
  //$('p').has('').css({'background':'gold'});
  $("p").click(function () {
    if ($(this).parent().is("div")) {
      $(this).css({ background: "gold" });
    }
  });
});
