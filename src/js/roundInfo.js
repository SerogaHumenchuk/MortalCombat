// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
let attack;
let defense;
let output;
const fightFunc = e => {
  // console.log(e);
  e.preventDefault();
  let attack = document.querySelector('[name="defense"]:checked').value;
  let defense = document.querySelector('[name="attack"]:checked').value;
  console.log(attack);
  console.log(defense);
  if(attack === null || defense === null){
      output = 'MAKE A CHOISE';
  }else{
  output = `The varname hit Bot in ${attack} and protect ${defense}`;}
  console.log(output);
  ADForm.reset();
};
ADForm.addEventListener('submit', fightFunc);
