var b = {
		autoOpen: false,
		show: {effect:"explode", ducation: 1000},
		hide: {effect:"drop", ducation: 1000},
		width: 300,
		height: 300,
		resizable:false,
		modal: true,
		buttons: {
			"Dong y": function(){
				$("#div1").append("<b>Huynh Cong Phat</b>");
			},
			"Tat": function(){
				$(this).dialog("close");
			}
		}
};


$(document).ready(function(){
	$("#click").click(Click);
});



function Click(){
	$("#div1").dialog(b).dialog("open");
}