var s = {
	show: {effect:"slideDown", delay: 100},
	hide: {effect:"slideUp", delay: 100},
	track: true
};

$(document).ready(function(){
	$("#rechuot").hover(ReChuot);
});

function ReChuot(){
	$("#b").tooltip(s);
}