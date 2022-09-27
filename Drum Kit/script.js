window.addEventListener("keydown", function(e)
{
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.drum-keys[data-key = "${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();

    key.classList.add('playing');


})


function removeTransition(e)
{
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
}


const keys = document.querySelectorAll(".drum-keys");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
