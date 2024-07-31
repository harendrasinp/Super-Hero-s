const userInput=document.querySelector("#user-input");
const btn=document.querySelector("#btn");
const msg=document.querySelector("#under-con");
btn.addEventListener("click",()=>{
    if(userInput){
        msg.innerHTML="Site Under Constuction";
    }
});