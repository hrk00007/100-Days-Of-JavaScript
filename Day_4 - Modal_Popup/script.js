const btn=document.querySelector(".btn"),
close=document.querySelector(".close"),
modal=document.querySelector(".modal");
  
 btn.addEventListener("click",openModal);
 close.addEventListener("click",closeModal);
 modal.addEventListener("click",closeModal);
     
 function openModal(e){
    e.preventDefault();
    modal.style.display="block";
 }  
 function closeModal(e){
    modal.style.display="none";
 }  