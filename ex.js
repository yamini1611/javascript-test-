function validate(){
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const dob = document.getElementById("date");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirmpassword");
const phoneno = document.getElementById("phoneno");
const teleno = document.getElementById("teleno");
const address = document.getElementById("address");

const BOOKS = document.getElementById("BOOK").checked;
const TRAVELLING = document.getElementById("TRAVELLING").checked;
const GARDENING = document.getElementById("GARDENING").checked;
var letters = /^[A-Za-z \s]+$/;
var mobpat = /^\(?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{6})$/;
var mob = /^[0-9]{10}$/;
var emailfil = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if (firstname == "") {
    alert("FIRST NAME CAN'T BE BLANK");
}
else if (!letters.test(firstname)) {
    alert(" FIRST NAME SHOULD CONTAIN ONLY ALPHABETS");
}
else if (lastname == "")
{
    alert("LAST NAME CAN'T BE BLANK");
}
else if (!letters.test(lastname))
{
    alert(" LAST NAME SHOULD CONTAIN ONLY ALPHABETS");
}
else if(password != confirm_password)
{
    alert("PASSWORDS DOES NOT MATCH");
}
else if(!mobpat.test(teleno))
{
    alert("TELEPHONE NUMBER DOES NOT MATCH THE  REGURIED PATTERN");
}
else if(!mob.test(phoneno))
{
    alert("PHONE NUMBER SHOULD CONTAIN 10 DIGITS");
}
else if(address=="")
{
    alert("ADDRESS CAN'T BE BLANK ");
}
else if(emailfil.test(email))
{
    alert("EMAIL FORMAT IS WRONG");
}
else {
    alert("REGISTRATION SUCESSFUL");
 display(firstname,lastname,gender,address,dob,BOOKS,GARDENING,TRAVELLING,phoneno,teleno,email)
}
}
  function display(firstname,lastname,gender,address,dob,BOOKS,GARDENING,TRAVELLING,phoneno,teleno,email)
  {
    document.write(" <p><strong>FIRST NAME:</strong> "+ firstname +"</p>");
    document.write(" <p><strong>LAST  NAME:</strong> "+ lastname +"</p>");
    document.write(" <p><strong>DOB:</strong> "+ dob +"</p>");
    document.write(" <p><strong>ADDRESS:</strong> "+ address +"</p>");
    document.write(" <p><strong>PHONE NO:</strong> "+ phoneno +"</p>");
    document.write(" <p><strong>TELEPHONE NO:</strong> "+ teleno +"</p>");
    document.write(" <p><strong>EMAIL:</strong> "+ email +"</p>");
    document.write(" <p><strong>GENDER:</strong> "+ gender +"</p>");
    if (BOOKS)
    {
        document.write(" <p><strong>PERSONAL INTEREST:</strong> "+ BOOKS +"</p>");
    }
     if(GARDENING)
    {
        document.write(" <p><strong>PERSONAL INTEREST:</strong> "+ GARDENING +"</p>");
    }
    if(TRAVELLING)
    {
        document.write(" <p><strong>PERSONAL INTEREST:</strong> "+ TRAVELLING +"</p>");  
    }
  }
