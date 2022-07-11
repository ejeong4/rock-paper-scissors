const playBtn = document.querySelector('#start-play');
const body = document.querySelector('body');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



function mouse(e) {
    console.log(e.target.className);
    const target = e.target.className;
    console.log(target + '-hover');
    if (e.type == "mouseover") {
        this.classList.remove(`play-btn`);
        this.classList.add(`play-btn-hover`);
        e.stopPropagation();
    } else if (e.type == "mouseout") {
        this.classList.remove('play-btn-hover');
        this.classList.add('play-btn');
        e.stopPropagation();
    } else if (e.type == "mousedown") {
        this.classList.remove('play-btn-hover');
        this.classList.add('play-btn-click');
        e.stopPropagation();
    } else if (e.type == "mouseup") {
        this.classList.remove('play-btn-click');
        this.classList.add('play-btn-hover');
        e.stopPropagation();
    }
}



playBtn.addEventListener('mouseover', mouse);
playBtn.addEventListener('mouseout', mouse);
playBtn.addEventListener('mousedown', mouse);
playBtn.addEventListener('mouseup', mouse);