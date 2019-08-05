var c = 1;
$(document).ready(function () {
    $(window).resize(thayDoiKichThuoc);
    $("#click").click(Click);
    $("#div2").hover(rechuot);
    $("#div2").mouseout(outchuot);
    $("#div2").mousemove(dichuyenchuot);
    $("#click1").dblclick(doubleclickchuot);
});


function thayDoiKichThuoc() {
    var x = $(window).width();
    var y = $(window).height();
    alert(x, y);
}

function Click() {
    if (c == 1) {
        $("#div1").css("background-color", "black");
        c = 2;
    }
    else if(c==2){
        $("#div1").css("background-color", "blue");
        c = 1;
    }
}

function rechuot() {
    $("#div2").attr("style","background-color: blue");
}

function outchuot() {
    $("#div2").removeAttr("style");
}

function dichuyenchuot() {
    $("#div2").attr("style", "background-color: red");
}

function doubleclickchuot() {
    $("#div2").attr("style", "border: 1px solid black").text("Day la noi dung moi");
}