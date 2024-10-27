const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
const form=document.getElementById('form');
const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const password_error=document.getElementById('password_error')
const cpassword_error=document.getElementById('cpassword_error')


form.addEventListener('submit',(e)=>
    {
        var email_check = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(username.value === '' || username.value == null)
        {
            e.preventDefault();
            name_error.innerHTML = " * Name is required";
        }
        else{
            name_error.innerHTML = "";
        }

        if(!email.value.match(email_check))
        {
            e.preventDefault();
            email_error.innerHTML = " * Valid email is required ";
        }
        else{
            email_error.innerHTML = "";
        }
        if(password.value.length <=5)
            {
                e.preventDefault();
                password_error.innerHTML = " * Password must be more than 6 character";
            }
            else{
                password_error.innerHTML = "";
            }
        if(!cpassword.value.match(password))
        {
            e.preventDefault();
            cpassword_error.innerHTML = " * cPassword should be match password ";
        }
        else{

            cpassword_error.innerHTML = "";
        }
    

})


