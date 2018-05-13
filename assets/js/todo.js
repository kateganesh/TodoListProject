//Checking specific Todo by Clicking
$("ul").on("click", "li", function(){
	//$("li").addClass("c");
	$(this).toggleClass("completed");
	//$(this).css("color" , "gray");
});


//Click on the Span to remove Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var inText = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span><i class = 'fa fa-trash'></i></span> " + inText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});