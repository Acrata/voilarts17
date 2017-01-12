'use strict';

/**
 * File js-enabled.js
 *
 * If Javascript is enabled, replace the <body> class "no-js".
 */
document.body.className = document.body.className.replace('no-js', 'js');
'use strict';

/**
 * File js-te
 *
 * TTE
 */
window.teMenu = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();
		app.te();
		//if ( app.meetsRequirements() ) {
		//app.bindEvents();
		//}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	app.te = function () {
		console.log("offman");
		$("#trigger p").click(function () {
			$(".wrapper-vv").toggleClass("is-open");
		});
	};

	// Do we meet the requirements?
	//app.meetsRequirements = function () {
	//return $( '.search-field' ).length;
	//};

	// Combine all events.
	//app.bindEvents = function () {
	// Remove placeholder text from search field on focus.
	//app.$c.body.on( 'focus', '.search-field', app.removePlaceholderText );

	// Add placeholder text back to search field on blur.
	//app.$c.body.on( 'blur', '.search-field', app.addPlaceholderText );
	//};

	// Remove placeholder text from search field.
	//app.removePlaceholderText = function () {
	//var $search_field = $( this );

	//$search_field.data( 'placeholder', $search_field.attr( 'placeholder' ) ).attr( 'placeholder', '' );
	//};

	// Replace placeholder text from search field.
	//app.addPlaceholderText = function () {
	//var $search_field = $( this );

	//$search_field.attr( 'placeholder', $search_field.data( 'placeholder' ) ).data( 'placeholder', '' );
	//};

	// Engage!
	$(app.init);
})(window, jQuery, window.teMenu);
'use strict';

/**
 * File modal.js
 *
 * Deal with multiple modals and their media.
 */
window.wdsModal = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();

		if (app.meetsRequirements()) {
			app.bindEvents();
		}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	// Do we meet the requirements?
	app.meetsRequirements = function () {
		return $('.modal-trigger').length;
	};

	// Combine all events.
	app.bindEvents = function () {
		// Trigger a modal to open.
		app.$c.body.on('click touchstart', '.modal-trigger', app.openModal);

		// Trigger the close button to close the modal.
		app.$c.body.on('click touchstart', '.close', app.closeModal);

		// Allow the user to close the modal by hitting the esc key.
		app.$c.body.on('keydown', app.escKeyClose);

		// Allow the user to close the modal by clicking outside of the modal.
		app.$c.body.on('click touchstart', 'div.modal-open', app.closeModalByClick);
	};

	// Open the modal.
	app.openModal = function () {
		// Figure out which modal we're opening and store the object.
		var $modal = $($(this).data('target'));

		// Display the modal.
		$modal.addClass('modal-open');

		// Add body class.
		app.$c.body.addClass('modal-open');
	};

	// Close the modal.
	app.closeModal = function () {
		// Figure the opened modal we're closing and store the object.
		var $modal = $($('div.modal-open .close').data('target'));

		// Find the iframe in the $modal object.
		var $iframe = $modal.find('iframe');

		// Get the iframe src URL.
		var url = $iframe.attr('src');

		// Remove the source URL, then add it back, so the video can be played again later.
		$iframe.attr('src', '').attr('src', url);

		// Finally, hide the modal.
		$modal.removeClass('modal-open');

		// Remove the body class.
		app.$c.body.removeClass('modal-open');
	};

	// Close if "esc" key is pressed.
	app.escKeyClose = function (event) {
		if (27 === event.keyCode) {
			app.closeModal();
		}
	};

	// Close if the user clicks outside of the modal
	app.closeModalByClick = function (event) {
		// If the parent container is NOT the modal dialog container, close the modal
		if (!$(event.target).parents('div').hasClass('modal-dialog')) {
			app.closeModal();
		}
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsModal);
'use strict';

/**
 * File search.js
 *
 * Deal with the search form.
 */
