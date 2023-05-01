const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  if (!email || !password) {
    alert('Fill in all the fields');
    return;
  }
  const formData = {
    email,
    password
  };
  console.log(formData);
  loginForm.reset();
});




