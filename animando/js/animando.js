/* 
* animando.js (http://github.com/mrndelfino)
* Version: 1.5
* Created by Mariano Delfino

* animando.js Copyright(c) Mariano Delfino 2018. 
*/

$(function() 
{	
	var fadeTime = parseInt($("fade").text());
	if(fadeTime != null)
	{
		$(".fade").css("display", "none")
				  .fadeIn(fadeTime);
	}
	
	var swipeTime = parseInt($("swipe").text());
	var swipeNext =	($("next").text())
	if(swipeTime != null)
	{
		$(".swipe-left").css("display", "none")
						.animate({"margin-left": screen.width+"px"}, swipeTime)
		window.location.href = swipeNext;
	}
	
	var slideTime = parseInt($("slide").text());
	var slidePause = parseInt($("pause").text());
	var slideAmount = parseInt($("amount").text());
	setInterval(function()
	{
		$(".slide-left").animate({"margin-left": "-="+slideAmount+"px"},slideTime)
	}, slidePause);
});