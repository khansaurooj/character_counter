

const textarea1=document.getElementById("textarea");
const counter1=document.getElementById("total-counter");
const remaining1=document.getElementById("Remaining-counter");
textarea1.addEventListener("keyup",()=>{
    updateCounter();
})
updateCounter()
function updateCounter(){
    counter1.innerText=textarea1.value.length
    remaining1.innerText=textarea1.getAttribute("maxlength")-textarea1.value.length;

}