$(document).ready(function () {

    $("#myModal").modal('show');

    $(".btn-primary").click(function(){
        $("#myModal").modal('hide');
    });

    var today = new Date();
    var dob = new Date($("#dob").val());
    var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
    if(age < 18)
    {
        alert("Must be over 18");
    }
});
