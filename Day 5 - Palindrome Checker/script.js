const btn=document.querySelector(".btn");
const ans=document.querySelector(".result");

btn.addEventListener("click",()=>{
    const str=document.querySelector(".input-text").value.toLowerCase();
   let rev=str.toLowerCase().split('').reverse().join('');
   if(str===rev)
    ans.innerHTML=`${str}`+ " is a Palindrome";
   else
   ans.innerHTML=`${str}`+ " is Not Palindrome";
    
})


