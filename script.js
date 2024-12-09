let isDippet = false;

const milk = document.getElementById("milk");
const cookie = document.getElementById("wholeCookie");
 
cookie.addEventListener("dragstart", (event)=>{
    event.dataTransfer.setData('text/plain', event.target.src);
    // Lagre bidle kilde i dataTransfer :)
    event.dataTransfer.effectAllowed = 'copy'; 
});

const dropZone = addEventListener('dragover', (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';


});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const cookieSrc = event.dataTransfer.getData('text/plain');
    const newCookie = document.createElement('img');
    newCookie.src = cookieSrc;
    newCookie.alt = 'Dropped Illustration';
    newCookie.width = 200; // setter størelse
    dropZone.appendChild(newCookie);
});


