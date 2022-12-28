(function ($){
    "use strict"


$(window).scroll(function(){

  if(visible($('.count-digit')))
    {
      if($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');
      
$('.count-digit').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 5000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
    }
})   

}(jQuery));


(function ($){
  "use strict"
var swiper = new Swiper('.swiper-cont1', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: false,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});}(jQuery));

$(function(){
  
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
  
});





