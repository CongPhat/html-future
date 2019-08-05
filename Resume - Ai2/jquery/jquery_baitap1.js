function load() {
    alert($("div").attr("id"));// doc gia tri thuoc tinh id cua tat ca the div
    $("div").attr("class", "number");//them class cho tat ca the div
    $("#div1").attr("number", "1");// them thuoc tinh the id div1
    $("#div1").removeAttr("number");// xoa thuoc tinh
    //-----------------------------//
    $("div").addClass("number1");//add them gia tri number1 vao thuoc tinh class
    $("div").removeClass("number");//xoa gia tri number trong class
    alert($("div").hasClass("number"));//tim kiem gia tri number trong class. false
    //---------------------------------//
    $("div").css("border", "1px solid black");//them thuoc tinh css border
    alert($("div").css("border"));//doc gia tri css the div.chi doc thang dau tien
}