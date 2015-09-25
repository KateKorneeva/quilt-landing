$(document).ready(function() {

$(".js-color").val("");

    $(".js-add-color").click(function() {

      if ( $(".js-color").val().length == 0 ) {
          $(".js-color").val($('.js-color').val() + $(this).siblings().text() );
      }
      else {
        $(".js-color").val( $('.js-color').val() + ", " + $(this).siblings().text() );
      }

    });
});
