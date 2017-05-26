$(document).ready(function() {



  $('.accordion a').click(function() {
  	
    if($(this).is('.active')){

    	
    $('.content').slideUp().hide('slow').siblings('a').removeClass('active').css('padding-left', '19px').children('span').text('+');

  	}


  	else{

  	$('.content').slideUp().hide('slow').siblings('a').removeClass('active').css('padding-left', '19px').children('span').text('+');

    $(this).siblings('.content').slideDown().siblings('a').addClass('active').css('padding-left', '23px').children('span').text('-');
  }

  });

 });