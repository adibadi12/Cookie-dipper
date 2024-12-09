let currentX = 0, currentY = 0;

const milk = document.getElementById("milk");
const cookie = document.getElementById("wholeCookie");
const message = document.getElementById("message");
 
cookie.addEventListener("dragstart", (event)=>{
    event.dataTransfer.setData('text/plain',"");
    // Lagre bidle kilde i dataTransfer :)
});

cookie.addEventListener("dragend", (event) =>{
    // Få droppe lokasjonen
    currentX = event.pageX - cookie.width / 2;
    currentY = event.pageY - cookie.height / 2;
 
    // Oppdater positionen til kjeksen...
    cookie.style.left = `${currentX}px`;
    cookie.style.top = `${currentY}px`;

    const milkRect = milk.getBoundingClientRect();
    if (
        currentX > milkRect.left &&
        currentX < milkRect.right &&
        currentY > milkRect.left &&
        currentY < milkRect.bottom 

    ) {
        message.textContent = "Great job! You dipped the cookie!";
        message.style.color = "green";
      } else {
        message.textContent = "Nah bro, do it like santa.";
        message.style.color = "red";
      }

})




