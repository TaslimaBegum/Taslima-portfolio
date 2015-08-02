



$(function() {
    $("a.page-scroll").bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})






    $(document).ready(function() {
      $("#navButton").click(function(){
      
        $("nav").slideToggle(400);
      });
    });




  // $('.bxslider').bxSlider({
  //   auto: true,
  //   autoControls: true
  // });` 





$('.bxslider').bxSlider({
  mode: 'horizontal',
  useCSS: false,
  infiniteLoop: false,
  hideControlOnEnd: true,
  easing: 'easeOutElastic',
  speed: 2000
});