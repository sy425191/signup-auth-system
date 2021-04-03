$(document).ready(function(){

$("#changetosignup").click(function(){
$(".login").css({"display":"none"});
$(".signup").css({"display":"block"});
});

$("#changetologin").click(function(){
    $(".signup").css({"display":"none"});
    $(".login").css({"display":"block"});
    
});

$("#unamelogin, #pswlogin, #unamesignup, #pswsignup, #name, #phone").keydown(function(){
    $(this).css("background-color", "yellow");
});
$("#unamelogin, #pswlogin, #unamesignup, #pswsignup, #name, #phone").keyup(function(){
    $(this).css("background-color", "pink");
});



$("#login").click(function(){

$.post("login.php",
{   
    uname: $("#unamelogin").val(),
    psw: $("#pswlogin").val(),
}, function(data, status){
    if(data == 'done'){
        document.cookie = "uname =" + $("#unamelogin").val() + ";expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
        window.location.assign("home.php");
    }
    if(data == 'verify'){
        document.cookie = "uname =" + $("#unamelogin").val() + ";expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
        window.location.assign("verify.html");
    }
    else{
        if($("#alert").hasClass('visible')){
    
        }else{
        $("#alert").html(data);
        $("#alert").slideDown();
        }
    }
    });
});

$("#unamesignup").keyup(function(){
str = $(this).val();
if(str.length > 5){
var pattern=/^[a-zA-Z0-9- ]*$/;
if (pattern.test(str) == false){
$("#unamever").html("Special characters not allowed");
  
}
else{
    $.post("unameverify.html",
    {
        uname: $(this).val()

    }, function(data, status){
        if(data == 'avilable'){
            $("#unamever").html("avilable"); 
        }
        else{
            $("#unamever").html("Already Registered");
        }
    });
    
}

}
else{
    $("#unamever").html("Choose a longer username");
}
});


$("#signup").click(function(){
$.post("signup.php",
{
    uname: $("#unamesignup").val(),
    psw: $("#pswsignup").val(),
    name: $("#name").val(),
    phone: $("#phone").val(),
}, function(data, status){
    if(data == 'done'){
        document.cookie = "uname =" + $("#unamesignup").val() + ";expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
        window.location.assign("home.php");
    }
    else{
        if($("#alert2").hasClass('visible')){
    
        }else{
        $("#alert2").html(data);
        $("#alert2").slideDown();
        }
    }
});


});





});