let pixelBoard = document.querySelector('#pixel-board');
pixelBoard.id = 'pixel-board';

for (i = 1; i < 26; i += 1) {
    let divv = document.createElement('div');
    divv.className = 'pixel';
    pixelBoard.appendChild(divv);
}

let orangeColor = document.querySelector('.orange');
let greenColor = document.querySelector('.green');
let purpleColor = document.querySelector('.purple');
let blackColor = document.querySelector('.black');

blackColor.classList.add ('selected');

let colors = ['orange', 'green', 'purple', 'black']

function selectColor (event) {
    for (i = 0; i < 4; i += 1) {
        document.querySelector('.' + colors[i]).classList.remove('selected');
        event.target.classList.add('selected');
    }
}

orangeColor.addEventListener("click", selectColor);
greenColor.addEventListener("click", selectColor);
purpleColor.addEventListener("click", selectColor);
blackColor.addEventListener("click", selectColor);

let pixelList = document.querySelectorAll('.pixel');

function tintPixel (event) {
    let selectedColor = document.createElement('div');
    selectedColor.classList = document.querySelector('.selected').classList;
    selectedColor.classList.remove("selected");
    selectedColor.classList.remove("color");
    event.target.classList = selectedColor.classList;
}

for (i = 0; i < 25; i += 1) {
    pixelList[i].addEventListener("click", tintPixel);
}