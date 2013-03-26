//Gets ynet headlines From Ynet RSS //
function getYnet() {

    $.ajax({
        type: "GET",
        url: "proj.ruppin.ac.il/bgroup1/test2/B.L/ynetHeadlines/ynetRss.aspx",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (res) {
            showYnet(res);
        },
        // success
        error: function (error) {
            alert(error);
        } //error
    });
}

//call back function //
function showYnet(res) {
    for (var i = 0; i < 3; i++) {
        res += res;
    }
    $("#ynet").append(res);
} 

