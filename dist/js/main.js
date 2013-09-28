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
$('a.smooth').click(function(e) 
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
			var posting=$.post
				(
				send_url,mail_data,function( data ) 
					{
					sclass = ( data == '200' ) ? 'ok' : 'error';
					data = ( data == '200' ) ? 'Mensaje enviado correctamente.' : data;
					$('#contact').append('<div class="form-status" id="form-status" title="Clic para cerrar">'+data+'</div>');
					$('#form-status').addClass(sclass);
					$('#form-status').addClass("boxh3");
					$('#form-status').fadeIn(700);
	      			}
	      		);
	      		posting.done(function( data ) 
	      		{
				$('#contact input[type=submit]').removeAttr('disabled');
				$('#contact input[type=submit]').attr('value','Enviar');
				$('#form-status').click(function()
					{
					$('#form-status').fadeOut(700, function() 
						{
 				       	$(this).remove();
    					});
					$('#form_name').val('');
					$('#form_email').val('');
					$('#form_comment').val('');
					});
  				});
			}
		);
	$('#send').mouseenter(function() 
		{
		$('#send').css('transition','color 700ms');
		$('#send').css('color','#BCB1ED');
		});
	$('#send').mouseleave(function() 
		{
		$('#send').css('transition','color 700ms');
		$('#send').css('color','#372849');
		});
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
	$('#dam').mouseenter(function() 
		{
		$('#damtext').fadeIn(700);
		$('#polygon4,#polygon4textspan1,#polygon4textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon4').css('fill','#30233f');
		$('#polygon4').css('stroke','#d8d6ed');
		$('#polygon4textspan1,#polygon4textspan2').css('fill','#30233f');
		$('#polygon4textspan1,#polygon4textspan2').css('stroke','#d8d6ed');
		});
	$('#dam').mouseleave(function() 
		{
		$('#damtext').fadeOut(700);
		$('#polygon4,#polygon4textspan1,#polygon4textspan2').css('transition','fill 700ms, stroke 800ms');
		$('#polygon4').css('stroke','#e6e6e6');
		$('#polygon4').css('fill','#d8d6ed');
		$('#polygon4textspan1,#polygon4textspan2').css('stroke','#30233f');
		$('#polygon4textspan1,#polygon4textspan2').css('fill','#bcb1ed');
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
		$('#elipse1,#elipse1text1,#elipse1text2').css('transition','fill 700ms, stroke 800ms');
		$('#elipse1').css('fill','#e6e6e6');
		$('#elipse1').css('stroke','#30233f');
		$('#elipse1text1,#elipse1text2').css('fill','#e6e6e6');
		$('#elipse1text1,#elipse1text2').css('stroke','#200c32');
		});
	$('#html_xhtml').mouseleave(function() 
		{
		$('#html_xhtmltext').fadeOut(700);
		$('#elipse1,#elipse1text1,#elipse1text2').css('transition','fill 700ms, stroke 800ms');
		$('#elipse1').css('stroke','#e6e6e6');
		$('#elipse1').css('fill','#30233f');
		$('#elipse1text1,#elipse1text2').css('stroke','#e6e6e6');
		$('#elipse1text1,#elipse1text2').css('fill','#200c32');
		});
	$('#css_ajax').mouseenter(function() 
		{
		$('#css_ajaxtext').fadeIn(700);
		$('#elipse2,#elipse2text1,#elipse2text2').css('transition','fill 700ms, stroke 800ms');
		$('#elipse2').css('fill','#e6e6e6');
		$('#elipse2').css('stroke','#30233f');
		$('#elipse2text1,#elipse2text2').css('fill','#e6e6e6');
		$('#elipse2text1,#elipse2text2').css('stroke','#200c32');
		});
	$('#css_ajax').mouseleave(function() 
		{
		$('#css_ajaxtext').fadeOut(700);
		$('#elipse2,#elipse2text1,#elipse2text2').css('transition','fill 700ms, stroke 800ms');
		$('#elipse2').css('stroke','#e6e6e6');
		$('#elipse2').css('fill','#30233f');
		$('#elipse2text1,#elipse2text2').css('stroke','#e6e6e6');
		$('#elipse2text1,#elipse2text2').css('fill','#200c32');
		});
	$('#django').mouseenter(function() 
		{
		$('#djangotext').fadeIn(700);
		$('#elipse3,#elipse3text1,#elipse3text2').css('transition','fill 700ms, stroke 800ms');
		$('#elipse3').css('fill','#e6e6e6');
		$('#elipse3').css('stroke','#30233f');
		$('#elipse3text1,#elipse3text2').css('fill','#e6e6e6');
		$('#elipse3text1,#elipse3text2').css('stroke','#200c32');
		});
	$('#django').mouseleave(function() 
		{
		$('#djangotext').fadeOut(700);
		$('#elipse3,#elipse3text1,#elipse3text2').css('transition','fill 700ms, stroke 800ms');
		$('#elipse3').css('stroke','#e6e6e6');
		$('#elipse3').css('fill','#30233f');
		$('#elipse3text1,#elipse3text2').css('stroke','#e6e6e6');
		$('#elipse3text1,#elipse3text2').css('fill','#200c32');
		});
	$('#moodle').mouseenter(function() 
		{
		$('#moodletext').fadeIn(700);
		$('#elipse4,#elipse4text1,#elipse4text2,#elipse4text3').css('transition','fill 700ms, stroke 800ms');
		$('#elipse4').css('fill','#e6e6e6');
		$('#elipse4').css('stroke','#30233f');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('fill','#e6e6e6');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('stroke','#200c32');
		});
	$('#moodle').mouseleave(function() 
		{
		$('#moodletext').fadeOut(700);
		$('#elipse4,#elipse4text1,#elipse4text2,#elipse4text3').css('transition','fill 700ms, stroke 800ms');
		$('#elipse4').css('stroke','#e6e6e6');
		$('#elipse4').css('fill','#30233f');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('stroke','#e6e6e6');
		$('#elipse4text1,#elipse4text2,#elipse4text3').css('fill','#200c32');
		});
	}


