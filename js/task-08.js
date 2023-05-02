const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const { email: { value: email }, password: { value: password } } = loginForm.elements;
 
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




