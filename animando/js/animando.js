$(document).ready(function() 
{	
	$("div .container").css("display", "none");

    $("div .container").fadeIn(1000);

	$("a").click(function(event)
	{
		event.preventDefault();
		linkLocation = this.href;
		$("div .container").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() 
	{
		window.location = linkLocation;
	}	
});