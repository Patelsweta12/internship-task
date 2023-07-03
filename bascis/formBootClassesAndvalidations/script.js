let submitBtn= document.getElementById("submit")
submitBtn.addEventListener("click" , e =>{
    e.preventDefault();
    let userNmae= document.getElementById("userNmae").value;
    let alphNumericRegex = /^[A-Za-z]+$/;
    if(userNmae.trim()==''){
        document.getElementById("usernameError").innerHTML="User name is required"
    }
    else if(!userNmae.match(alphNumericRegex)){
        document.getElementById("usernameError").innerHTML="Enter only characters"

    }
    else{
        document.getElementById("usernameError").innerHTML=" "

    }
    let dob= document.getElementById("dob").value;
    if(dob.trim()==''){
        document.getElementById("dobError").innerHTML="dob name is required"
    }

    let phoneNo= document.getElementById("phoneNo").value;
    if(dob.trim()==''){
        document.getElementById("phError").innerHTML="Phone number is required"
    }

})