function initLinks()
	{
	$('#linktwitter').mouseenter(function() 
		{
		$('#linktwitter').css('transition','color 500ms');
		$('#linktwitter').css('color','#CC99FF');
		});
	$('#linktwitter').mouseleave(function() 
		{
		$('#linktwitter').css('transition','color 700ms');
		$('#linktwitter').css('color','#D8D6ED');
		});
	$('#linkflickr').mouseenter(function() 
		{
		$('#linkflickr').css('transition','color 700ms');
		$('#linkflickr').css('color','#CC99FF');
		});
	$('#linkflickr').mouseleave(function() 
		{
		$('#linkflickr').css('transition','color 700ms');
		$('#linkflickr').css('color','#D8D6ED');
		});
	$('#linkcv').mouseenter(function() 
		{
		$('#linkcv').css('transition','color 700ms');
		$('#linkcv').css('color','#CC99FF');
		});
	$('#linkcv').mouseleave(function() 
		{
		$('#linkcv').css('transition','color 700ms');
		$('#linkcv').css('color','#D8D6ED');
		});
	}

function initWorks()
	{
	$('#galileo3d').click(function() 
		{
		$('#galileo3dlayout').fadeOut(500);
		$('#karolportfoliolayout').fadeOut(500);
		$('#juvecyllayout').fadeOut(500);
		$('#berikportfoliolayout').fadeOut(500);
		$('#decorestaurolayout').fadeOut(500);
		$('#galileo3dlayout').delay(505).fadeIn(500);
		});
	$('#juvecyl').click(function() 
		{
		$('#galileo3dlayout').fadeOut(500);
		$('#juvecyllayout').fadeOut(500);
		$('#karolportfoliolayout').fadeOut(500);
		$('#berikportfoliolayout').fadeOut(500);
		$('#decorestaurolayout').fadeOut(500);
		$('#juvecyllayout').delay(505).fadeIn(500);
		});
	$('#berikportfolio').click(function() 
		{
		$('#galileo3dlayout').fadeOut(500);
		$('#juvecyllayout').fadeOut(500);
		$('#karolportfoliolayout').fadeOut(500);
		$('#berikportfoliolayout').fadeOut(500);
		$('#decorestaurolayout').fadeOut(500);
		$('#berikportfoliolayout').delay(505).fadeIn(500);
		});
	$('#karolportfolio').click(function() 
		{
		$('#galileo3dlayout').fadeOut(500);
		$('#juvecyllayout').fadeOut(500);
		$('#karolportfoliolayout').fadeOut(500);
		$('#berikportfoliolayout').fadeOut(500);
		$('#decorestaurolayout').fadeOut(500);
		$('#karolportfoliolayout').delay(505).fadeIn(500);
		});
	$('#decorestauro').click(function() 
		{
		$('#galileo3dlayout').fadeOut(500);
		$('#juvecyllayout').fadeOut(500);
		$('#karolportfoliolayout').fadeOut(500);
		$('#berikportfoliolayout').fadeOut(500);
		$('#karolportfoliolayout').fadeOut(500);
		$('#decorestaurolayout').delay(505).fadeIn(500);
		});
	$('#galileo3d,#berikportfolio,#karolportfolio,#juvecyl,#decorestauro').mouseenter(function() 
		{
			$(this).animate({'border-color':'#BCB1ED'}, 1000);
		});
	$('#galileo3d,#berikportfolio,#karolportfolio,#juvecyl,#decorestauro').mouseleave(function() 
		{
			$(this).animate({'border-color':'#E6E6E6'}, 1000);
		});
	}

function startScrollingDown()
{
    // contintually increase scroll position
    $("#workflow").animate({scrollTop: '+=50'}, startScrollingDown);
}
function startScrollingUp()
{
    // contintually increase scroll position
    $("#workflow").animate({scrollTop: '-=50'}, startScrollingUp);
}
function stopScrolling()
{
    // stop increasing scroll position
    $("#workflow").stop();
}
function initScroll(){
$('#scrolldown').mousedown(startScrollingDown).mouseup(stopScrolling);
$('#scrollup').mousedown(startScrollingUp).mouseup(stopScrolling);
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
	initLinks();
	initWorks();
	initScroll();
	$('.blink').blinky(300);
	$('#form_comment').autosize({append: "\n"});
	});


