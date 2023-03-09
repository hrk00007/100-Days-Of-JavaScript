const word=document.querySelector(".input-text");
const count=document.querySelector(".count");

word.addEventListener("keyup",()=>{
    count.innerHTML=word.value.length;
})