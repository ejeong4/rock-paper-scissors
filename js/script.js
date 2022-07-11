const playBtn = document.querySelector('#start-play');

function mouse(e) {
    if (e.type == 'mouseover') {
        this.classList.add(`play-btn-hover`);
    } else if (e.type == 'mouseout') {
        this.classList.remove('play-btn-hover');
    } else if (e.type == "mousedown") {
        this.classList.add('play-btn-click');
    } else if (e.type == "mouseup") {
        this.classList.remove('play-btn-click');
    }
}

playBtn.addEventListener('mouseover', mouse);
playBtn.addEventListener('mouseout', mouse);
playBtn.addEventListener('mousedown', mouse);
playBtn.addEventListener('mouseup', mouse);