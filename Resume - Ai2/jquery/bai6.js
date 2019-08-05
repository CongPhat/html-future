$(document).ready(function() {
    $("#click").click(Click);
});

var c = 1;

function Click() {
    $("#div1").stop(true);
    if (c == 1) {
        c = 2;
        Down();
    }
    else {
        c = 1;
        Up();
    }
}


function Down() {
    $("#div1").animate({
        borderWidth: "1px solid #4E1402",
        marginTop: "100px",
        margin: "100px",
        width: "200px",
        height: "200px"
    },
        3000,
        function () {
            $(this).style.backgroundColor = "red";
        }
    );
}

function Up() {
    $("#div1").animate({
        backgroundColor: "black",
        width: "500px",
        height: "500px"
    },
        3000,
        Click
    );
}