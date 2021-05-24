
$(document).ready(function () {

    getLocation()

    $("#joinUsButton").click(() => {

        // Reset the classes for the errors in the form
        if (!$("#usernameRequired").hasClass("d-none")) $("#usernameRequired").addClass("d-none")
        if (!$("#usernameLongerThanEightChar").hasClass("d-none")) $("#usernameLongerThanEightChar").addClass("d-none")
        if (!$("#emailRequired").hasClass("d-none")) $("#emailRequired").addClass("d-none")
        if (!$("#emailRequired").hasClass("d-none")) $("#emailRequired").addClass("d-none")

        // Username
        let username = $("#username").val().trim()
        if (username.length == 0) {
            $('#usernameRequired').removeClass('d-none')
        }
        if (username.length > 8) {
            $('#usernameLongerThanEightChar').removeClass('d-none')
        }

        // Email
        let email = $("#email").val().trim()
        if (username.length == 0) {
            $('#emailRequired').removeClass('d-none')
        }
        if(! validateEmail(email)){
            $('#emailFormatRequired').removeClass('d-none')
        }

        // Password
        let password = $("#password").val()
        if (passwordIsLongerThanEightCharacters(password)) {
            $('#passwordLongerThanEightChar').removeClass('d-none')
        }
        if (! uppercaseExistsInPassword(password)) {
            $('#passwordLongerThanEightChar').removeClass('d-none')
        }
        if (! lowercaseExistsInPassword(password)) {
            $('#passwordLowercase').removeClass('d-none')
        }
        if (! digitExistsInPassword(password)) {
            $('#passwordDigit').removeClass('d-none')
        }

        let firstName = $("#firstName").val()
        let middleName = $("#middleName").val()
        let lastName = $("#lastName").val()
        let streetAddress = $("#streetAddress").val()
        let city = $("#city").val()
        let zipcode = $("#zipcode").val()
        let tel = $("#tel").val()
        let country = $("#country").val()
        let dob = $("#dob").val()
        let memberOrganization = $("#memberOrganization").val()

    })

    $('#gender').on('click', function () {
        let gender = ($(this).val());
    });

    $('#state').on('click', function () {
        let state = ($(this).val());
    });

});

function getLocation() {

    var loc = document.getElementById("location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            loc.innerHTML = "Latitude: " + (position.coords.latitude).toFixed(2) + ", Longitude: " + (position.coords.longitude).toFixed(2);
        });
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function lowercaseExistsInPassword(password){
    return (/[a-z]/.test(password))
}

function uppercaseExistsInPassword(password){
    return (/[A-Z]/.test(password))
}

function digitExistsInPassword(password){
    return (/[0-9]/.test(password))
}

function passwordIsLongerThanEightCharacters(password){
    return (password.length > 8)
}


