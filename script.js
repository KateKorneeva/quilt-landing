$(document).ready(function() {

	// Add to order

	$(".js-color").val("");

	$(".js-add-color").click(function () {

		if ( $(".js-color").val().length == 0 ) {
			$(".js-color").val($('.js-color').val() + $(this).parent().find(".js-color-name").text() );
		}
		else {
			console.log( $('.js-color').val() + ", " + $(this).siblings().text() );
			$(".js-color").val( $('.js-color').val() + ", " + $(this).parent().find(".js-color-name").text() );
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

	$(document).keydown(function (e){ 
		switch(e.keyCode) {
			case 37:
				$(".lightbox:target .js-prev").click();
				break;
			case 39:
				$(".lightbox:target .js-next").click();
				break;
			case 27:
				$(".lightbox:target .js-close-lightbox").click();
				break;
			default:
			return; // Quit when this doesn't handle the key event.
		}
	});
});