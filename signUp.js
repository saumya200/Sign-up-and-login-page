function form2(){
    var name = document.forms["signUpForm"]["name"].value;
    var emailID = document.forms["signUpForm"]["emailID"].value;
    var password = document.forms["signUpForm"]["password"].value;
    var retypepassword = document.forms["signUpForm"]["retypepassword"].value;

    if(name==null || name==""){
        document.getElementById("errorbox1").innerHTML="Please enter your name!";
        return false;
    }
    if(emailID==null || emailID == ""){
        document.getElementById("errorbox2").innerHTML="Please enter your email ID !";
        return false;
    }
    if(password==null || password==""){
        document.getElementById("errorbox3").innerHTML="Please enter your password!";
        return false;
    }
    if(retypepassword==null || retypepassword==""){
        document.getElementById("errorbox4").innerHTML="Please re-type password!";
        return false;
    }
    if(password!=retypepassword){
        document.getElementById("errorbox4").innerHTML="Password Don't Match";
        return false;
    }
    if(name!='' && emailID!='' && password!='' && retypepassword!='' && password==retypepassword){
        alert("SignUp Successfull!")
    }
}