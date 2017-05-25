$(document).ready(function() {

  $('.accordion a').click(function() {
  	
    $('.content').slideUp().hide('slow').siblings('a').children('span').text('+');

  
    $(this).siblings('.content').slideDown().siblings('a').children('span').text('-');
  });

 });