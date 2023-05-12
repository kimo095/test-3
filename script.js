const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
});
