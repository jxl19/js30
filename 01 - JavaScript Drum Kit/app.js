//to remove css after transition done
function removeTransition(e) {
    e.preventDefault();
    if(e.propertyName !== 'transform'){
        return;
    }
    e.target.classList.remove('playing');
}

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`diV[data-key="${e.keyCode}"]`);
    if(!audio) {
        return;
    }
    key.classList.add('playing');
    //sets time current position in seconds
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})
window.addEventListener('keydown', playAudio);
