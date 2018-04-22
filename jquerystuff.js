$(document).ready(function () {
	$("#lightgallery").lightGallery({
		loadYoutubeThumbnail: true,
		youtubeThumbSize: 'default',
		loadVimeoThumbnail: true,
		vimeoThumbSize: 'thumbnail_medium',
	});
	console.log($("#lightgallery").lightGallery);
	$(".cross").hide();
	$("nav ul").hide();
	$(".hamburger").click(function () {
		$(".hamburger").fadeOut("slow");
		$(".cross").fadeIn();
		$("nav ul").slideToggle("slow");
	});

	$(".cross").click(function () {
		$(".cross").fadeOut();
		$("nav ul").slideToggle("slow", function () {
			$(".hamburger").fadeIn();
		});
	});
});
