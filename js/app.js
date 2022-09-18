const close=document.querySelector("#close");
const opean=document.querySelector("#open");
const parda=document.querySelector("#parda");

opean.addEventListener("click", ()=>{
  parda.style.display="block";
});
close.addEventListener("click", ()=>{
  parda.style.display="none";
});