/*$('document').ready(function(){

		$('#target').change(function(){
	alert('dark chocklate is very sour');
    });
});*/
		/*alert("page has loaded")*/
		
   /*	$(window).scroll(function(){

   		$('html').css('background-color','red');
   	});
   		});
*/
$('doucment').ready(function(){

	/*$(window).scroll(function(){

		$('html').css('background-color','red');

	});	*/


	$('#target').change(function(){
		alert('you change the option');

	});

	$('#un').focusin(function(){

		alert('focusin was fired');

	});

	$('#p').focusout(function(){

		alert('focusout was fired');
	});

	$('#sonu').hover(function(){
       
      $('#sonu').css('background-color','yellow');
	});

	$('#akash').hover(function(){
       
      $('#akash').css('background-color','red');
	});
	$('#ria').hover(function(){
       
      $('#ria').css('background-color','blue');
	});

	$('#sonu').mouseout(function(){
       
      $('#sonu').css('background-color','pink');
	});

	$('#akash').mouseout(function(){
       
      $('#akash').css('background-color','green');
	});
	$('#ria').mouseout(function(){
       
      $('#ria').css('background-color','green');
	});
});



	