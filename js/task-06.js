const validationInput = document.querySelector('#validation-input');

function toggleValidityClass(isValid) {
  validationInput.classList.toggle('valid', isValid);
  validationInput.classList.toggle('invalid', !isValid);
}

validationInput.addEventListener('blur', () => {
  const inputValue = validationInput.value;
  const dataLength = Number(validationInput.dataset.length);

  toggleValidityClass(inputValue.length === dataLength);
});