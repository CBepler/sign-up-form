const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm-pass");

confirmPass.addEventListener("input", ()=>{
    if(confirmPass.value === pass.value){
        confirmPass.setCustomValidity("");
    }
    else{
        confirmPass.setCustomValidity("Passwords do not match!");
    }
});