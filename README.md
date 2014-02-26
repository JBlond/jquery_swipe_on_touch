jquery_swipe_on_touch
=====================

jQuery swipe on touch

This Plugin allows you to send a swiping from a touch interface as known as touch to punch.

	jQuery('#da-slider').swipe_on_touch({
		right : function() {
			jQuery('.da-arrows-next').click();
		},
		left : function() {
			jQuery('.da-arrows-prev').click();
		}
	});
