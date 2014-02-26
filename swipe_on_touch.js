(function(jQuery) {
	jQuery.fn.swipe_on_touch = function(swipe) {
		return this.each(function() {
			var $this = jQuery(document),
			is_touching = false,
			touch_init;

			$this.on('touchstart', touch_init_gesture);

			function touch_init_gesture() {
				if (event.touches.length == 1) {
					touch_init = event.touches[0].pageX;
					is_touching = true;
					$this.on('touchmove', gesture);
				}
			}

			function end_gesture() {
				$this.off('touchmove');
				is_touching = false;
				touch_init = null;
			}

			function gesture() {
				if(is_touching) {
					var current = event.touches[0].pageX,
					delta = touch_init - current;

					if (Math.abs(delta) >= 30) {  // '30' is length of swipe
						if (delta > 0) {
							swipe.right();
						}
						else
						{
							swipe.left();
						}
						end_gesture();
					}
				}
			}
		});
	};
})(jQuery);
