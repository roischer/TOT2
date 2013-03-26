
// redirect to terms of use window//
$('#SIGN_UP_LINKTermOfUse').die().live({
    click: function () {
        window.location.href = "#TERMS_OF_USE";
    }
});



// manual form validation init//
$('#SIGN_UP_BTNOK').die().live({
    click: function () {
        if (!$(this).attr('disabled')) {
            checkingFormIsOk();
        }
    }
});



// manual form validation //
function checkingFormIsOk() {
    var formIsValid = true;

    var emailPart1 = document.getElementById('SIGN_UP_TBEmailPrefix').value;
    var emailPart2 = document.getElementById('SIGN_UP_TBEmailSufix').value;
    var checkEmail = emailPart1.concat("@");
    checkEmail = checkEmail.concat(emailPart2);
    var emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (checkEmail.search(emailFormat) == -1) {
        alert("דואר אלקטרוני שגוי ");
        formIsValid = false;
        return;
    }


    var password = document.getElementById('SIGN_UP_TBPassword').value;


    if (password = "") {
        alert(" אנא הכנס סיסמה");
        formIsValid = false;
        return;
    }

    var password = document.getElementById('SIGN_UP_TBPassword').value;
    var length = password.length;

    if (length < 6) {
        alert(" אנא הכנס סיסמה באורך של 6-15 תווים ");
        formIsValid = false;
        return;
    }


    var repeatPassword = document.getElementById('SIGN_UP_TBPasswordConfirm').value;
    //  var password = document.getElementById('password').value;
    if (password != repeatPassword) {
        alert("אישור סיסמה שגוי");
        formIsValid = false;
        return;
    }



    if (!document.getElementById('SIGN_UP_CHKBXconfirmTerms').checked) {
        alert("אנא אשר את תנאי השימוש");
        formIsValid = false;
    }


    if (formIsValid) {
        addNewUser();
    }
}

// adding user to DB//
function addNewUser() {

    var firstName = $('#SIGN_UP_TBFirstName').val();
    var lastName = $('#SIGN_UP_TBFamilyName').val();
    var birthDay = $('#SIGN_UP_TBbirthday').val();
    var gender = $('#SIGN_UP_DDLSelectSex').val();
    var email = $('#SIGN_UP_TBEmailPrefix').val() + '@' + $('#SIGN_UP_TBEmailSufix').val();
    //var userName = $('#txtUserName').val();
    var userPassword = $('#SIGN_UP_TBPassword').val();
    var statusUser = 0;


    $.ajax({
        type: "GET",
        url: "proj.ruppin.ac.il/bgroup1/test2/B.L/useres/LoginUser.aspx",
        data: { 'First_Name': firstName, 'Last_Name': lastName, 'BirthDay': birthDay, 'Gender': gender, 'E_Mail': email, 'User_Password': userPassword, 'Status': statusUser },
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (res) {

            checkSignUpResult(res);

        },
        // success
        error: function (error) {
            alert(error);
        } //error
    });

    // ajax
}

// callback function after adding user to DB//
function checkSignUpResult(res) {

    if (res == "True") {
        alert("דואר אלקטרוני זה כבר קיים אנא בחר חשבון דואר אחר");

    }
    else {
        alert("משתמש חדש נקלט בהצלחה");
        window.location.href = "#SEARCH";

    }
}
