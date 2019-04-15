$(function() {

	//$('.s-direct .item-vertical p').equalHeights();выравнивание высоты не сработало

	$(".reviews").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
	});

	$(".partners").owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".my-mnu").slideToggle();
		return false;
  });

});
