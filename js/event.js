$(document).ready(function () {
  const a = $("#box").html();
  console.log(a);

  const b = $("#box").text();
  console.log(b);

  const c = $("#box").attr("class");
  console.log(c);

  $('#sform').submit(function(){
  const name =  $('#sname').val();
  const sclass =  $('#sclass').val();
alert(name+sclass)
  })
});
