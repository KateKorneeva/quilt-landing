$(document).ready(function() {

  $(".js-add-color").click(function() {
  	$(".js-color").val($(this).siblings().text());
  });
})
