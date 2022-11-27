$(document).ready(function () {
  $('p').each(function(i){
    $(this).on("click",{value:i},function(event){
      console.log(event.data.value);
      alert(event.data.value)
    })
  })
});
