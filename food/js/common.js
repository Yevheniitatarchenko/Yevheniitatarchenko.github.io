$(function() {

	$(window).scroll(function() {
		var st = $(this).scrollTop();
		
		$(".scroll-text").css({
			"transform" : "translate(0%, " + st /10 + "rem"
		});

		$(".section-one img").css({
			"transform" : "translate(0%, " + st /10 + "%"
		});

	});

	$(document).ready(function() {
		$('#accordion .acc-head').on('click', function() {
			$(this).closest('li').toggleClass('active').siblings().removeClass('active');
		});
	});

	var $page = $('html, body');
	$('.scroll').click(function() {
		var $id = $(this).attr('href');
			$page.animate({
					scrollTop: $($id).offset().top
			}, 900);
			return false;
	});

	$(function(){
		$("#phone").mask("+380 (99) 99-99-999");
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-mnu").slideToggle();
		return false;
  });

});
