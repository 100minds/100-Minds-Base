$(document).ready(function(){
  
  // Write your Javascript!
  $('form').submit(function(e){
  	e.preventDefault();
  	var email = $(this).find('input.email-address').val();
  	console.log( "woah" +  email);
  	$input = $(this).find('input.email-address');
  	$.ajax({
  		url: 'http://mongeymedia.com/100minds/email_subscription.php',
  		type: 'POST',
  		data: { email: email},
  		success: function(){
  			console.log( "done" +  email);
  			var html = '<div class="alert-box  success">Thanks for signing up, we\'ll be in touch soon.</div>';
  			$input.parent().parent().parent().append(html);
  			$input.parent().parent().remove();
  		},
  		failure: function(){

  		}
  	});
  })
});