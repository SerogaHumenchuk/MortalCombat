const form = document.querySelector('.form');
const name = document.querySelector('.name');
const start = document.querySelector('.start');
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
}
