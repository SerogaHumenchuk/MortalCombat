// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack;
let defense;
let output;
function fightFunc(e){
  e.preventDefault();
  let attack = document.querySelector('[name="attack"]:checked').value;
  let defense = document.querySelector('[name="defense"]:checked').value;
  attack.classList.add("chIcon")
  if(attack === null || defense === null){
      output = 'MAKE A CHOISE';
      console.log(output);
  }else{
  output = `The varname hit Bot in ${attack} and protect ${defense}`;}
  console.log(output);
  ADForm.reset();
};
ADForm.addEventListener('submit', fightFunc);
punchBut.addEventListener('click', resetTimer);