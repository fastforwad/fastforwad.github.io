
 	$(document).ready(function() {

		$(".cross").hide();
		$("nav ul").hide();
		$(".hamburger").click(function() {
			$(".hamburger").fadeOut("slow");
			$(".cross").fadeIn();
			$("nav ul").slideToggle("slow");
        });

		$(".cross").click(function() {
			$(".cross").fadeOut();
			$("nav ul").slideToggle("slow", function() {
			$(".hamburger").fadeIn();
			});
		});
	});
