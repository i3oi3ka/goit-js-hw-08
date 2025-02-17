const inputName = document.querySelector('#name-input');

inputName.addEventListener('input', outputHandle);
function outputHandle(event) {
  const outputName = document.querySelector('#name-output');
  const name = event.currentTarget.value.trim();
  outputName.textContent = name || 'Anonymous';
}
