$(document).ready(function(){
	$(".hasDropDown > a").on("click", function(event){
		event.preventDefault();
		$(".hasDropDown .dropDown").toggleClass("hidden");
	});
	$(".toggleMenu").on("click", function(){
		$(".ulMenu").toggleClass("show");
	});
	$(".upToTop").on("click", function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});
	
	$(window).scroll(function(){
		var scrolledHeight = $(window).scrollTop();
		if(scrolledHeight > 100) {
			$(".inform").addClass("scrolled");
			$(".roomsMenuContainer").addClass("scrolled");
			$(".upToTop").addClass("show");
		} else {
			$(".inform").removeClass("scrolled");
			$(".roomsMenuContainer").removeClass("scrolled");
			$(".upToTop").removeClass("show");
		}
	});
});