window.responsivevv = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();
		app.menuParentTarget();
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body'),
			'menuParent': $('.menu-item-has-children')
		};
	};
	app.menuParentTarget = function () {
		// 		console.log(window.Hammer);
		// 		 app.$c.menuParent.on('touchstart', function(){event.preventDefault(); $(this).find('.sub-menu li').addClass('menu-hover-behavior'); console.log(this)} );
		// 			console.log("s");
		// 		var hammertime = new window.Hammer(app.$c.menuParent);
		// hammertime.on('tap', function(ev) {
		// 	console.log(ev);
		// });
		$(app.$c.menuParent).click(function () {
			event.preventDefault();
			$(this).toggleClass("menu-hover-behavior");
			console.log($(this));
		});
		// window width is at least 500px
		// window width is less than 500px
	};
	// Do we meet the requirements?
	// // // app.meetsRequirements = function () {
	// // // 	return $( '.search-field' ).length;
	// // };
	// //
	// // // Combine all events.
	// // app.bindEvents = function () {
	// // 	// Remove placeholder text from search field on focus.
	// // 	app.$c.body.on( 'focus', '.search-field', app.removePlaceholderText );
	// //
	// 	// Add placeholder text back to search field on blur.
	// 	app.$c.body.on( 'blur', '.search-field', app.addPlaceholderText );
	// };
	//
	// // Remove placeholder text from search field.
	// app.removePlaceholderText = function () {
	// 	var $search_field = $( this );
	//
	// 	$search_field.data( 'placeholder', $search_field.attr( 'placeholder' ) ).attr( 'placeholder', '' );
	// };
	//
	// // Replace placeholder text from search field.
	// app.addPlaceholderText = function () {
	// 	var $search_field = $( this );
	//
	// 	$search_field.attr( 'placeholder', $search_field.data( 'placeholder' ) ).data( 'placeholder', '' );
	// };
	//
	// Engage!
	$(app.init);
})(window, jQuery, window.responsivevv);
'use strict';

/**
 * File search.js
 *
 * Deal with the search form.
 */
