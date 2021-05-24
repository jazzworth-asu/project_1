
$(document).ready(function () {

    getLocation();

    $("#joinUs").on('shown.bs.modal', resetJoinUsForm);
    $("#joinUsButton").click(submitJoinUsForm)

});
