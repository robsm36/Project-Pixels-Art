let pixelBoard = document.querySelector('#pixel-board');
pixelBoard.id = 'pixel-board';

var inputNum = 8;
var totalPixels = inputNum * inputNum;
var counter = 0;

for (i = 0; i < totalPixels; i += 1) {
    counter += 1;
    var divv = document.createElement('div');
    divv.className = 'pixel';
    divv.style.backgroundColor = 'white';
    pixelBoard.appendChild(divv);

    if (counter % inputNum == 0) {
        pixelBoard.appendChild(document.createElement('br'));
    }
}

let orangeColor = document.querySelector('.orange');
let greenColor = document.querySelector('.green');
let purpleColor = document.querySelector('.purple');
let blackColor = document.querySelector('.black');
let redColor = document.querySelector('.red');
let blueColor = document.querySelector('.blue');
let pinkColor = document.querySelector('.pink');

let colors = ['orange', 'green', 'purple', 'black', 'red', 'blue', 'pink'];

function selectColor(event) {
    for (i = 0; i < 7; i += 1) {
        document.querySelector('.' + colors[i]).classList.remove('selected');
        event.target.classList.add('selected');
    }
}

orangeColor.addEventListener("click", selectColor);
greenColor.addEventListener("click", selectColor);
purpleColor.addEventListener("click", selectColor);
blackColor.addEventListener("click", selectColor);
redColor.addEventListener("click", selectColor);
blueColor.addEventListener("click", selectColor);
pinkColor.addEventListener("click", selectColor);

var pixelList = document.querySelectorAll('.pixel');

function tintPixel(event) {
    let selectedColor = document.createElement('div');
    selectedColor.classList = document.querySelector('.selected').classList;
    selectedColor.classList.remove("selected");
    selectedColor.classList.remove("color");
    selectedColor.classList.add("pixel");
    let clickTarget = event.target;
    clickTarget.style.removeProperty('background-color');
    clickTarget.classList = selectedColor.classList;
}

for (i = 0; i < totalPixels; i += 1) {
    pixelList[i].addEventListener("click", tintPixel);
}

function clearBoard() {
    for (let i = 0; i < pixelList.length; i += 1) {
        pixelList[i].style.backgroundColor = 'white';
    }
}

let clearButton = document.querySelector('#clear-board');
clearButton.addEventListener("click", clearBoard)

function resizeBoard() {
    let sizeInput = document.querySelector('#size-input');
    let newSize = sizeInput.value;

    if (newSize < 1 || newSize > 15) {
        alert("Por favor escolha um número entre 1 e 15.");
        return;
    }

    pixelBoard.innerHTML = '';
    totalPixels = newSize * newSize;
    counter = 0;

    for (i = 0; i < totalPixels; i += 1) {
        counter += 1;
        var divv = document.createElement('div');
        divv.className = 'pixel';
        divv.style.backgroundColor = 'white';
        pixelBoard.appendChild(divv);

        if (counter % newSize == 0) {
            pixelBoard.appendChild(document.createElement('br'));
        }
    }

    pixelList = document.querySelectorAll('.pixel');

    for (i = 0; i < totalPixels; i += 1) {
        pixelList[i].addEventListener("click", tintPixel);
    }
}

let resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener("click", resizeBoard);
