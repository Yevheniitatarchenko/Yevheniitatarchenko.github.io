$(function() {

	$('ul li a').click(function(){
    $('li a').removeClass("memory__active-gb");
    $(this).addClass("memory__active-gb");
	});

});
