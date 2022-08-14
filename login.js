function form1(){
    var emailID = document.forms["loginForm"]["emailID"].value;
    var password = document.forms["loginForm"]["password"].value;

    if(emailID==null || emailID==""){
        document.getElementById("errorbox1").innerHTML="Please enter the email ID";
        return false;
    }
    if(password==null || password==""){
        document.getElementById("errorbox2").innerHTML="Please enter the password";
        return false;
    }
    if(emailID!='' && password!='' ){
       alert("Login Successfull!");
    }
}