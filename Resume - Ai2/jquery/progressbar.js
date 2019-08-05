var b = {
	value: false,
	change: function(){
		var c = $("#pro").progressbar("value");
		$("#load").html(c + "%");
	},
	complete: function(){
		$("#load").html("Da Xong");
	}
}

$(document).ready(function(){
	$("#click").click(Click);
	$("#pro").progressbar(b);
});



function Click(){
	$("#pro").removeAttr("style");
	var d = $("#pro").progressbar("value")+1;
	$("#pro").progressbar("value", d);
	if(d<100){
		setTimeout("Click()", 20);
	}
}