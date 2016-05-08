$(document).ready(function(){
	$('h1 p').click(function(){
		
	});
	$('h1').click(function(){
		$('p').fadeOut('slow');
	
	});

	$('#clickMe').click(function(){
		$('.top').toggleClass('transparent');
		
	});

	$('#button').click(function(){
		$('html body').animate({scrollTop:50},'slow');

	})


});

