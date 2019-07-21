;(function($){
	"use strict";

  //add masonry
  $('.gallery-examp').masonry({
	itemSelector: '.gallery-item',
	gutter: 29,
	originTop: true,
	columnWidth: 200,
  });

  //add isotope
  $('.gallery-examp').isotope({

});

var filters = [];

$('.gallery-list').on('click', 'a', function(event){
	event.preventDefault();
	$(this).toggleClass('active');
	var isChecked = $(this).hasClass('active');
	var filter = $(this).attr('data-filter');
	if (isChecked) {
		addFilter(filter);
	} else {
		removeFilter(filter);
	}

	
	$('.gallery-examp').isotope({
		filter:filters.join(',')
	});
});
function addFilter( filter ) {
	if (filters.indexOf(filter) == -1) {
		filters.push( filter);
	}
}
function removeFilter( filter) {
	var index = filters.indexOf( filter);
	if ( index != -1 ) {
		filters.splice ( index, 1);
	}
}



// //new slider
// $('.ba-slider-new').masonry({
// 	itemSelector: '.portfolio-item',
// })
// function initSlider(){
// $('.ba-slider-new').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.ba-slider-new-nav'
// });

// };
// $('.ba-slider-new-nav').slick({
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   asNavFor: '.ba-slider-new',
//   dots: false,
//   focusOnSelect: true
// });
// $('.items-navi button').on('click', function(){
// 	initSlider();
// 	$('.items-navi button').addClass('nav-btn');
// })
})(jQuery);
//na examp
