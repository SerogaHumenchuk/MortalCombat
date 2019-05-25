// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack;
let defense;
let output;
let atchecks = document.querySelectorAll('[name="attack"]');
      let defchecks = document.querySelectorAll('[name="defense"]');

function fightFunc(e) {
  e.preventDefault();
  atchecks.forEach(input => {
    if (input.checked) {
      input.nextElementSibling.classList.remove('chIcon');
      input.nextElementSibling.classList.add('atIcon');
    }
  })
  defchecks.forEach(input => {
    if (input.checked) {
      input.nextElementSibling.classList.remove('chIcon');
      input.nextElementSibling.classList.add('atIcon');
    } 
  })
  let attack = document.querySelector('[name="attack"]:checked').value;
  let defense = document.querySelector('[name="defense"]:checked').value;
  if (attack === null || defense === null) {
    output = 'MAKE A CHOISE';
    console.log(output);
  } else {
    output = `The varname hit Bot in ${attack} and protect ${defense}`;
  }
  console.log(output);
  ADForm.reset();
};
ADForm.addEventListener('click', () => {
      // let checkat = document.querySelector('[name="attack"]:checked');
      // checkat.nextElementSibling.classList.add('chIcon');
      atchecks.forEach(input => {
        if (input.checked) {
            input.nextElementSibling.classList.add('chIcon');
            input.nextElementSibling.classList.remove('atIcon');
        }else{
          input.nextElementSibling.classList.remove('chIcon');
          input.nextElementSibling.classList.add('atIcon')
        }
      })
      defchecks.forEach(input => {
        if (input.checked) {
            input.nextElementSibling.classList.add('chIcon');
            input.nextElementSibling.classList.remove('atIcon');
        }else{
          input.nextElementSibling.classList.remove('chIcon');
          input.nextElementSibling.classList.add('atIcon')
        }
      })
    })
      
      ADForm.addEventListener('submit', fightFunc);
      punchBut.addEventListener('click', resetTimerBut);