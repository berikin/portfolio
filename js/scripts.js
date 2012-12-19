///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//Script layer for http://www.jimenezfrontend.es
//version 0.1
//Last Updated: 19/12/2012
//Author: José Antonio Yáñez Jiménez -- http://www.jimenezfrontend.es
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



/*************************************************************************************************************
**************************************************************************************************************
**********************
********************** SMOOTH SCROLL FOR ANCHORS
**********************
**************************************************************************************************************
*************************************************************************************************************/ 
$('a.smooth').live('click', function(e) 
	{  
	var $link = $(this);  
	var anchor  = $link.attr('href');  
	$('html, body').stop().animate
		(
			{  
			scrollTop: $(anchor).offset().top  
			}, 1000
		); 
	return false; 
    }); 

/*************************************************************************************************************
**************************************************************************************************************
**********************
********************** TEXT BLINK
**********************
**************************************************************************************************************
*************************************************************************************************************/ 
(function($) 
	{
	$.fn.blinky = function() 
		{
		var that = this;
		function go() 
			{
			$(that).fadeOut().fadeIn();
			setTimeout(go, 1e3); 
			};
		go();
		};
	})(jQuery);


/*************************************************************************************************************
**************************************************************************************************************
**********************
********************** FORM SEND
**********************
**************************************************************************************************************
*************************************************************************************************************/

function initForms() 
	{
	$('#contactf').submit
		(
		function(e)
			{
			e.preventDefault();
			send_url = "mail.php";
			var _val = $('#contact input[type=submit]').attr('value'); 
			$('#contact input[type=submit]').attr('value','Enviando...');
			$('#contact input[type=submit]').attr('disabled','disabled');
			var mail_data = 
				{
				'name': 	$('#form_name').val(),
				'email': 	$('#form_email').val(),
				'comment': 	$('#form_comment').val()
				};
			$.post
				(
				send_url,mail_data,function( data ) 
					{
					data = ( data == '200' ) ? 'Mensaje enviado correctamente.' : data;
					var _class = ( data == '200' ) ? 'ok' : 'error';
					$('#contact').append('<div class="form-status" id="form-status" title="Clic para cerrar">'+data+'</div>');
					$('#form-status').addClass(_class);
	      			}
	      		);
			}
		);
	}


/*************************************************************************************************************
**************************************************************************************************************
**********************
********************** NAVIGATOR AND CURTAIN ANIMATIONS
**********************
**************************************************************************************************************
*************************************************************************************************************/ 

function initCurtain()
	{
	var div = $('#navlinks');
	var homeln = $('#homelink');
	var div3 = $('#curtain');
	var start = $(div).offset().top;
	$.event.add(window, "scroll", function() 
		{
		var p = $(window).scrollTop();
		((p)>start) ? $(div3).delay(900).fadeOut(600) : $(div3).clearQueue().fadeIn(200);
		((p)>start) ? $(homeln).css('display','inline') : $(homeln).css('display','none');
		$(div).css('position',((p)>start) ? 'fixed' : 'absolute');
		$(div).css('top',((p)>start) ? '0px' : '');
		$(div).css('border-bottom-style',((p)>start) ? 'solid' : 'none');
		});	
	}

/*************************************************************************************************************
**************************************************************************************************************
**********************
********************** POLYGONS ANIMATIONS
**********************
**************************************************************************************************************
*************************************************************************************************************/

function initPolygons()
	{
	$('#asir').mouseenter(function() 
		{
		$('#asirtext').fadeIn(700);
		$('#polygon1,#polygon1textspan1,#polygon1textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon1').css('fill','#30233f');
		$('#polygon1').css('stroke','#d8d6ed');
		$('#polygon1textspan1,#polygon1textspan2').css('fill','#30233f');
		$('#polygon1textspan1,#polygon1textspan2').css('stroke','#d8d6ed');
		});
	$('#asir').mouseleave(function() 
		{
		$('#asirtext').fadeOut(700);
		$('#polygon1,#polygon1textspan1,#polygon1textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon1').css('stroke','#e6e6e6');
		$('#polygon1').css('fill','#d8d6ed');
		$('#polygon1textspan1,#polygon1textspan2').css('stroke','#30233f');
		$('#polygon1textspan1,#polygon1textspan2').css('fill','#bcb1ed');
		});
	$('#esi').mouseenter(function() 
		{
		$('#esitext').fadeIn(700);
		$('#polygon2,#polygon2textspan1,#polygon2textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon2').css('fill','#30233f');
		$('#polygon2').css('stroke','#d8d6ed');
		$('#polygon2textspan1,#polygon2textspan2').css('fill','#30233f');
		$('#polygon2textspan1,#polygon2textspan2').css('stroke','#d8d6ed');
		});
	$('#esi').mouseleave(function() 
		{
		$('#esitext').fadeOut(700);
		$('#polygon2,#polygon2textspan1,#polygon2textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon2').css('stroke','#e6e6e6');
		$('#polygon2').css('fill','#d8d6ed');
		$('#polygon2textspan1,#polygon2textspan2').css('stroke','#30233f');
		$('#polygon2textspan1,#polygon2textspan2').css('fill','#bcb1ed');
		});
	$('#daw').mouseenter(function() 
		{
		$('#dawtext').fadeIn(700);
		$('#polygon3,#polygon3textspan1,#polygon3textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon3').css('fill','#30233f');
		$('#polygon3').css('stroke','#d8d6ed');
		$('#polygon3textspan1,#polygon3textspan2').css('fill','#30233f');
		$('#polygon3textspan1,#polygon3textspan2').css('stroke','#d8d6ed');
		});
	$('#daw').mouseleave(function() 
		{
		$('#dawtext').fadeOut(700);
		$('#polygon3,#polygon3textspan1,#polygon3textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon3').css('stroke','#e6e6e6');
		$('#polygon3').css('fill','#d8d6ed');
		$('#polygon3textspan1,#polygon3textspan2').css('stroke','#30233f');
		$('#polygon3textspan1,#polygon3textspan2').css('fill','#bcb1ed');
		});		
	}

