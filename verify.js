$(document).ready(function(){

    $.ajax({url: "otp_verification.php", success: function(result){
        window.alert(result);
    }});


$("#otp").keyup(function(){

otp_str = $(this).val(),
pattern=/^[0-9- ]*$/;
if (pattern.test(otp_str) == false){
$(".alert").html("OTP contains only digits"),
console.log("not possible")
}
else{
    $(".alert").html(" ")
}
});

$("verify").click(function(){
$.post("script/otp_verification.php",
    {
        uname: $("#otp").val(),
    
    }, function(data, status){
        otp = data;
        console.log(otp)
    })
    if(otp == $("otp").val()){
        $(".alert").html("Sucessful"),
        window.alert("Otp verification succesful.. Now you can enjoy Live chat feature")
        window.location.assign("/project/home.php")
    }
    else{
        $(".alert").html("Wrong otp try again")
    }
});


});