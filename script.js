//your JS code here. If required.

const button=document.getElementById("incrementBtn");
const para=document.getElementById("counter");

button.addEventListener("click",(e)=>{
	para.textContent=parseInt(para.textContent)+1
	alert(parseInt(para.textContent)>0?parseInt(para.textContent)-1:para.textContent)
})
