let isDragging = false; // tracker draggingen
let offsetX = -10; 
let offsetY = -10;

const milk = document.getElementById("milk");
const cookie = document.getElementById("wholeCookie");
const message = document.getElementById("message");

cookie.addEventListener("mousedown", (event) => {
    isDragging = true;
    cookie.style.cursor = "grabbing"; // GJør at du kan grabbe cookien

    const cookieRect = cookie.getBoundingClientRect();

    // Calculate offset where the mouse is relative to the cookie
    offsetX = event.clientX - cookieRect.left;
    offsetY = event.clientY - cookieRect.top;
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const playAreaRect = document.querySelector('.santasTreats').getBoundingClientRect();

    // oppdaterer cookien sin posisjon med hjelp av musepekeren.
    const x = event.pageX - playAreaRect.left - offsetX;
    const y = event.pageY - playAreaRect.top - offsetY;

    cookie.style.left = `${x}px`;
    cookie.style.top = `${y}px`;
});

document.addEventListener("mouseup", (event) => {
    if (!isDragging) return;

    isDragging = false;
    cookie.style.cursor = "grab"; // Reseter musepekern

    // skjekke om cookien er i melken
    const milkRect = milk.getBoundingClientRect();
    if (
        event.pageX > milkRect.left &&
        event.pageX < milkRect.right &&
        event.pageY > milkRect.top &&
        event.pageY < milkRect.bottom
    ) {
        message.textContent = "Great job! You dipped the cookie!";
        message.style.color = "blue";
    } else {
        message.textContent = "Nah bro, do it like Santa.";
        message.style.color = "red";
    }
});
