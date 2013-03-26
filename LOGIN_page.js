

// Button OK on-click method //
$('#loginBTNOK').die().live({
    click: function () {
        if (!$(this).attr('disabled')) {
            checkUser();
        }
    }
});

// initialize datePicker for user registration page //
$('#j_94 [name="BTNNewUser"]').die().live({
    click: function () {
        $("#registrationDatePicker").val("01/01/1980");
        if (!$(this).attr('disabled')) {
            Tiggr.navigateTo('sign_up', {
                transition: 'flip',
                reverse: false
            });
        }
    }
});


// initialize restore password page //
$('#j_94 [name="lblForgotPasswordLink"]').die().live({
    click: function () {
        if (!$(this).attr('disabled')) {
            Tiggr.navigateTo('restorePassword', {
                transition: 'pop'
            });
        }
    }
});


// checks if user exists in DB //
function checkUser() {

    var email = $('#LoginTBEmail').val();
    var userPassword = $('#LoginTBPassword').val();
    var statusUser = 1;
    if (email != "" && userPassword != "") {

        $.ajax({
            type: "GET",
            url: "proj.ruppin.ac.il/bgroup1/test2/B.L/useres/LoginUser.aspx",
            data: { 'E_Mail': email, 'User_Password': userPassword, 'Status': statusUser },
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            success: function (res) {
                userExists(res);
            },
            // success
            error: function (error) {
                alert(error);
            } //error
        });

        // ajax
    }
    else {
        alert("אנא הכנס דואר אלקטרוני וסיסמה");
    }
}

// handles user-exists result //
function userExists(res) {
    if (res == "False") {
        alert("משתמש לא קיים ו/או סיסמא שגויה")
        $('#LoginTBPassword').val("");
        
    }

    else {

        if ($("#CHKBXrememberMe").is(":checked")) {
            localStorage.setItem('email', $('#LoginTBEmail').val());
            localStorage.setItem('userPassword', $('#LoginTBPassword').val());
            //alert("stored in local storage");
        }

        getNearestStation(); //initialize find nearest station method //
        setTimeout("redirctToPage('#SEARCH')", 5000);
    }
}


function redirctToPage(PageName) {

window.location.href = PageName;

 }





