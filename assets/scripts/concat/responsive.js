/**
 * File search.js
 *
 * Deal with the search form.
 */
window.responsivevv = {};

( function ( window, $ ,app) {
	// Constructor.
	app.init = function () {
		app.cache();
		app.menuParentTarget();
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $( 'body' ),
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
$( app.$c.menuParent ).click(function() {
	event.preventDefault();
  $(this).toggleClass("menu-hover-behavior");
	console.log($(this));

});
  // window width is at least 500px
  // window width is less than 500px
}
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
	$( app.init );
} )( window, jQuery, window.responsivevv );
