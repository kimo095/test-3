const form = document.querySelector('form');
const submitBtn = form.querySelector('button');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
});
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const name = nameInput.value;
const email = emailInput.value;
const message = messageInput.value;


