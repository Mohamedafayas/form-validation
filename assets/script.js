document.getElementById("form-validate").addEventListener("submit",function(event){

    event.preventDefault();    //stops the page refreshing 

    let userName = document.getElementById("userName").value.trim()
    let email = document.getElementById("email").value.trim()
    let phone = document.getElementById("phone").value.trim()
    let password = document.getElementById("password").value.trim()
    let ConfirmPassword = document.getElementById("confirmPassword").value.trim()

    let UsernameValid;
    let UserMailValid;
    let UserPhoneValid;
    let UserPasswordValid;
    let UserCPasswordValid;

    let UsernamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
    let phonePattern = /^[0-9]{10}$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,14}$/;

    if(userName === ""){
        document.getElementById("UserName-error").innerText = "*Name is Required"
        UsernameValid = false;
    }
    else if( !UsernamePattern.test(userName) ){
        document.getElementById("UserName-error").innerText = "*Enter the Full Name"
        UsernameValid = false;
    }
    else if( UsernamePattern.test(userName) ){
        document.getElementById("UserName-error").innerText = ""
        UsernameValid = true;
    }

    if(email === ""){
        document.getElementById("email-error").innerText = "*Email is Required"
        UserMailValid = false;
    }
    else if( !emailPattern.test(email) ){
        document.getElementById("email-error").innerText = "*Enter a valid mail"
        UserMailValid = false;
    }
    else if( emailPattern.test(email) ){
        document.getElementById("email-error").innerText = ""
        UserMailValid = true;
    }

    if( phone === "" ){
        document.getElementById("phone-error").innerText = "*Phone Number is Required"
        UserPhoneValid=false;
    }
    else if( !phonePattern.test(phone)){
        document.getElementById("phone-error").innerText = "*Enter a valid Mobile Number"
        UserPhoneValid=false;
    }
    else if( phone.length !== 10 ){
        document.getElementById("phone-error").innerText = "*Enter a valid Mobile Number"
        UserPhoneValid=false;
    }
    else if( phone.length === 10 ){
        document.getElementById("phone-error").innerText = ""
        UserPhoneValid=true;
    }

    if(password === ""){
        document.getElementById("password-error").innerText = "*Password is Required"
        UserPasswordValid = false;
    }

    else if( password.length > 14){
        document.getElementById("password-error").innerText = "*Password exceeds 14 Characters"
        UserPasswordValid = false;
    }

    else if( password.length < 8){
        document.getElementById("password-error").innerText = "*Password must be atleast 8-14 Characters"
        UserPasswordValid = false;
    }

    else if( !passwordPattern.test(password)){
        document.getElementById("password-error").innerText = "*No Uppercase or digit"
        UserPasswordValid = false;
    }

    else if( passwordPattern.test(password)){
        document.getElementById("password-error").innerText = ""
        UserPasswordValid = true;
    }

    if(ConfirmPassword === ""){
        document.getElementById("Cpassword-error").innerText = "*Confirm Password is Required"
        UserCPasswordValid = false;
    }
    else if( ConfirmPassword !== password ){
        document.getElementById("Cpassword-error").innerText = "*Password Does not match"
        UserCPasswordValid = false;
    }
    else if( ConfirmPassword === password ){
        document.getElementById("Cpassword-error").innerText = ""
        UserCPasswordValid = true;
    }
 
    if(UsernameValid == true && UserMailValid == true && UserPhoneValid == true && UserPasswordValid == true && UserCPasswordValid == true){
        alert(`Hi ${userName}, Welcome to Our Website`);
        console.log(userName,email,phone,password,ConfirmPassword);
        
    }
})


