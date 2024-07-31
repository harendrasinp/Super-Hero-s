const userInput=document.querySelector("#user-input");
const btn=document.querySelector("#btn");
const msg=document.querySelector("#under-con");
btn.addEventListener("click",()=>{
    if(userInput){
        msg.innerHTML="Sorry Site Under Constuction, Please contact Harendrasinh on haren111990@VayuSoftwares.com";
    }
});