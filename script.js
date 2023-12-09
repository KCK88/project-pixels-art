for (let index = 0; index < 25; index += 1) {
  const pixelBoard = document.getElementById('pixel-board');
  const pixels = document.createElement('li');
  pixels.className = 'pixel';
  pixelBoard.appendChild(pixels);
}
