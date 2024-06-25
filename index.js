const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit' ,(e)=>{
   
    if(!validateInputs){
      e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.ariaValueMax.trim()
    const emailVal = email.ariaValueMax.trim();
    const passwordVal = password.ariaValueMax.trim();
    const cpasswordVal = cpassword.ariaValueMax.trim();

    let success = true

    if(usernameVal===''){
        success=false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success=false
        setError(email,'Email is required')
    }

    else if(!validateEmail(emailVal)){
        success=false
        setError(email,'Please enter a valid email')
    }

    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success=false
        setError(password,'password is required')
    }

    else if(passwordVal.lenght<8){
        success=false
        setError(password,'password must be atleast 8 character')
    }

    else{
        setSuccess(password)
    }
    if(cpasswordVal === ''){
        success=false
        setError(cpassword,'Confirm password is required')
    }

    else if(cpasswordVal !==passwordVal){
        success=false
        setError(cpassword,'password does not match')
    }

    else{
        setSuccess(cpassword)
    }

    return success;


}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    );
}