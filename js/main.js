jQuery(document).ready(function ($) {

console.log('js included');

//JQUERY TABS
$( function() {
    $( "#tabs" ).tabs();
} );


//CUSTOM SLIDER
  setInterval(function () {
      moveRight();
  }, 3000);
  
	var slideCount = $('#testimonials-slider ul li').length;
	var slideWidth = $('#testimonials-slider ul li').width();
	var slideHeight = $('#testimonials-slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#testimonials-slider').css({ width: slideWidth, height: slideHeight });
	
	$('#testimonials-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#testimonials-slider ul li:last-child').prependTo('#testimonials-slider ul');

    function moveLeft() {
        $('#testimonials-slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#testimonials-slider ul li:last-child').prependTo('#testimonials-slider ul');
            $('#testimonials-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#testimonials-slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#testimonials-slider ul li:first-child').appendTo('#testimonials-slider ul');
            $('#testimonials-slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function (e) {
      e.preventDefault();
      moveLeft();
    });

    $('a.control_next').click(function (e) {
      e.preventDefault();
      moveRight();
    });


    //CAROUSEL

    $('#slideCarouselLeft').click(function (e) {
      e.preventDefault();
      var $lastElement = $('.carousel div:last');
      var $firstElement = $('.carousel div:first');
      $lastElement.insertBefore($firstElement);
      $lastElement.show();
      $('.carousel div:gt(3)').hide();
  });
  
  $('#slideCarouselRight').click(function (e) {
    e.preventDefault();
      var $lastElement = $('.carousel div:last');
      var $firstElement = $('.carousel div:first');
      var $fourthElement = $('.carousel div:nth-child(5)');
      $firstElement.insertAfter($lastElement);
      $('.carousel div:gt(4)').hide();
      $fourthElement.show();
  });

});    
