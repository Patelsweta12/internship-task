let submitBtn= document.getElementById("submit")
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    // for name/
    let userName=document.getElementById("userName").value;
    let regexForname=/^[A-Za-z]+$/;
    if(userName.trim()==''){
        document.getElementById("userNameerror").innerHTML="it is required"
    }else if(!userName.match(regexForname)){
        document.getElementById("userNameerror").innerHTML="only alphabets are allowed"
    }
    else{
        document.getElementById("userNameerror").innerHTML=" "
    }
    let dob=document.getElementById("dob").value;
    if(dob==''){
        document.getElementById("dobError").innerHTML="it is required"
    }else{
        document.getElementById("dobError").innerHTML=" "
    }
    
})