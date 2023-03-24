/*
Method 1

const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const sub = document.querySelector(".substract");
const count = document.querySelector(".count");

add.addEventListener("click", () => {
    count.innerHTML++;
});

sub.addEventListener("click", () => {
    count.innerHTML--;
});

reset.addEventListener("click", () => {
    count.innerHTML = 0;
});

*/

//Method 2
const count = document.querySelector(".count");
const buttons=document.querySelector(".buttons");

buttons.addEventListener("click",(e)=>{
        if(e.target.classList.contains("add")){
            count.innerHTML++;
        }
        else if(e.target.classList.contains("substract")){
            count.innerHTML--;
        }
        else{
            count.innerHTML=0;
        }
        setColor();
});

function setColor(){
    if(count.innerHTML==0){
        count.style.color="yellow";
    }
    else  if(count.innerHTML>0){
        count.style.color="green";
    }
    else{
        count.style.color="red";
        
    }
}
 