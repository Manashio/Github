	
	window.onscroll = function() {scroll_height()};
	function scroll_height() {
	    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
	         document.getElementById("nav").className = "navbar navbar-expand-md fixed-top nav-small";
	    }else if(document.body.scrollTop < 700 || document.documentElement.scrollTop < 700){
	         document.getElementById("nav").className = "navbar navbar-expand-md ";
	    }
	}

	$(document).ready(function(){
		$("#more").click(function(){
			$("#show").fadeToggle();
		});
	});

