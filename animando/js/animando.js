/* 
* animando.js (http://github.com/mrndelfino)
* Version: 1.5
* Created by Mariano Delfino

* animando.js Copyright(c) Mariano Delfino 2018. 
*/

$(function() 
{	
	$(".container, .container-fluid, .fade").css("display", "none")
				   .fadeIn(1000);
	
	var swipeNext =	($("next").text())
	$(".swipe-left").animate({"margin-left": screen.width+"px"}, 1000)
	window.location.href = swipeNext;
});