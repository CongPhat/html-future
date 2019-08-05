$(document).ready(function () {
    $("#click").mousedown(ClickDown);
    $("#click").mouseup(ClickUp);
    $("#dangfocus").bind("focus keydown",DangFocus);
    $("#dangfocus").bind("blur keyup", HetFocus);
    $("#dangfocus").unbind("keyup");
    $("#dangfocus").select(DangSelect);
});

function ClickDown() {
    $("#div1").slideToggle(function () {
        $("#div1").fadeTo(3000, 0.5);
    });
    $("#div2").css("background-color", "yellow");
}

function ClickUp() {
    $("#div1").css("background-color", "lime");
    $("#div2").css("background-color", "red");
}

function DangFocus() {
    $("#div1").css("background-color", "lime");
    $("#div2").css("background-color", "cyan");
}

function HetFocus() {
    $("#div1").css("background-color", "black");
    $("#div2").css("background-color", "red");
}

function DangSelect() {
    $("#div1").css("background-color", "red");
    $("#div2").css("background-color", "red");
}