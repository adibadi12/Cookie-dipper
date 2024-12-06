let isDippet = false;

const milk = document.getElementById("milk");
const cookie = document.getElementById("wholeCookie");
 
cookie.addEventListener("dragstart", (event)=>{
    event.dataTransfer.setData("text/plain")
})