//elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//toggle play/pause
let togglePlay = () => (video[video.paused ? 'play' : 'pause']());
let updateButton = () => toggle.textContent = video.paused ? '►' : '❚ ❚';
let handleProgressBar = () => progressBar.style.flexBasis = `${(video.currentTime/video.duration) * 100}%`;
let handleProgressClick = (e) => video.currentTime = ((e.offsetX/ progress.offsetWidth) * video.duration);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgressBar);
toggle.addEventListener('click', togglePlay);

skipButton.forEach(button => {
    //parsefloat to change into string
    button.addEventListener('click', () => video.currentTime += parseFloat(button.dataset.skip));
});

let mousedown = false
progress.addEventListener('click', handleProgressClick);
progress.addEventListener('mousemove', (e) => mousedown && handleProgressClick(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//function for volume/speed slider
ranges.forEach(range => {
    range.addEventListener('change', () => video[range.name] = range.value);
    range.addEventListener('mousemove', () => video[range.name] = range.value);
});

window.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        video.currentTime += -10;
    }
    else if(e.key === 'ArrowRight'){
        video.currentTime += 25;
    }
});
