
function play_clock(){
    const clock = document.querySelector(".clock");
    const a = new Date();
    
    const hour = String(a.getHours()).padStart(2,'0');
    const minute = String(a.getMinutes()).padStart(2,'0');
    const second = String(a.getSeconds()).padStart(2,'0');
    clock.innerText = `${hour}:${minute}:${second}`;
}
play_clock()
setInterval(play_clock,1000);
