const pwShow = document.querySelector("#show");
const createPw = document.querySelector("#create-pw");
const confirmPw = document.querySelector("#confirm-pw");
const alertIcon = document.querySelector(".error-icon");
const alertText = document.querySelector("#text");
const submitBtn = document.querySelector("#button");

//show and hide password
pwShow.addEventListener("click", ()=>{
    if((createPw.type === "password") && (confirmPw.type === "password")){
        createPw.type = "text";
        confirmPw.type = "text";
        pwShow.classList.replace("fa-eye-slash", "fa-eye")
    } else{
        createPw.type = "password";
        confirmPw.type = "password";
        pwShow.classList.replace("fa-eye", "fa-eye-slash")
    }
});

//check and confirm password

createPw.addEventListener("input", ()=>{
   let inputValue = createPw.value.trim(); //trim function dont count more than one space

if(inputValue.length >= 8){
    confirmPw.removeAttribute("disabled");
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("active");
}else{
    confirmPw.setAttribute("disabled", true);
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.remove("active");
    confirmPw.value = "";
    alertText.innerText = "Enter at least 8 characters";
    alertText.style.color = "rgb(112, 112, 112)";
}
})

submitBtn.addEventListener("click", ()=>{
    if(createPw.value === confirmPw.value){
        alertText.innerText = "Password matched";
        alertIcon.style.display = "none";
        alertText.style.color = "rgb(112, 112, 112)";
    }else{
        alertText.innerText = "Password didn't matched";
        alertIcon.style.display = "block";
        alertText.style.color = "rgb(163, 34, 34)";
    }
})