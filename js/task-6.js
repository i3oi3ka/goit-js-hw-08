function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createHandle(event) {
  const input = document.querySelector('#controls input');
  const inputValue = Number(input.value);
  if (inputValue > 0 && inputValue <= 100) {
    destroyBoxes();
    input.value = '';
    createBoxes(inputValue);
  }
}

function destroyHandle(event) {
  destroyBoxes();
}

function destroyBoxes() {
  const boxes = document.querySelector('#boxes');
  boxes.textContent = '';
}

function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  const renderedBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    renderedBoxes.append(box);
  }
  boxes.append(renderedBoxes);
}

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
buttonDestroy.addEventListener('click', destroyHandle);
buttonCreate.addEventListener('click', createHandle);