/*************************************************************************************************************
**************************************************************************************************************
**********************
********************** ELLIPSES ANIMATIONS
**********************
**************************************************************************************************************
*************************************************************************************************************/

function initEllipses()
	{
	$('#html_xhtml').mouseenter(function() 
		{
		$('#html_xhtmltext').fadeIn(700);
		$('#elipse1').css('fill','#e6e6e6');
		$('#elipse1').css('stroke','#30233f');
		$('#elipse1text1,#elipse1text2').css('fill','#e6e6e6');
		$('#elipse1text1,#elipse1text2').css('stroke','#200c32');
		});
	$('#html_xhtml').mouseleave(function() 
		{
		$('#html_xhtmltext').fadeOut(700);
		$('#elipse1').css('stroke','#e6e6e6');
		$('#elipse1').css('fill','#30233f');
		$('#elipse1text1,#elipse1text2').css('stroke','#e6e6e6');
		$('#elipse1text1,#elipse1text2').css('fill','#200c32');
		});
	$('#css_ajax').mouseenter(function() 
		{
		$('#css_ajaxtext').fadeIn(700);
		$('#elipse2').css('fill','#e6e6e6');
		$('#elipse2').css('stroke','#30233f');
		$('#elipse2text1,#elipse2text2').css('fill','#e6e6e6');
		$('#elipse2text1,#elipse2text2').css('stroke','#200c32');
		});
	$('#css_ajax').mouseleave(function() 
		{
		$('#css_ajaxtext').fadeOut(700);
		$('#elipse2').css('stroke','#e6e6e6');
		$('#elipse2').css('fill','#30233f');
		$('#elipse2text1,#elipse2text2').css('stroke','#e6e6e6');
		$('#elipse2text1,#elipse2text2').css('fill','#200c32');
		});
	$('#django').mouseenter(function() 
		{
		$('#djangotext').fadeIn(700);
		$('#elipse3').css('fill','#e6e6e6');
		$('#elipse3').css('stroke','#30233f');
		$('#elipse3text1,#elipse3text2').css('fill','#e6e6e6');
		$('#elipse3text1,#elipse3text2').css('stroke','#200c32');
		});
	$('#django').mouseleave(function() 
		{
		$('#djangotext').fadeOut(700);
		$('#elipse3').css('stroke','#e6e6e6');
		$('#elipse3').css('fill','#30233f');
		$('#elipse3text1,#elipse3text2').css('stroke','#e6e6e6');
		$('#elipse3text1,#elipse3text2').css('fill','#200c32');
		});
	$('#moodle').mouseenter(function() 
		{
		$('#moodletext').fadeIn(700);
		$('#elipse4').css('fill','#e6e6e6');
		$('#elipse4').css('stroke','#30233f');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('fill','#e6e6e6');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('stroke','#200c32');
		});
	$('#moodle').mouseleave(function() 
		{
		$('#moodletext').fadeOut(700);
		$('#elipse4').css('stroke','#e6e6e6');
		$('#elipse4').css('fill','#30233f');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('stroke','#e6e6e6');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('fill','#200c32');
		});
	}


/*************************************************************************************************************
**************************************************************************************************************
**********************
********************** DOCUMENT READY LOAD
**********************
**************************************************************************************************************
*************************************************************************************************************/ 
$(document).ready(function()
	{
	initForms();
	initPolygons();
	initEllipses();
	initCurtain();
	$('.blink').blinky(300);
	$('#form_comment').autosize({append: "\n"});
	});

