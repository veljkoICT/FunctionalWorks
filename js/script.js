$(document).ready(function(){
	$(".txt2").hide();
	var text1=$(".txt1");
	$(".gallery-box-txt").css(
		'marginTop','30%'
	);	
	$(".gallery-box").stop().hover(function(event){
		event.preventDefault();
		$(this).find(".gallery-box-txt").stop( true, true ).animate(
			{marginTop:'0%'}
		,"500");
		$(this).find('.txt2').stop( true, true ).fadeIn(1000);
		$(this).find(".span-logo").stop( true, true ).slideUp();
	}
	,function(event){
		event.preventDefault();
		$(this).find(".gallery-box-txt").animate(
			{marginTop:'30%'
		}
		,"1500");
		$(this).find('.txt2').stop( true, true ).fadeOut(300);
		$(this).find(".span-logo").stop( true, true ).slideDown();
	});
	$('.autor-content').hide();
	$('.autor-button').click(function(){
		if(($('.autor-content')).is(':visible')){
			$('.autor-content').slideUp(500);
			$('.autor-button').animate({
				width:'30%'
			},300)
			$(this).html('<p>ABOUT AUTHOR</p>');				
		}
		else{
			$('.autor-content').slideDown(500);
			$('.autor-button').animate({
				width:'30%'
			},300)
			$(this).html('<i class="fas fa-times"></i>');	
		}
	});
	$(".blocks").hover(function(){
		$(this).css({
			backgroundColor : '#463e49'			
		})
	}
	,function(){
		$(this).css({
			backgroundColor : 'rgb(54, 44, 53)'
		})
	});	
	$(window).on('scroll', function() {
		if($(window).scrollTop()) {
			  $('#nav').addClass('skrolfun');
		}
		else {
			  $('#nav').removeClass('skrolfun');
		}
	});	
	$('#nav_logo').click(function(){ 
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		$('html, body').stop();
		$('html, body').animate({
		  scrollTop: $($.attr(this, 'href')).offset().top
		 }, 2000);
	});
});