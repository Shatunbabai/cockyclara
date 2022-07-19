// Открыть меню
$("#show-menu").on("click", function() {
	$("#hidden-menu").animate({
		"left": 0,
	}, 500);
})

// Закрыть меню

$("#hidden-menu .close").on("click", function() {
	$("#hidden-menu").animate({
		"left": -300,
	}, 200);
})
