$('.slider').slick({
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false
});
$('.filter li').click(function(e){
	$(this).toggleClass('active');
})
