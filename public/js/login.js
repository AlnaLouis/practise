
function valiDation(){


email=document.getElementById('email');

error1=document.getElementById('error1');



var re = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

     if(email.value.trim()==""){
        error1.innerHTML="Error:please fillout this field";
        email.style.border="2px solid red";
        error1.style.visibility="visible"
        email.focus()
        return false;
    }
   else if(!re.test(email.value.trim())) {
        error1.innerHTML="Error: email is invalid";
        email.style.border="2px solid red";
        error1.style.visibility="visible"
        email.focus();
        return false;
      }
    
      else
      error1.innerHTML="";
      email.style.border="2px solid green";
      return true;
}
