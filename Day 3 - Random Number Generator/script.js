

const btn=document.querySelector(".button");
const count=document.querySelector(".count");


btn.addEventListener("click",()=>{
    var e = document.getElementById("range");
    var value = e.options[e.selectedIndex].value;
    count.innerHTML=randomNumberGenerator(value);

});

 function randomNumberGenerator(range){
    return Math.floor(Math.random()*range+1);
}