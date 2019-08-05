function loaded() {
    document.getElementById("click").onclick = function () {
            alert($("#div1").html());//doc noi dung html 1
            $("#div1").html("<span>Day la noi dung moi 1</span>");//doi noi dung html 1
            alert($("#div2").text());//doc noi dung text 2
            $("#div2").text("Day la noi dung moi 2");//doi noi dung text 2

        //-------------------------------------------------------------------------//

        $("#div1").append("<b>Day la noi dung chep them o sau</b>");//chep them noi dung vao cuoi selector div1
        $("#div2").prepend("<b>Day la noi dung chep them o dau</b>");//chep them noi dung vao dau selector div2
        $("<span>Day la noi dung append to</span>").appendTo("#div1");//chep noi dung vao cuoi selector div1
        $("<span>Day la noi dung prepend to</span>").prependTo("#div2");//chep noi dung vao dau selector div2

        //------------------------------------------------------------------------//

        $("#div2").after("<div id='div3'>Day la noi dung div3</div>");//them div3 vao sau the div2
        $("#div1").before("<div id='div4'>Day la noi dung div4</div>");// them div4 vao truoc the div1
        $("<div id='div5'>Day la noi dung div5 dung insertAfter</div>").insertAfter("#div3");// them div5 sau div3 dung insert
        $("<div id='div6'>Day la noi dung div6 dung insertAfter</div>").insertBefore("#div4");// them div6 truoc div4 dung insert

        //-----------------------------------------------------------------------//

        $("#div1").empty();//lam rong div1
        $("#div4").remove();//xoa div4 khoi tai lieu html
        $("span").unwrap();//xoa phan tu cha cua the span( la div2);
        $("span").replaceWith("<b>Day la noi dung append to</b>");//doi the span thanh the b
        $("<div id='div7'>Day la noi dung the div7</div>").replaceAll("#div6");//doi the div6 thanh div7 dung replaceAll

        //----------------------------------------------------------------------//

        $("div").wrap("<selection></selection>");//them the <selection> vao tung the div
        $("div").unwrap();//xoa bo phan tu bao trum
        $("div").wrapAll("<selection></selection>");//gom tat ca the div bao trum boi selection
        $("div").wrapInner("<b></b>");//them the b vao noi dung cua cac the div hien tai
    }
}