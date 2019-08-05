$(window).ready(function(){
	$(window).scroll(Scroll);
});

var _scrollTop;
var i = 0;
var d = 200;

function Scroll(){
	_scrollTop = $(window).scrollTop();
	console.log(_scrollTop);
	var c = document.querySelectorAll(".profile");
	if ( _scrollTop > d){
		d += 700;
		$(c[i]).addClass("lala");
		i++;
	}
}


