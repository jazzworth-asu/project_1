
$(document).ready(function () {

    getLocation();

    $("#joinUs").on('shown.bs.modal', resetJoinUsForm);
    $("#joinUsButton").click(submitJoinUsForm)

    /*sign in validation*/
    $("#signInForm").on('shown.bs.modal', resetSignInForm);
    $("#signInButton").click(submitSignInForm)

  


});

  /*drag and drop*/
  function allowDrop(ev)
  {
  ev.preventDefault();
  }

  function drag(ev)
  {
  ev.dataTransfer.setData("text",ev.target.id);
  }

  function drop(ev)
  {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  }


