function submitSignInForm() {

    resetSignInForm()

    //signin username
    let username = $("#signInInputUsername").val().trim()
    if (username.length == 0) {
        $('#signInInputUsernameRequired').removeClass('d-none')
    }
    
    //signin password
    let password = $("#signInpassword").val()
    if (password.length == 0) {
        $('#signInpasswordRequired').removeClass('d-none')
    }
}

function resetSignInForm() {

    // Reset the classes for the errors in the form
    if (!$("#signInInputUsernameRequired").hasClass("d-none")) $("#signInInputUsernameRequired").addClass("d-none")
    if (!$("#signInpasswordRequired").hasClass("d-none")) $("#signInpasswordRequired").addClass("d-none")
    
}