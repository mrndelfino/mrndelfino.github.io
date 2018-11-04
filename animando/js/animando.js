$(document).ready(function() 
{	
	$(".container").css("display", "none").fadeIn(1000);



	$(".transition-fade").click(function(event)
	{
		event.preventDefault();
		linkLocation = this.href;
		$(".container").fadeOut(2000, redirectPage);		
	});
		
	function redirectPage() 
	{
		window.location = linkLocation;
	}	
});