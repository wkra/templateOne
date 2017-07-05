document.addEventListener("DOMContentLoaded", function () {
	
  // hover menu
  $(".navbar li a").each(function (i) {$(this).clone().appendTo($(this).parent()).addClass("navbarHide"); i++});
  
  // smooth scroll
  
  $(document).on('click', 'nav a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    });
  
  //background scroll
  
  	var windowHeight = jQuery(window).height();
	var windowScrollPosTop = jQuery(window).scrollTop();
	var windowScrollPosBottom = windowHeight + windowScrollPosTop;
	var windowWidth = jQuery(window).width();
	
    //first photo
	myScrollVal(-100, 100, '#header>.photo');
	
	$(window).scroll(function(){
		windowHeight = jQuery(window).height();
		windowScrollPosTop = jQuery(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
		windowWidth = jQuery(window).width();
      
		myScrollVal(-100, 100, '#header>.photo');
        myScrollVal(0, 100, '.photoA');
        myScrollVal(0, 100, '.photoB');
		
	});
	
	function myScrollVal(startValue, endValue, object){
		
		var objectOffset = jQuery(object).offset();
		var objectOffsetTop = objectOffset.top;
		var objectOffsetBottom = objectOffsetTop + jQuery(object).outerHeight();

		if (windowScrollPosBottom > objectOffsetTop && windowScrollPosTop < (objectOffsetTop+$(object).height())){

			var scrollTop = $(this).scrollTop();
		$(object).css('background-position', '50%' + 
          Math.round((startValue+(((windowScrollPosBottom-objectOffsetTop)*(endValue-startValue))/(windowHeight+(objectOffsetBottom-objectOffsetTop))))) + '%');
			
		}
		
	}
  
  // social media icons
  
  $('.socialMedia .icons a').each(function(i){$(this).load('svg/' + $(this).attr('icon') + '.svg'); i++});
  $('.footerMedia .icons a').each(function(i){$(this).load('svg/' + $(this).attr('icon') + '.svg'); i++});
  
  //tabs button
  
    $('#tabs .btn').each(function(index){
    $(this).on("click", function(){
      var $this = $(this);
      $('#tabs article').animate({opacity: 0}, 500, function(){
        $('#tabs article').load($($this).data('file')).animate({opacity: 1},500)
      })
    });
    
  });
  
  // load first tab
  
    $('#tabs article').load($('#tabs .btn:first').data('file'));

  
});