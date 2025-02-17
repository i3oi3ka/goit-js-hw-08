const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const pass = form.elements.password.value.trim();
  if (email === '' || pass === '') {
    return alert('All fields must be filled in');
  }
  const inputData = { email: email, password: pass };
  console.log(inputData);
  form.reset();
}
