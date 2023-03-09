
const word=document.querySelector(".input-text");
const btn=document.querySelector(".btn");
const result=document.querySelector(".result");

btn.addEventListener("click",()=>{
    var vowel_count=0;
    var str=word.value;
    for(var ch=0;ch<str.length;ch++){
        if(str[ch]=='a' || str[ch]=='e' ||str[ch]=='i' ||str[ch]=='o' ||str[ch]=='u' ||
           str[ch]=='A' || str[ch]=='E' ||str[ch]=='I' ||str[ch]=='O' ||str[ch]=='U' ){
            vowel_count++;
        }
    }
    result.innerHTML="<h3>The count of vowel is "+ `${vowel_count}`+" </h3>";
  
})