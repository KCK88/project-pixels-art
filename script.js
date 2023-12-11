for (let index = 0; index < 25; index += 1) {
  const pixelBoard = document.getElementById('pixel-board');
  const pixels = document.createElement('li');
  pixels.className = 'pixel';
  pixelBoard.appendChild(pixels);
}

const selectColor = (eventSource) => {
  const collors = document.querySelectorAll('.color');
  // poderia ter sido feito com forEach
  collors.forEach((color) => {
    color.classList.remove('selected');
  });
  // for (let index = 0; index < collors.length; index += 1) {
  //   collors[index].classList.remove('selected');
  // }

  const selected = eventSource.target;
  selected.classList.add('selected');
};

const insertCollor = (eventSource) => {
  const selected = document.querySelector('.color.selected');
  const cssSelected = window.getComputedStyle(selected, null);

  const SelectedColor = cssSelected.getPropertyValue('background-color');

  const selectedPixel = eventSource.target;
  selectedPixel.style.backgroundColor = SelectedColor;
};

const clearBoard = () => {
  const wipe = document.querySelectorAll('.pixel');
  wipe.forEach((color) => {
color.style.backgroundColor = 'white';
  });
};

const palette = document.querySelector('#color-palette');
palette.addEventListener('click', selectColor);

const pixel = document.querySelector('#pixel-board');
pixel.addEventListener('click', insertCollor);

const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);
