function ValidateEmail(email)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(email.value.match(mailformat))
{
alert("You have entered a valid email address!");    //The pop up alert for a valid email address
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
document.form1.text1.focus();
return false;
}
}
function validateform()
{  
        var name=document.myform.name.value;  
        var password=document.myform.password.value;  
          
    if (name==null || name=="")
    {  
            alert("Name can't be blank");  
            return false;  
    }else if(password.length<6)
    {  
            alert("Password must be at least 6 characters long.");  
            return false;  
    }  
}  
