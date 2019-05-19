const form = document.querySelector('.form');
const name = document.querySelector('.name');
const firstPageWrapp = document.querySelector('.firstPageWrapp');
const secondPageWrapp = document.querySelector('.secondPageWrapp');

form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  firstPageWrapp.classList.add('hide');
  secondPageWrapp.classList.remove('hide');
}
