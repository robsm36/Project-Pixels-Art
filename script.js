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

