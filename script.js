$(document).ready(function() {

	// Add to order

	$(".js-color").val("");

	$(".js-add-color").click(function () {

		if ( $(".js-color").val().length == 0 ) {
				$(".js-color").val($('.js-color').val() + $(this).siblings().text() );
		}
		else {
			$(".js-color").val( $('.js-color').val() + ", " + $(this).siblings().text() );
		}

	});

	// end of Add to order

	// Make sections visible

	$(".js-call-calc").click(function () {
		$(".js-calculation").removeClass("hidden"); // make calculation visible
	});

	$(".js-call-advan").click(function () {
		$(".js-advantages").removeClass("hidden"); // make advantages visible
	});
});