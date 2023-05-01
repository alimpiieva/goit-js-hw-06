const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value;
  if (inputValue === '') {
    nameOutput.textContent = "Anonymus";
  } else {
    nameOutput.textContent = inputValue;
  }
});


