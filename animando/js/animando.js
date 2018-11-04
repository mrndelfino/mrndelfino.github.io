$(document).ready(function() 
{	
	$(".container").css("display", "none");

    $(".container").fadeIn(1000);

	$("a").click(function(event)
	{
		event.preventDefault();
		linkLocation = this.href;
		$(".container").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() 
	{
		window.location = linkLocation;
	}	
});