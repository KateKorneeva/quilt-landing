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

	// end of "Add to order"



	// Make sections visible

	// make calculation visible
	$(".js-call-calc").click(function () {
		$(".js-calculation").removeClass("hidden");
	});

	// make advantages visible
	$(".js-call-advan").click(function () {
		$(".js-advantages").removeClass("hidden");
	});

	// show certificate
	$(".js-show-cert").click(function () {
		// incert gallery image here with the certificate
	});

	// end of "Make sections visible"



	// Gallery

	
});