window.wdsSearch = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();

		if (app.meetsRequirements()) {
			app.bindEvents();
		}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	// Do we meet the requirements?
	app.meetsRequirements = function () {
		return $('.search-field').length;
	};

	// Combine all events.
	app.bindEvents = function () {
		// Remove placeholder text from search field on focus.
		app.$c.body.on('focus', '.search-field', app.removePlaceholderText);

		// Add placeholder text back to search field on blur.
		app.$c.body.on('blur', '.search-field', app.addPlaceholderText);
	};

	// Remove placeholder text from search field.
	app.removePlaceholderText = function () {
		var $search_field = $(this);

		$search_field.data('placeholder', $search_field.attr('placeholder')).attr('placeholder', '');
	};

	// Replace placeholder text from search field.
	app.addPlaceholderText = function () {
		var $search_field = $(this);

		$search_field.attr('placeholder', $search_field.data('placeholder')).data('placeholder', '');
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsSearch);
'use strict';

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
	    isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
	    isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

	if ((isWebkit || isOpera || isIe) && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
			    element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();
'use strict';

/**
 * File window-ready.js
 *
 * Add a "ready" class to <body> when window is ready.
 */
window.wdsWindowReady = {};
(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();
		app.bindEvents();
	};

	// Cache document elements.
	app.cache = function () {
		app.$c = {
			'window': $(window),
			'body': $(document.body)
		};
	};

	// Combine all events.
	app.bindEvents = function () {
		app.$c.window.load(app.addBodyClass);
	};

	// Add a class to <body>.
	app.addBodyClass = function () {
		app.$c.body.addClass('ready');
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsWindowReady);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLWVuYWJsZWQuanMiLCJtZW51LXZvaWwuanMiLCJtb2RhbC5qcyIsInJlc3BvbnNpdmUuanMiLCJzZWFyY2guanMiLCJza2lwLWxpbmstZm9jdXMtZml4LmpzIiwid2luZG93LXJlYWR5LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYm9keSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJ3aW5kb3ciLCJ0ZU1lbnUiLCIkIiwiYXBwIiwiaW5pdCIsImNhY2hlIiwidGUiLCIkYyIsImNvbnNvbGUiLCJsb2ciLCJjbGljayIsInRvZ2dsZUNsYXNzIiwialF1ZXJ5Iiwid2RzTW9kYWwiLCJtZWV0c1JlcXVpcmVtZW50cyIsImJpbmRFdmVudHMiLCJsZW5ndGgiLCJvbiIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJlc2NLZXlDbG9zZSIsImNsb3NlTW9kYWxCeUNsaWNrIiwiJG1vZGFsIiwiZGF0YSIsImFkZENsYXNzIiwiJGlmcmFtZSIsImZpbmQiLCJ1cmwiLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJldmVudCIsImtleUNvZGUiLCJ0YXJnZXQiLCJwYXJlbnRzIiwiaGFzQ2xhc3MiLCJyZXNwb25zaXZldnYiLCJtZW51UGFyZW50VGFyZ2V0IiwibWVudVBhcmVudCIsInByZXZlbnREZWZhdWx0Iiwid2RzU2VhcmNoIiwicmVtb3ZlUGxhY2Vob2xkZXJUZXh0IiwiYWRkUGxhY2Vob2xkZXJUZXh0IiwiJHNlYXJjaF9maWVsZCIsImlzV2Via2l0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaXNPcGVyYSIsImlzSWUiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVsZW1lbnQiLCJ0ZXN0IiwidGFnTmFtZSIsInRhYkluZGV4IiwiZm9jdXMiLCJ3ZHNXaW5kb3dSZWFkeSIsImxvYWQiLCJhZGRCb2R5Q2xhc3MiXSwibWFwcGlu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S0FBSUUsS0FBSixHQUFZLFlBQVk7QUFDdkJGLE1BQUlJLEVBQUosR0FBUztBQUNSLGFBQVVMLEVBQUdGLE1BQUgsQ0FERjtBQUVSLFdBQVFFLEVBQUdOLFNBQVNDLElBQVo7QUFGQSxHQUFUO0FBSUEsRUFMRDs7QUFPQTtBQUNBTSxLQUFJWSxVQUFKLEdBQWlCLFlBQVk7QUFDNUJaLE1BQUlJLEVBQUosQ0FBT1AsTUFBUCxDQUFjOEQsSUFBZCxDQUFvQjNELElBQUk0RCxZQUF4QjtBQUNBLEVBRkQ7O0FBSUE7QUFDQTVELEtBQUk0RCxZQUFKLEdBQW1CLFlBQVk7QUFDOUI1RCxNQUFJSSxFQUFKLENBQU9WLElBQVAsQ0FBWTJCLFFBQVosQ0FBc0IsT0FBdEI7QUFDQSxFQUZEOztBQUlBO0FBQ0F0QixHQUFHQyxJQUFJQyxJQUFQO0FBQ0EsQ0EzQkQsRUEyQktKLE1BM0JMLEVBMkJhWSxNQTNCYixFQTJCcUJaLE9BQU82RCxjQTNCNUIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBqcy1lbmFibGVkLmpzXG4gKlxuICogSWYgSmF2YXNjcmlwdCBpcyBlbmFibGVkLCByZXBsYWNlIHRoZSA8Ym9keT4gY2xhc3MgXCJuby1qc1wiLlxuICovXG4gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKCAnbm8tanMnLCAnanMnICk7XG4iLCIvKipcbiAqIEZpbGUganMtdGVcbiAqXG4gKiBUVEVcbiAqL1xud2luZG93LnRlTWVudSA9IHt9O1xuXG4oIGZ1bmN0aW9uICggd2luZG93LCAkLCBhcHAgKSB7XG5cdC8vIENvbnN0cnVjdG9yLlxuXHRhcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuY2FjaGUoKTtcbiAgICAgICAgYXBwLnRlKCk7XG5cdFx0Ly9pZiAoIGFwcC5tZWV0c1JlcXVpcmVtZW50cygpICkge1xuXHRcdFx0Ly9hcHAuYmluZEV2ZW50cygpO1xuXHRcdC8vfVxuXHR9O1xuXG5cdC8vIENhY2hlIGFsbCB0aGUgdGhpbmdzLlxuXHRhcHAuY2FjaGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjID0ge1xuXHRcdFx0J2JvZHknOiAkKCAnYm9keScgKVxuXHRcdH07XG5cdH07XG5cbiAgICBhcHAudGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2ZmbWFuXCIpO1xuJCggXCIjdHJpZ2dlciBwXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgJChcIi53cmFwcGVyLXZ2XCIpLnRvZ2dsZUNsYXNzKFwiaXMtb3BlblwiKTtcbn0pO1xuICAgIH1cblxuXHQvLyBEbyB3ZSBtZWV0IHRoZSByZXF1aXJlbWVudHM/XG5cdC8vYXBwLm1lZXRzUmVxdWlyZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vcmV0dXJuICQoICcuc2VhcmNoLWZpZWxkJyApLmxlbmd0aDtcblx0Ly99O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0Ly9hcHAuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBSZW1vdmUgcGxhY2Vob2xkZXIgdGV4dCBmcm9tIHNlYXJjaCBmaWVsZCBvbiBmb2N1cy5cblx0XHQvL2FwcC4kYy5ib2R5Lm9uKCAnZm9jdXMnLCAnLnNlYXJjaC1maWVsZCcsIGFwcC5yZW1vdmVQbGFjZWhvbGRlclRleHQgKTtcblxuXHRcdC8vIEFkZCBwbGFjZWhvbGRlciB0ZXh0IGJhY2sgdG8gc2VhcmNoIGZpZWxkIG9uIGJsdXIuXG5cdFx0Ly9hcHAuJGMuYm9keS5vbiggJ2JsdXInLCAnLnNlYXJjaC1maWVsZCcsIGFwcC5hZGRQbGFjZWhvbGRlclRleHQgKTtcblx0Ly99O1xuXG5cdC8vIFJlbW92ZSBwbGFjZWhvbGRlciB0ZXh0IGZyb20gc2VhcmNoIGZpZWxkLlxuXHQvL2FwcC5yZW1vdmVQbGFjZWhvbGRlclRleHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly92YXIgJHNlYXJjaF9maWVsZCA9ICQoIHRoaXMgKTtcblxuXHRcdC8vJHNlYXJjaF9maWVsZC5kYXRhKCAncGxhY2Vob2xkZXInLCAkc2VhcmNoX2ZpZWxkLmF0dHIoICdwbGFjZWhvbGRlcicgKSApLmF0dHIoICdwbGFjZWhvbGRlcicsICcnICk7XG5cdC8vfTtcblxuXHQvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQuXG5cdC8vYXBwLmFkZFBsYWNlaG9sZGVyVGV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHQvL3ZhciAkc2VhcmNoX2ZpZWxkID0gJCggdGhpcyApO1xuXG5cdFx0Ly8kc2VhcmNoX2ZpZWxkLmF0dHIoICdwbGFjZWhvbGRlcicsICRzZWFyY2hfZmllbGQuZGF0YSggJ3BsYWNlaG9sZGVyJyApICkuZGF0YSggJ3BsYWNlaG9sZGVyJywgJycgKTtcblx0Ly99O1xuXG5cdC8vIEVuZ2FnZSFcblx0JCggYXBwLmluaXQgKTtcbn0gKSggd2luZG93LCBqUXVlcnksIHdpbmRvdy50ZU1lbnUgKTtcbiIsIi8qKlxuICogRmlsZSBtb2RhbC5qc1xuICpcbiAqIERlYWwgd2l0aCBtdWx0aXBsZSBtb2RhbHMgYW5kIHRoZWlyIG1lZGlhLlxuICovXG53aW5kb3cud2RzTW9kYWwgPSB7fTtcblxuKCBmdW5jdGlvbiAoIHdpbmRvdywgJCwgYXBwICkge1xuXHQvLyBDb25zdHJ1Y3Rvci5cblx0YXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLmNhY2hlKCk7XG5cblx0XHRpZiAoIGFwcC5tZWV0c1JlcXVpcmVtZW50cygpICkge1xuXHRcdFx0YXBwLmJpbmRFdmVudHMoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ2FjaGUgYWxsIHRoZSB0aGluZ3MuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuJGMgPSB7XG5cdFx0XHQnYm9keSc6ICQoICdib2R5JyApXG5cdFx0fTtcblx0fTtcblxuXHQvLyBEbyB3ZSBtZWV0IHRoZSByZXF1aXJlbWVudHM/XG5cdGFwcC5tZWV0c1JlcXVpcmVtZW50cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJCggJy5tb2RhbC10cmlnZ2VyJyApLmxlbmd0aDtcblx0fTtcblxuXHQvLyBDb21iaW5lIGFsbCBldmVudHMuXG5cdGFwcC5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIFRyaWdnZXIgYSBtb2RhbCB0byBvcGVuLlxuXHRcdGFwcC4kYy5ib2R5Lm9uKCAnY2xpY2sgdG91Y2hzdGFydCcsICcubW9kYWwtdHJpZ2dlcicsIGFwcC5vcGVuTW9kYWwgKTtcblxuXHRcdC8vIFRyaWdnZXIgdGhlIGNsb3NlIGJ1dHRvbiB0byBjbG9zZSB0aGUgbW9kYWwuXG5cdFx0YXBwLiRjLmJvZHkub24oICdjbGljayB0b3VjaHN0YXJ0JywgJy5jbG9zZScsIGFwcC5jbG9zZU1vZGFsICk7XG5cblx0XHQvLyBBbGxvdyB0aGUgdXNlciB0byBjbG9zZSB0aGUgbW9kYWwgYnkgaGl0dGluZyB0aGUgZXNjIGtleS5cblx0XHRhcHAuJGMuYm9keS5vbiggJ2tleWRvd24nLCBhcHAuZXNjS2V5Q2xvc2UgKTtcblxuXHRcdC8vIEFsbG93IHRoZSB1c2VyIHRvIGNsb3NlIHRoZSBtb2RhbCBieSBjbGlja2luZyBvdXRzaWRlIG9mIHRoZSBtb2RhbC5cblx0XHRhcHAuJGMuYm9keS5vbiggJ2NsaWNrIHRvdWNoc3RhcnQnLCAnZGl2Lm1vZGFsLW9wZW4nLCBhcHAuY2xvc2VNb2RhbEJ5Q2xpY2sgKTtcblx0fTtcblxuXHQvLyBPcGVuIHRoZSBtb2RhbC5cblx0YXBwLm9wZW5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBGaWd1cmUgb3V0IHdoaWNoIG1vZGFsIHdlJ3JlIG9wZW5pbmcgYW5kIHN0b3JlIHRoZSBvYmplY3QuXG5cdFx0dmFyICRtb2RhbCA9ICQoICQoIHRoaXMgKS5kYXRhKCAndGFyZ2V0JyApICk7XG5cblx0XHQvLyBEaXNwbGF5IHRoZSBtb2RhbC5cblx0XHQkbW9kYWwuYWRkQ2xhc3MoICdtb2RhbC1vcGVuJyApO1xuXG5cdFx0Ly8gQWRkIGJvZHkgY2xhc3MuXG5cdFx0YXBwLiRjLmJvZHkuYWRkQ2xhc3MoICdtb2RhbC1vcGVuJyApO1xuXHR9O1xuXG5cdC8vIENsb3NlIHRoZSBtb2RhbC5cblx0YXBwLmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gRmlndXJlIHRoZSBvcGVuZWQgbW9kYWwgd2UncmUgY2xvc2luZyBhbmQgc3RvcmUgdGhlIG9iamVjdC5cblx0XHR2YXIgJG1vZGFsID0gJCggJCggJ2Rpdi5tb2RhbC1vcGVuIC5jbG9zZScgKS5kYXRhKCAndGFyZ2V0JyApICk7XG5cblx0XHQvLyBGaW5kIHRoZSBpZnJhbWUgaW4gdGhlICRtb2RhbCBvYmplY3QuXG5cdFx0dmFyICRpZnJhbWUgPSAkbW9kYWwuZmluZCggJ2lmcmFtZScgKTtcblxuXHRcdC8vIEdldCB0aGUgaWZyYW1lIHNyYyBVUkwuXG5cdFx0dmFyIHVybCA9ICRpZnJhbWUuYXR0ciggJ3NyYycgKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgc291cmNlIFVSTCwgdGhlbiBhZGQgaXQgYmFjaywgc28gdGhlIHZpZGVvIGNhbiBiZSBwbGF5ZWQgYWdhaW4gbGF0ZXIuXG5cdFx0JGlmcmFtZS5hdHRyKCAnc3JjJywgJycgKS5hdHRyKCAnc3JjJywgdXJsICk7XG5cblx0XHQvLyBGaW5hbGx5LCBoaWRlIHRoZSBtb2RhbC5cblx0XHQkbW9kYWwucmVtb3ZlQ2xhc3MoICdtb2RhbC1vcGVuJyApO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBib2R5IGNsYXNzLlxuXHRcdGFwcC4kYy5ib2R5LnJlbW92ZUNsYXNzKCAnbW9kYWwtb3BlbicgKTtcblx0fTtcblxuXHQvLyBDbG9zZSBpZiBcImVzY1wiIGtleSBpcyBwcmVzc2VkLlxuXHRhcHAuZXNjS2V5Q2xvc2UgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdGlmICggMjcgPT09IGV2ZW50LmtleUNvZGUgKSB7XG5cdFx0XHRhcHAuY2xvc2VNb2RhbCgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDbG9zZSBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgbW9kYWxcblx0YXBwLmNsb3NlTW9kYWxCeUNsaWNrID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHQvLyBJZiB0aGUgcGFyZW50IGNvbnRhaW5lciBpcyBOT1QgdGhlIG1vZGFsIGRpYWxvZyBjb250YWluZXIsIGNsb3NlIHRoZSBtb2RhbFxuXHRcdGlmICggISQoIGV2ZW50LnRhcmdldCApLnBhcmVudHMoICdkaXYnICkuaGFzQ2xhc3MoICdtb2RhbC1kaWFsb2cnICkgKSB7XG5cdFx0XHRhcHAuY2xvc2VNb2RhbCgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG59ICkoIHdpbmRvdywgalF1ZXJ5LCB3aW5kb3cud2RzTW9kYWwgKTtcbiIsIi8qKlxuICogRmlsZSBzZWFyY2guanNcbiAqXG4gKiBEZWFsIHdpdGggdGhlIHNlYXJjaCBmb3JtLlxuICovXG53aW5kb3cucmVzcG9uc2l2ZXZ2ID0ge307XG5cbiggZnVuY3Rpb24gKCB3aW5kb3csICQgLGFwcCkge1xuXHQvLyBDb25zdHJ1Y3Rvci5cblx0YXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLmNhY2hlKCk7XG5cdFx0YXBwLm1lbnVQYXJlbnRUYXJnZXQoKTtcblx0fTtcblxuXHQvLyBDYWNoZSBhbGwgdGhlIHRoaW5ncy5cblx0YXBwLmNhY2hlID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC4kYyA9IHtcblx0XHRcdCdib2R5JzogJCggJ2JvZHknICksXG5cdFx0XHQnbWVudVBhcmVudCc6ICQoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJylcblx0XHR9O1xuXHR9O1xuXHRhcHAubWVudVBhcmVudFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRjb25zb2xlLmxvZyh3aW5kb3cuSGFtbWVyKTtcbi8vIFx0XHQgYXBwLiRjLm1lbnVQYXJlbnQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbigpe2V2ZW50LnByZXZlbnREZWZhdWx0KCk7ICQodGhpcykuZmluZCgnLnN1Yi1tZW51IGxpJykuYWRkQ2xhc3MoJ21lbnUtaG92ZXItYmVoYXZpb3InKTsgY29uc29sZS5sb2codGhpcyl9ICk7XG4vLyBcdFx0XHRjb25zb2xlLmxvZyhcInNcIik7XG4vLyBcdFx0dmFyIGhhbW1lcnRpbWUgPSBuZXcgd2luZG93LkhhbW1lcihhcHAuJGMubWVudVBhcmVudCk7XG4vLyBoYW1tZXJ0aW1lLm9uKCd0YXAnLCBmdW5jdGlvbihldikge1xuLy8gXHRjb25zb2xlLmxvZyhldik7XG4vLyB9KTtcbiQoIGFwcC4kYy5tZW51UGFyZW50ICkuY2xpY2soZnVuY3Rpb24oKSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoXCJtZW51LWhvdmVyLWJlaGF2aW9yXCIpO1xuXHRjb25zb2xlLmxvZygkKHRoaXMpKTtcblxufSk7XG4gIC8vIHdpbmRvdyB3aWR0aCBpcyBhdCBsZWFzdCA1MDBweFxuICAvLyB3aW5kb3cgd2lkdGggaXMgbGVzcyB0aGFuIDUwMHB4XG59XG5cdC8vIERvIHdlIG1lZXQgdGhlIHJlcXVpcmVtZW50cz9cblx0Ly8gLy8gLy8gYXBwLm1lZXRzUmVxdWlyZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuXHQvLyAvLyAvLyBcdHJldHVybiAkKCAnLnNlYXJjaC1maWVsZCcgKS5sZW5ndGg7XG5cdC8vIC8vIH07XG5cdC8vIC8vXG5cdC8vIC8vIC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0Ly8gLy8gYXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIC8vIFx0Ly8gUmVtb3ZlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQgb24gZm9jdXMuXG5cdC8vIC8vIFx0YXBwLiRjLmJvZHkub24oICdmb2N1cycsICcuc2VhcmNoLWZpZWxkJywgYXBwLnJlbW92ZVBsYWNlaG9sZGVyVGV4dCApO1xuXHQvLyAvL1xuXHQvLyBcdC8vIEFkZCBwbGFjZWhvbGRlciB0ZXh0IGJhY2sgdG8gc2VhcmNoIGZpZWxkIG9uIGJsdXIuXG5cdC8vIFx0YXBwLiRjLmJvZHkub24oICdibHVyJywgJy5zZWFyY2gtZmllbGQnLCBhcHAuYWRkUGxhY2Vob2xkZXJUZXh0ICk7XG5cdC8vIH07XG5cdC8vXG5cdC8vIC8vIFJlbW92ZSBwbGFjZWhvbGRlciB0ZXh0IGZyb20gc2VhcmNoIGZpZWxkLlxuXHQvLyBhcHAucmVtb3ZlUGxhY2Vob2xkZXJUZXh0ID0gZnVuY3Rpb24gKCkge1xuXHQvLyBcdHZhciAkc2VhcmNoX2ZpZWxkID0gJCggdGhpcyApO1xuXHQvL1xuXHQvLyBcdCRzZWFyY2hfZmllbGQuZGF0YSggJ3BsYWNlaG9sZGVyJywgJHNlYXJjaF9maWVsZC5hdHRyKCAncGxhY2Vob2xkZXInICkgKS5hdHRyKCAncGxhY2Vob2xkZXInLCAnJyApO1xuXHQvLyB9O1xuXHQvL1xuXHQvLyAvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQuXG5cdC8vIGFwcC5hZGRQbGFjZWhvbGRlclRleHQgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFx0dmFyICRzZWFyY2hfZmllbGQgPSAkKCB0aGlzICk7XG5cdC8vXG5cdC8vIFx0JHNlYXJjaF9maWVsZC5hdHRyKCAncGxhY2Vob2xkZXInLCAkc2VhcmNoX2ZpZWxkLmRhdGEoICdwbGFjZWhvbGRlcicgKSApLmRhdGEoICdwbGFjZWhvbGRlcicsICcnICk7XG5cdC8vIH07XG5cdC8vXG5cdC8vIEVuZ2FnZSFcblx0JCggYXBwLmluaXQgKTtcbn0gKSggd2luZG93LCBqUXVlcnksIHdpbmRvdy5yZXNwb25zaXZldnYgKTtcbiIsIi8qKlxuICogRmlsZSBzZWFyY2guanNcbiAqXG4gKiBEZWFsIHdpdGggdGhlIHNlYXJjaCBmb3JtLlxuICovXG53aW5kb3cud2RzU2VhcmNoID0ge307XG5cbiggZnVuY3Rpb24gKCB3aW5kb3csICQsIGFwcCApIHtcblx0Ly8gQ29uc3RydWN0b3IuXG5cdGFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC5jYWNoZSgpO1xuXG5cdFx0aWYgKCBhcHAubWVldHNSZXF1aXJlbWVudHMoKSApIHtcblx0XHRcdGFwcC5iaW5kRXZlbnRzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENhY2hlIGFsbCB0aGUgdGhpbmdzLlxuXHRhcHAuY2FjaGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjID0ge1xuXHRcdFx0J2JvZHknOiAkKCAnYm9keScgKVxuXHRcdH07XG5cdH07XG5cblx0Ly8gRG8gd2UgbWVldCB0aGUgcmVxdWlyZW1lbnRzP1xuXHRhcHAubWVldHNSZXF1aXJlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICQoICcuc2VhcmNoLWZpZWxkJyApLmxlbmd0aDtcblx0fTtcblxuXHQvLyBDb21iaW5lIGFsbCBldmVudHMuXG5cdGFwcC5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIFJlbW92ZSBwbGFjZWhvbGRlciB0ZXh0IGZyb20gc2VhcmNoIGZpZWxkIG9uIGZvY3VzLlxuXHRcdGFwcC4kYy5ib2R5Lm9uKCAnZm9jdXMnLCAnLnNlYXJjaC1maWVsZCcsIGFwcC5yZW1vdmVQbGFjZWhvbGRlclRleHQgKTtcblxuXHRcdC8vIEFkZCBwbGFjZWhvbGRlciB0ZXh0IGJhY2sgdG8gc2VhcmNoIGZpZWxkIG9uIGJsdXIuXG5cdFx0YXBwLiRjLmJvZHkub24oICdibHVyJywgJy5zZWFyY2gtZmllbGQnLCBhcHAuYWRkUGxhY2Vob2xkZXJUZXh0ICk7XG5cdH07XG5cblx0Ly8gUmVtb3ZlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQuXG5cdGFwcC5yZW1vdmVQbGFjZWhvbGRlclRleHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyICRzZWFyY2hfZmllbGQgPSAkKCB0aGlzICk7XG5cblx0XHQkc2VhcmNoX2ZpZWxkLmRhdGEoICdwbGFjZWhvbGRlcicsICRzZWFyY2hfZmllbGQuYXR0ciggJ3BsYWNlaG9sZGVyJyApICkuYXR0ciggJ3BsYWNlaG9sZGVyJywgJycgKTtcblx0fTtcblxuXHQvLyBSZXBsYWNlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQuXG5cdGFwcC5hZGRQbGFjZWhvbGRlclRleHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyICRzZWFyY2hfZmllbGQgPSAkKCB0aGlzICk7XG5cblx0XHQkc2VhcmNoX2ZpZWxkLmF0dHIoICdwbGFjZWhvbGRlcicsICRzZWFyY2hfZmllbGQuZGF0YSggJ3BsYWNlaG9sZGVyJyApICkuZGF0YSggJ3BsYWNlaG9sZGVyJywgJycgKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG59ICkoIHdpbmRvdywgalF1ZXJ5LCB3aW5kb3cud2RzU2VhcmNoICk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpc1dlYmtpdCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnd2Via2l0JyApID4gLTEsXG5cdFx0aXNPcGVyYSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnb3BlcmEnICkgPiAtMSxcblx0XHRpc0llID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdtc2llJyApID4gLTE7XG5cblx0aWYgKCAoIGlzV2Via2l0IHx8IGlzT3BlcmEgfHwgaXNJZSApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXG5cdFx0XHRcdGVsZW1lbnQ7XG5cblx0XHRcdGlmICggISggL15bQS16MC05Xy1dKyQvICkudGVzdCggaWQgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdGlmICggZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kgKS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSApKCk7XG4iLCIvKipcbiAqIEZpbGUgd2luZG93LXJlYWR5LmpzXG4gKlxuICogQWRkIGEgXCJyZWFkeVwiIGNsYXNzIHRvIDxib2R5PiB3aGVuIHdpbmRvdyBpcyByZWFkeS5cbiAqL1xud2luZG93Lndkc1dpbmRvd1JlYWR5ID0ge307XG4oIGZ1bmN0aW9uICggd2luZG93LCAkLCBhcHAgKSB7XG5cdC8vIENvbnN0cnVjdG9yLlxuXHRhcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuY2FjaGUoKTtcblx0XHRhcHAuYmluZEV2ZW50cygpO1xuXHR9O1xuXG5cdC8vIENhY2hlIGRvY3VtZW50IGVsZW1lbnRzLlxuXHRhcHAuY2FjaGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjID0ge1xuXHRcdFx0J3dpbmRvdyc6ICQoIHdpbmRvdyApLFxuXHRcdFx0J2JvZHknOiAkKCBkb2N1bWVudC5ib2R5IClcblx0XHR9O1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0YXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjLndpbmRvdy5sb2FkKCBhcHAuYWRkQm9keUNsYXNzICk7XG5cdH07XG5cblx0Ly8gQWRkIGEgY2xhc3MgdG8gPGJvZHk+LlxuXHRhcHAuYWRkQm9keUNsYXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC4kYy5ib2R5LmFkZENsYXNzKCAncmVhZHknICk7XG5cdH07XG5cblx0Ly8gRW5nYWdlIVxuXHQkKCBhcHAuaW5pdCApO1xufSApKCB3aW5kb3csIGpRdWVyeSwgd2luZG93Lndkc1dpbmRvd1JlYWR5ICk7XG4iXX0=
